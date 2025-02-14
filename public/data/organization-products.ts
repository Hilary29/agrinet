export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

// Cette fonction serait remplacée par un appel API réel
export const getProducts = async (): Promise<Product[]> => {
  return [
    { id: 1, name: "Tomate", category: "Légume", price: 2500 },
    { id: 2, name: "Pomme", category: "Fruit", price: 1300 },
    { id: 3, name: "Banane Plantain", category: "Fruit", price: 1500 },
    { id: 4, name: "Manioc", category: "Tubercule", price: 2000 },
    { id: 5, name: "Poisson Fumé", category: "Poisson", price: 5000 },
    { id: 6, name: "Arachide", category: "Graines", price: 1800 },
    { id: 7, name: "Maïs", category: "Céréale", price: 2200 },
    { id: 8, name: "Safou", category: "Fruit", price: 3000 }
  ];
};