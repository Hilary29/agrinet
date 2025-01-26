export interface Forum{
    title: string;
    description: string;
    members: number;
    likes: number;
    unlikes: number;
    comments: number;
    externalLinks: number;
    images: string[];
    category: string;
    date: string;
}

export const forums: Forum[] = [
    {
        title: 'How to grow tomatoes',
        description: 'Tomatoes are a great source of vitamins and minerals. They are easy to grow and require little maintenance. Here are some tips on how to grow tomatoes in your garden.',
        members: 20,
        likes: 10,
        unlikes: 2,
        comments: 5,
        externalLinks: 2,
        images: ['/images/tomato-forum.jpeg'],
        category: 'Vegetables',
        date: '2021-04-01'
    },
    {
        title: 'Best practices for organic farming',
        description: 'Organic farming is a sustainable and environmentally friendly way to grow crops. Here are some best practices for organic farming that you can implement in your farm.',
        members: 15,
        likes: 8,
        unlikes: 1,
        comments: 3,
        externalLinks: 1,
        images: ['/images/organic-farming-forum.jpg'],
        category: 'Farming',
        date: '2021-03-28'
    },
    {
        title: 'How to start a small farm',
        description: 'Starting a small farm can be a rewarding experience. Here are some tips on how to start a small farm and make it successful.',
        members: 10,
        likes: 5,
        unlikes: 0,
        comments: 2,
        externalLinks: 0,
        images: ['/images/small-farm-forum.jpg'],
        category: 'Farming',
        date: '2021-03-25'
    },
    {
        title: 'Benefits of using greenhouses',
        description: 'Greenhouses are a great way to extend the growing season and protect your crops from pests and diseases. Here are some benefits of using greenhouses in your farm.',
        members: 12,
        likes: 6,
        unlikes: 1,
        comments: 4,
        externalLinks: 1,
        images: ['/images/greenhouse-forum.jpg'],
        category: 'Farming',
        date: '2021-03-20'
    },
    {
        title: 'How to protect your crops from pests',
        description: 'Pests can wreak havoc on your crops and reduce your harvest. Here are some tips on how to protect your crops from pests and keep them healthy.',
        members: 14,
        likes: 7,
        unlikes: 1,
        comments: 4,
        externalLinks: 2,
        images: ['/images/pests-forum.jpg'],
        category: 'Farming',
        date: '2021-03-10'
    },
    {
        title: 'How to start a community garden',
        description: 'Community gardens are a great way to bring people together and promote healthy eating. Here are some tips on how to start a community garden in your neighborhood.',
        members: 10,
        likes: 5,
        unlikes: 0,
        comments: 2,
        externalLinks: 0,
        images: ['/images/community-garden-forum.jpg'],
        category: 'Community',
        date: '2021-03-01'
    },
    {
        title: 'How to grow microgreens',
        description: 'Microgreens are young vegetable greens that are harvested just after the first leaves have developed. They are packed with nutrients and can be easily grown at home. Here are some tips on how to grow microgreens.',
        members: 12,
        likes: 6,
        unlikes: 1,
        comments: 4,
        externalLinks: 2,
        images: ['/images/microgreens-forum.jpg'],
        category: 'Vegetables',
        date: '2021-02-25'
    },
    {
        title: 'Iot and Farms',
        description: 'Iot is the future of farming. Here are some tips on how to use Iot in your farm.',
        members: 14,
        likes: 7,
        unlikes: 1,
        comments: 4,
        externalLinks: 2,
        images: ['/images/iot-forum.jpeg'],
        category: 'Farming',
        date: '2021-02-15'
    }
];