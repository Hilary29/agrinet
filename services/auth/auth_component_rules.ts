/*affichage des pages si le rôle user correspond. 

*/


export let userRole = "business"; //curent user role


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
    "Dashboard": "business",
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
    // Vérifiez que les rôles autorisés pour le composant donné sont bien un tableau

    try {
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