import { object } from "zod";

export let isAuthenticated = true;

export function set_isAuthenticated(value: boolean): void {
    isAuthenticated = value;
};

export let user = {
    name: "Hilary D",
    email: "hilary@gmail.com",
    image: "",
};

export function set_userRole(value: any) {
    user = value;
};



