export interface Personnel {
  id: number
  name: string
  position: string
  email: string
}

// Cette fonction serait remplacée par un appel API réel
export const getPersonnel = async (): Promise<Personnel[]> => {
  return [
    { id: 1, name: "Jean Dupont", position: "Manager", email: "jean@example.com" },
    { id: 2, name: "Marie Martin", position: "Vendeur", email: "marie@example.com" },
    { id: 3, name: "Paul Charlie", position: "Directeur Général", email: "paul.charlie@agrinet.cm" },
    { id: 4, name: "Chantal Essomba", position: "Chargée de clientèle", email: "chantal.essomba@agrinet.cm" },
    { id: 5, name: "Serge Fopa", position: "Technicien agricole", email: "serge.fopa@agrinet.cm" },
    { id: 6, name: "Brigitte Nguene", position: "Responsable des ventes", email: "brigitte.nguene@agrinet.cm" },
    { id: 7, name: "Didier Tchouameni", position: "Agent logistique", email: "didier.tchouameni@agrinet.cm" }
  ]
}