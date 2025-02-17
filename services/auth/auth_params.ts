import { object } from "zod";

//recuperer les infos dynamiquement avec un sessionstorage quand le backend utilisateur sera operationnel
export let isAuthenticated = true;

export function set_isAuthenticated(value: boolean): void {
    isAuthenticated = value;
};

export let user = {
    name: "Hilary D",
    email: "hilary@gmail.com",
    image: "",
};

export function set_userRole(value: { name: string; email: string; image: string }) {
    user = value;
};


