
/*affichage des pages si le rôle user correspond. */

import { useRouter } from "next/navigation";
import { isAuthenticated } from "./auth_params";

export let userRole = "business"; //curent user role

export function set_userRole(value: string) {
    userRole = value;

}

const auth_component_roles =
{
    "dashboard": "user",
    "business_dashboard": "business",
    "ai_recommendations": "",
    "connected_devices": "",
    "agency": "business",
    "business": "business",
    "personnel": "business",
    "products": "business",
    "published_products": "business",
}

const auth_sideBar_roles = {
    "Dashboard": "user",
    "Business Dashboard": "business",
    "Organization": "business",
    "Agency": "business",
    "Personnel": "business",
    "Product": "business",
    "Business": "business",
    "Published products": "business",
    "Connected Devices": "business",
    "Shopping": "user, business",
    "My products": "user ,business",
    "Cart": "user, business",
    "Wishlist": "user, business",
    "Invoices": "user, business",
    "AI Recommendations": "business",
    "Forum": "business",
    "Chat": "user,business",
    "Notifications": "user, business",
};

export function control_auth_component_roles(name_component: string, type: string) {

    //on verifie si la personne est belle et bien authentifiée.


    // Vérifiez que les rôles autorisés pour le composant donné sont bien un tableau
    try {
        const router = useRouter();
        if (isAuthenticated == false) { return (router.push("/")) };
        let allowedRoles = null;
        switch (type) {
            case "component":
                allowedRoles = auth_component_roles[name_component];
                break;
            case "sideBar":
                allowedRoles = auth_sideBar_roles[name_component];
                break;
            default:
                console.log("Not a valid day.");
        }

        if (allowedRoles.includes(userRole)) {
            return true; // L'utilisateur a accès au composant
        }
        return false;


    }


    catch (err) { }

}