/*affichage des pages si le rôle user correspond. 

*/


export const userRole = "business"; //replace by business or rule


const auth_component_roles: { [key: string]: string } =
{
    "dashboard": "user",
    "business_dashboard": "business",
    "ai_recommendation": "business",
    "connected_devices": "business",
    "agency": "business",
    "business": "business",
    "personnel": "business",
    "products": "business",
    "published_products": "business",
}


const auth_sideBar_roles: { [key: string]: string } = {
    "Dashboard": "user",
    "Business Dashboard": "business",
    "Marketplace": "user, business",
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
    "Forum": "user,business",
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

        if (allowedRoles && allowedRoles.includes(userRole)) {
            return true; // L'utilisateur a accès au composant
        }
        return false;


    }


    catch (err) { }

}