type Section = {
  top: number;
  left: number;
  width: number;
  height: number;
  name: string;
};

type Category = {
  category?: {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
    name?: string;
  };
  productsInCategory?: {
    id?: any;
    x?: any;
    y?: any;
    label?: any;
  };
};

type CategoryObj = {
  [key: string]: any;
};

type Sections = Section[];

export const sections = [
  {
    top: 185,
    left: 80,
    width: 770,
    height: 420,
    name: "Sol",
  },
  {
    top: 185,
    left: 850,
    width: 485,
    height: 420,
    name: "Cuisine",
  },
  {
    top: 185,
    left: 1335,
    width: 350,
    height: 420,
    name: "Rangement",
  },
  {
    top: 185,
    left: 1685,
    width: 630,
    height: 420,
    name: "Menuiserie",
  },
  {
    top: 615,
    left: 1880,
    width: 435,
    height: 240,
    name: "Menuiserie",
  },
  {
    top: 642,
    left: 80,
    width: 410,
    height: 540,
    name: "Décoration",
  },
  {
    top: 650,
    left: 520,
    width: 385,
    height: 430,
    name: "Peinture",
  },
  {
    top: 645,
    left: 905,
    width: 650,
    height: 370,
    name: "Salle de bains",
  },
  {
    top: 715,

    left: 1555,
    width: 300,
    height: 460,

    name: "Chauffage",
  },
  {
    top: 855,
    left: 1880,
    width: 435,
    height: 260,
    name: "Electricité",
  },
  {
    top: 1115,
    left: 1880,
    width: 435,
    height: 135,
    name: "Plomberie",
  },
  {
    top: 1182,
    left: 80,
    width: 410,
    height: 370,
    name: "Éclairage",
  },
  {
    top: 1080,
    left: 520,
    width: 385,
    height: 300,
    name: "Peinture",
  },
  {
    top: 1015,
    left: 905,
    width: 275,
    height: 360,
    name: "Quincaillerie",
  },
  {
    top: 1015,
    left: 1180,
    width: 375,
    height: 360,
    name: "Outillage",
  },
  {
    top: 1400,
    left: 1250,
    width: 270,
    height: 290,
    name: "Quincaillerie",
  },
  {
    top: 1400,
    left: 1515,
    width: 810,
    height: 290,

    name: "Jardin",
  },
  {
    top: 1240,
    left: 1870,
    width: 450,
    height: 140,
    name: "Jardin",
  },
];

export default sections;

export const categoryObject: CategoryObj = {
  Sol: {
    position: { top: 185, left: 80, width: 850, height: 605 },
  },

  Cuisine: {
    position: { top: 185, left: 850, width: 1335, height: 605 },
  },
  Rangement: {
    position: { top: 185, left: 1335, width: 1685, height: 605 },
  },
  Menuiserie: {
    position: { top: 185, left: 1685, width: 2315, height: 605 },
  },
  MenuiserieDeux: {
    position: { top: 615, left: 1880, width: 2315, height: 855 },
  },
  Dcoration: {
    position: { top: 642, left: 80, width: 490, height: 1182 },
  },
  Peinture: {
    position: { top: 650, left: 520, width: 905, height: 1080 },
  },
  PeintureDeux: {
    position: { top: 1080, left: 520, width: 905, height: 1380 },
  },
  SalleDeBains: {
    position: { top: 645, left: 905, width: 1555, height: 1015 },
  },
  Chauffage: {
    position: { top: 715, left: 1555, width: 1855, height: 1175 },
  },

  Electricite: {
    position: { top: 855, left: 1880, width: 2215, height: 1115 },
  },
  Plomberie: {
    position: { top: 1115, left: 1880, width: 2215, height: 1250 },
  },
  Eclairage: {
    position: { top: 1182, left: 80, width: 490, height: 1552 },
  },
  Quincaillerie: {
    position: { top: 1015, left: 905, width: 1180, height: 1375 },
  },
  QuincaillerieDeux: {
    position: { top: 1400, left: 1250, width: 1520, height: 1690 },
  },
  Outillage: {
    position: { top: 1015, left: 1180, width: 1555, height: 1375 },
  },
  Jardin: {
    position: { top: 1400, left: 1515, width: 2325, height: 1690 },
  },
  Jardin2: {
    position: { top: 1240, left: 1870, width: 2320, height: 1380 },
  },
};

///////////////////////////////////////////////

////////////////////////////////////////////////
////////////////
/////

export const categoryTab = [
  { category: { top: 185, left: 80, width: 850, height: 605, name: "Sol" } },
  {
    category: {
      top: 185,
      left: 850,
      width: 1335,
      height: 605,
      name: "Cuisine",
    },
  },
  {
    category: {
      top: 185,
      left: 1335,
      width: 1685,
      height: 605,
      name: "Rangement",
    },
  },
  {
    category: {
      top: 185,
      left: 1685,
      width: 2315,
      height: 605,
      name: "Menuiserie",
    },
  },
  {
    category: {
      top: 615,
      left: 1880,
      width: 2315,
      height: 855,
      name: "Menuiserie",
    },
  },
  {
    top: 642,
    left: 80,
    width: 490,
    height: 1182,
    name: "Décoration",
  },
  {
    category: {
      top: 650,
      left: 520,
      width: 905,
      height: 1080,
      name: "Peinture",
    },
  },
  {
    category: {
      top: 1080,
      left: 520,
      width: 905,
      height: 1380,
      name: "Peinture",
    },
  },
  {
    category: {
      top: 645,
      left: 905,
      width: 1555,
      height: 1015,
      name: "Salle de bains",
    },
  },
  {
    category: {
      top: 715,

      left: 1555,
      width: 1855,
      height: 1175,

      name: "Chauffage",
    },
  },
  {
    category: {
      top: 855,
      left: 1880,
      width: 2215,
      height: 1115,
      name: "Electricité",
    },
  },
  {
    category: {
      top: 1115,
      left: 1880,
      width: 2215,
      height: 1250,
      name: "Plomberie",
    },
  },
  {
    category: {
      top: 1182,
      left: 80,
      width: 490,
      height: 1552,
      name: "Éclairage",
    },
  },
  {
    category: {
      top: 1015,
      left: 905,
      width: 1180,
      height: 1375,
      name: "Quincaillerie",
    },
  },
  {
    category: {
      top: 1400,
      left: 1250,
      width: 1520,
      height: 1690,
      name: "Quincaillerie",
    },
  },
  {
    category: {
      top: 1015,
      left: 1180,
      width: 1555,
      height: 1375,
      name: "Outillage",
    },
  },
  {
    category: {
      top: 1400,
      left: 1515,
      width: 2325,
      height: 1690,

      name: "Jardin",
    },
  },
  {
    category: {
      top: 1240,
      left: 1870,
      width: 2320,
      height: 1380,
      name: "Jardin",
    },
  },
];
