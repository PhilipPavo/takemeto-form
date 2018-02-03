export const AUTO_TRANSMISSION_ENUM = {
    MECHANIC: 'Механика',
    AUTO: 'Автомат'
};

export const ORDER_OPTIONS_ENUM = {
    option_gps: {
        label: 'GPS навигатор',
        price: 15
    },
    option_child_chair: {
        label: 'Детские кресла',
        price: 20
    },
    option_wifi: {
        label: 'WiFi роутер',
        price: 15
    },
    option_child_buster: {
        label: 'Детский Бустер',
        price: 20
    }
};

export const CITIES_LIST = [
    {
        label: 'Saloniki',
        id: '1'
    },
    {
        label: 'Halkidiki',
        id: '2'
    }
];

export const AUTOS_LIST = [
    {
        id: 1,
        image: '/img/autos/Kia_Picanto.png',
        title: 'Kia Picanto',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 12,
        city: null
    }, {
        id: 2,
        image: '/img/autos/Nissan_Micra.png',
        title: 'Nissan Micra',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 22,
        city: null
    },{
        id: 3,
        image: '/img/autos/Nissan_Juke.png',
        title: 'Nissan Juke',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 33,
        city: null
    },{
        id: 4,
        image: '/img/autos/Nissan_Notte.png',
        title: 'Nissan Notte',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 44,
        city: null
    },{
        id: 5,
        image: '/img/autos/Toyota_Prius.png',
        title: 'Toyota Prius',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 55,
        city: null
    },{
        id: 6,
        image: '/img/autos/Opel_Corsa.png',
        title: 'Opel Corsa',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 66,
        city: null
    },{
        id: 7,
        image: '/img/autos/VW_Polo.png',
        title: 'VW Polo',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 77,
        city: null
    },{
        id: 8,
        image: '/img/autos/Nissan_Evalia.png',
        title: 'Nissan Evalia',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 88,
        city: null
    },{
        id: 9,
        image: '/img/autos/Nissan_Primastar.png',
        title: 'Nissan Primastar',
        transmission: AUTO_TRANSMISSION_ENUM.MECHANIC,
        passengers: 5,
        baggage: 2,
        options: [{
            title: '5 пассажиров',
            icon: 'people'
        },{
            title: '2 багажных мест',
            icon: 'briefcase'
        },{
            title: 'Air conditioner',
            icon: 'dashboard'
        },{
            title: 'Бензин',
            icon: 'cog'
        },{
            title: '1100 cc',
            icon: 'drive-time'
        }],
        price: 12,
        city: null
    }
];