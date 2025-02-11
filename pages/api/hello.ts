"use client";
import type { NextApiRequest, NextApiResponse } from 'next';
import { useRouter } from "next/navigation";
import { AuthRoutes, notificationsRoutes } from "@/config/routes";
import axios from 'axios';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Extraire les paramètres de la requête GET
        const { code, state } = req.query; // Si vous avez des paramètres dans l'URL comme ?name=John&age=30
        
        const handleButtonClick = async (platform = "google") => {
            // console.log(`Button clicked for: ${platform}`);
            try {
                const response = await axios.get(AuthRoutes.REGISTER_ + `${platform}/callback`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });

                console.log(response.data);
                // router.push(response.data);
            }
            catch (err) {
                console.log(`une erreur de ${platform} `, err);
            }
            // Vous pouvez ajouter ici la logique pour gérer chaque plateforme
        };

        res.status(200).json({
            message: `Hello ${code}, you are ${state} years old!`
        });
    } else if (req.method === 'POST') {
        // Extraire les données du corps de la requête POST
        const { name, age } = req.body; // Assurez-vous que le corps est en JSON

        res.status(200).json({
            message: `Hello ${name}, you are ${age} years old!`
        });
    } else {
        // Gérer d'autres méthodes HTTP
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}