"use client";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export interface Notification {
/*     images: string[]; */ // Tableau d'URLs d'images
    property: string; // Type de notification
    status: 'All'|'unread' | 'read'; // Statut de la notification
    subject: string; // Titre de la notification
    timestamp: Date; // Date de la notification
    message: string; // Contenu de la notification
}

interface NotificationListProps {
    userId: string;
}

export default function NotificationList({ userId }: NotificationListProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [stompClient, setStompClient] = useState<Client | null>(null);
  
    useEffect(() => {
      if (!userId) return;
  
      const socket = new SockJS("http://192.168.1.133:4014/ws");
      const client = new Client({
        webSocketFactory: () => socket,
        debug: (str) => console.log(str),
        onConnect: () => {
          console.log("Connecté au WebSocket");
          client.subscribe(`/topic/notifications/${userId}`, (message) => {
            const notification: Notification = JSON.parse(message.body);
            setNotifications((prev) => [notification, ...prev]);
          });
        },
        onStompError: (frame) => {
          console.error("Erreur STOMP : ", frame);
        },
      });
  
      client.activate();
      setStompClient(client);
  
      return () => {
        if (client) client.deactivate();
      };
    }, [userId]);

    return notifications;
}


// export const notifications: Notification[] = [
//     {
//         type : 'Alert',
//         title : 'Alert: Low Soil Moisture',
//         content : 'Moisture levels have dropped below the optimal range. Consider irrigating to prevent stress on your crops.',
//         status : 'unread',
//         images: ['/images/iot-forum.jpeg'],
//         date : '2 hours ago'
//     },
//     {
//         title : 'Marketplace Update: New Saved Items Discount',
//         content : 'The organic fertilizer you saved is now 15% off. Offer valid until Sunday.',
//         status : 'read',
//         images: ['/images/tomato-forum.jpeg'],
//         date : '18 hours ago',
//         type : '',
//     },
//     {
//         type : 'Recommendation',
//         title : 'AI Recommendation: Irrigation Schedule',
//         content : 'Based on soil moisture and weather forecasts, watering at 6:00 AM tomorrow will maximize efficiency.',
//         status : 'read',
//         images : ['/images/iot-forum.jpeg'],
//         date : '3 days ago',
//     },
//     {
//         title : 'New post in sustainable farming',
//         content : 'Based on soil moisture and weather forecasts, watering at 6:00 AM tomorrow will maximize efficiency.',
//         status : 'unread',
//         images: ['/images/organic-farming-forum.jpg'],
//         date : '18/01/1024',
//         type : 'Alert',
//     }
// ]