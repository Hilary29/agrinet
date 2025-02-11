
// Fonction pour convertir un ArrayBuffer en Base64
const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};

// Fonction pour générer une clé symétrique
export const generateKey = async (): Promise<CryptoKey> => {
    return await crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"]
    );
};

// Fonction pour chiffrer le JWT
export const encryptToken = async (token: string): Promise<Uint8Array> => {
    const key = await generateKey();
    const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialisation vector
    const encodedToken = new TextEncoder().encode(token);

    const encryptedToken = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        key,
        encodedToken
    );

    // Convertir la clé en Base64
    const keyBuffer = await crypto.subtle.exportKey("raw", key);
    const base64Key = arrayBufferToBase64(keyBuffer);

    // Stocker la clé et l'IV pour le déchiffrement
    sessionStorage.setItem('encryptionKey', base64Key);
    sessionStorage.setItem('iv', JSON.stringify(Array.from(iv))); // Convertir l'IV en chaîne JSON

    return new Uint8Array(encryptedToken);
};

// Fonction pour sauvegarder le token chiffré
export const saveToken = async (token: string): Promise<void> => {
    const encryptedToken = await encryptToken(token);
    sessionStorage.setItem('jwtToken', JSON.stringify(Array.from(encryptedToken))); // Convertir le token en chaîne JSON
};

// Fonction pour déchiffrer le JWT
export const decryptToken = async (encryptedToken: number[], iv: number[]): Promise<string> => {
    const base64Key = sessionStorage.getItem('encryptionKey');
    if (!base64Key) {
        throw new Error('Encryption key not found in sessionStorage');
    }

    const keyData = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));
    const key = await crypto.subtle.importKey("raw", keyData, { name: "AES-GCM" }, false, ["decrypt"]);

    const decryptedToken = await crypto.subtle.decrypt(
        {
            name: "AES-GCM",
            iv: new Uint8Array(iv),
        },
        key,
        new Uint8Array(encryptedToken)
    );

    return new TextDecoder().decode(decryptedToken);
};

// Fonction pour récupérer et déchiffrer le token
export const getToken = async (): Promise<string | null> => {
    const encryptedToken = JSON.parse(sessionStorage.getItem('jwtToken') || '[]');
    const iv = JSON.parse(sessionStorage.getItem('iv') || '[]');

    if (encryptedToken.length && iv.length) {
        return await decryptToken(encryptedToken, iv);
    }
    return null;
};