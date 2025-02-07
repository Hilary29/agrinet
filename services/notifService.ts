

import { notificationsRoutes } from "@/config/routes";
import axios from 'axios';

export const send_push_notification =
    async (sid: string, user_name: string, msg: string, sbj: string) => {
        try {
            const response = await axios.post(notificationsRoutes.push_NOTIFY,
                {
                    priority: "1",
                    Type: "SINGLE",
                    senderName: "yoyob_agrinet",
                    property: "ALERT",
                    message: msg,
                    groupName: "none",
                    receiverId: sid,//mettre le sid,
                    receiverName: user_name, //mettre le nom du user
                    subject: sbj,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Notification sent successfully:', response.data);
        } catch (error) {
            console.log("une erreur est survenue ", error);


        }
    };