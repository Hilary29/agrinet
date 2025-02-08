"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLeaf, FaBuilding } from 'react-icons/fa';
import FarmerForm from '@/components/FarmerForm';
import { businessActorRoutes } from "@/config/routes";


const UpgradeComponent = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col items-center">
      <FarmerForm />
    </div>
  );
};


const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    avatarPicture: "",
    profilePicture: "",
    businessActorName: "",
    isIndividual: true,//Ajouter un radio button
    baType: "isIndividual",//Afficher une liste de selection
    isAvailable: true,
    dateOfBirth: "",
    age: 0,
    gender: "",
    nationality: "",
    profession: "",
    businessDomainIds: "",
    qualificationIds: "",
    paymentMethods: "",
    isVerified: true,
    isLocked: true,
    description: "",
    reviews: "",
    password: "",
    businessActorId: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(businessActorRoutes.createBusinessActor, {
        ...formData,
        businessDomainIds: formData.businessDomainIds.split(","),
        qualificationIds: formData.qualificationIds.split(","),
        paymentMethods: formData.paymentMethods.split(","),
      });
      console.log("Success:", response.data);
      //Envoyer A gestion des utilisateurs l'id et le role
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return(
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="businessActorName" placeholder="Business Actor Name" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="gender" placeholder="Gender" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="nationality" placeholder="Nationality" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="profession" placeholder="Profession" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="businessDomainIds" placeholder="Business Domain IDs (comma separated)" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="qualificationIds" placeholder="Qualification IDs (comma separated)" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="text" name="paymentMethods" placeholder="Payment Methods (comma separated)" className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" onChange={handleChange} />
      <button type="submit" className="w-full bg-primary-500 text-white p-2 rounded">Create</button>
    </form>
  </div>
  )
};

// Styles
const styles = `
.role-card {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}
.role-card:hover {
  background-color: #f0f0f0;
}
.role-card.selected {
  border-color: #007bff;
  background-color: #e7f1ff;
}
.icon {
  font-size: 24px;
  margin-bottom: 8px;
}
`;

export default UpgradeComponent;