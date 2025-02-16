"use client";

import { useState, useEffect } from "react";

//Le fichier permet d'utiliser le userId ecupere a la connexion dans le sessionStorage
//Mais si on est pas connecte on utilise un userId par defaut pour les tests

export const useUserId = () => {
  const DEFAULT_USER_ID = "9511e06c-c94b-48de-bbb0-d7ed39d3ca21";
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    setUserId(storedUserId || DEFAULT_USER_ID);
  }, []);

  return userId;
};



/**Utilisation dans une page/composant
import { useUserId } from "../hooks/useUser";

const Profile = () => {
  const userId = useUserId();

  return <p>User ID: {userId}</p>;
};

 */