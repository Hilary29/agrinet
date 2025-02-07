"use client";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { useEffect } from 'react';
import { saveToken } from "../../../services/auth/saveTokenService";
import {
    decodeToken,
    getAccessToken,
    TokenResponse,
} from "../../../services/auth/authService";

import { AuthRoutes } from "@/config/routes";

export default function GoogleCallback() {
    const router = useRouter();

    useEffect(() => {
        const getCodeAndState = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');
            const state = urlParams.get('state');

            if (code && state) {
                try {
                    const response = await axios.get(AuthRoutes.REGISTER_GOOGLE, {
                        params: { code, state },
                    });

                    const jwtToken: TokenResponse = response.data;
                    console.log("User authenticated:", jwtToken);

                    const accessToken = getAccessToken(jwtToken);
                    console.log("Access Token:", accessToken);

                    const decodedToken = decodeToken(accessToken);
                    console.log("Decoded Token:", decodedToken);

                    // Chiffrer et sauvegarder le token
                    await saveToken(accessToken);
                    router.push("/marketplace/all-products");

                } catch (error) {
                    console.error('Error during the API call:', error);
                }
            }
        };

        getCodeAndState();
    }, []);

    return (
        <div>
            Loading...
        </div>
    );
}