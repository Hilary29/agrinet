

export interface Agency {
    id: number;
    name: string;
    address: string;
    phone: string;
    location: string;
  }
  
  // Cette fonction serait remplacée par un appel API réel
  export const getAgencies = async (): Promise<Agency[]> => {
    return [
      {
        id: 1,
        name: "Agence 1 Mokolo",
        address: "123 Rue de Elobi",
        phone: "01 23 45 67 89",
        location: "Mokolo, Yaounde",
      },
      {
        id: 2,
        name: "Agence Bonanjo",
        address: "789 Avenue du Général de Gaulle",
        phone: "02 45 67 89 01",
        location: "Bonanjo, Douala",
      },
      {
        id: 3,
        name: "Agence Ndogbong",
        address: "321 Boulevard de la Liberté",
        phone: "06 12 34 56 78",
        location: "Ndogbong, Douala",
      },
      {
        id: 4,
        name: "Agence Bafoussam Centre",
        address: "654 Rue des Marchés",
        phone: "03 21 43 65 87",
        location: "Bafoussam",
      },
      {
        id: 5,
        name: "Agence Maroua Ville",
        address: "987 Rue de la Paix",
        phone: "07 89 01 23 45",
        location: "Maroua",
      }
    ];
  };
  
  