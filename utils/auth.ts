export const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token"); // Supprime le token
      sessionStorage.removeItem("token");
    }
  };
  