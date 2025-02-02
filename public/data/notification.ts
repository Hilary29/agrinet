export interface Notification{
    type? : 'Alert' | 'Recommendation';
    title : string;
    content : string;
    status? : 'read' | 'unread'
    images: string[]
    date : string
}

export const notifications: Notification[] = [
    {
        type : 'Alert',
        title : 'Alert: Low Soil Moisture',
        content : 'Moisture levels have dropped below the optimal range. Consider irrigating to prevent stress on your crops.',
        status : 'unread',
        images: ['/images/iot-forum.jpeg'],
        date : '2 hours ago'
    },
    {
        title : 'Marketplace Update: New Saved Items Discount',
        content : 'The organic fertilizer you saved is now 15% off. Offer valid until Sunday.',
        status : 'read',
        images: ['/images/tomato-forum.jpeg'],
        date : '18 hours ago'
    },
    {
        type : 'Recommendation',
        title : 'AI Recommendation: Irrigation Schedule',
        content : 'Based on soil moisture and weather forecasts, watering at 6:00 AM tomorrow will maximize efficiency.',
        status : 'read',
        images : ['/images/iot-forum.jpeg'],
        date : '3 days ago'
    },
    {
        title : 'New post in sustainable farming',
        content : 'Based on soil moisture and weather forecasts, watering at 6:00 AM tomorrow will maximize efficiency.',
        status : 'unread',
        images: ['/images/organic-farming-forum.jpg'],
        date : '18/01/1024'
    }
]