type Section = {
    top: number;
    left: number;
    width: number;
    height: number;
    name: string;
}

type Sections = Section[];

const sections = [
    {
        top: 100,
        left: 50,
        width: 296,
        height: 150,
        name: "Sol",
    },
    {
        top: 100,
        left: 344,
        width: 200,
        height: 150,
        name: "Cuisine"
    },

    {
        top: 100,
        left: 544,
        width: 144,
        height: 150,
        name: "Rangement" 
    },

    {
        top: 100,
        left: 686,
        width: 240,
        height: 150,
        name: "Menuiserie"
    },

    {
        top: 254,
        left: 770,
        width: 140,
        height: 94,
        name: "menuiserie 2"
    },

    {
        top: 264,
        left: 50,
        width: 150,
        height: 220,
        name:"Décoration"
    },

    {
        top: 264,
        left: 215,
        width: 154,
        height: 176,
        name: "Peinture"
    },

    {
        top: 264,
        left: 366,
        width: 266,
        height: 152,
        name: "Salle de bains"
    },

    {
        top: 290,
        left: 630,
        width: 130,
        height: 192,
        name: "Chauffage"
    },

    {
        top: 346,
        left: 770,
        width: 140,
        height: 110,
        name: "electricité"
    },

    {
        top: 452,
        left: 770,
        width: 140,
        height: 56,
        name: "Plomberie"
    },
]

export default sections