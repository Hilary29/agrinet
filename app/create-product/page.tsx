"use client"

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    marchandId: "",
    variationId: "",
    name: "",
    categorieId: "",
    saleUnit: "KG",
    basePrice: 0,
    weight: 0,
    defaultCurrency: 0,
    nextAvailableTime: 0,
    longDescription: "",
    shortDescription: "",
    lifespan: 0,
    quantity: 0,
    status: "AVAILABLE",
    expiresAt: new Date().toISOString(),
  });

  const [categories, setCategories] = useState([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    etat: "AVAILABLE",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/categorie");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categorieId: value,
    }));
  };

  const handleNewCategoryChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/categorie/create", newCategory, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Category Created:", response.data);
      setShowCategoryForm(false);
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/product_post/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Créer un Produit</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="marchandId" placeholder="Marchand ID" value={formData.marchandId} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="variationId" placeholder="Variation ID" value={formData.variationId} onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        
        <select name="categorieId" value={formData.categorieId} onChange={handleCategoryChange} className="w-full p-2 border rounded" required>
          <option value="">Catégorie</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <button type="button" onClick={() => setShowCategoryForm(!showCategoryForm)} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          New Category
        </button>

        {showCategoryForm && (
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Nom de la catégorie" value={newCategory.name} onChange={handleNewCategoryChange} className="w-full p-2 border rounded" required />
            <textarea name="description" placeholder="Description de la catégorie" value={newCategory.description} onChange={handleNewCategoryChange} className="w-full p-2 border rounded" required />
            <button type="button" onClick={handleNewCategorySubmit} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Ajouter Catégorie
            </button>
          </div>
        )}

        <input type="number" name="basePrice" placeholder="Prix de base" value={formData.basePrice} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="weight" placeholder="Poids" value={formData.weight} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="longDescription" placeholder="Description longue" value={formData.longDescription} onChange={handleChange} className="w-full p-2 border rounded" />
        <textarea name="shortDescription" placeholder="Description courte" value={formData.shortDescription} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="lifespan" placeholder="Durée de vie" value={formData.lifespan} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="quantity" placeholder="Quantité" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Créer</button>
      </form>
    </div>
  );
}
