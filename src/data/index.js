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
    }
];