import jwt from 'jsonwebtoken';
import { AuthRoutes } from "@/config/routes";

interface TokenPayload {
    exp: number; // Expiration time
    resource_access: {
        [key: string]: {
            roles: string[];
        };
    };
}

export interface TokenResponse {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
}

export const decodeToken = (token: string): TokenPayload | null => {
    try {
        const decoded = jwt.decode(token) as TokenPayload;
        return decoded;
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};

export const isTokenValid = (token: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded) return false;

    // Check if the token is expired
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp > currentTime; // Token is valid if not expired
};

export const hasRole = (token: string, role: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded) return false;

    // Check if the user has the specified role in the resource_access section
    for (const resource in decoded.resource_access) {
        if (decoded.resource_access[resource].roles.includes(role)) {
            return true; // User has the specified role
        }
    }

    return false; // User does not have the specified role
};

export const getAccessToken = (data: TokenResponse): string => {
    return data.access_token;
};


export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(AuthRoutes.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            // Si la réponse n'est pas OK, extraire le message d'erreur
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        return await response.json(); // Retourner la réponse en cas de succès
    } catch (error) {
        throw error; // Relancer l'erreur pour qu'elle soit capturée dans le formulaire
    }
};