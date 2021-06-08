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
    width: 850,
    height: 605,
    name: "Sol",
  },
  {
    top: 185,
    left: 850,
    width: 1335,
    height: 605,
    name: "Cuisine",
  },
  {
    top: 185,
    left: 1335,
    width: 1685,
    height: 605,
    name: "Rangement",
  },
  {
    top: 185,
    left: 1685,
    width: 2315,
    height: 605,
    name: "Menuiserie",
  },
  {
    top: 615,
    left: 1880,
    width: 2315,
    height: 855,
    name: "MenuiserieDeux",
  },
  {
    top: 642,
    left: 80,
    width: 490,
    height: 1182,
    name: "Decoration",
  },
  {
    top: 650,
    left: 520,
    width: 905,
    height: 1080,
    name: "Peinture",
  },
  {
    top: 1080,
    left: 520,
    width: 905,
    height: 1380,
    name: "PeintureDeux",
  },
  {
    top: 645,
    left: 905,
    width: 1555,
    height: 1015,
    name: "SalleDeBains",
  },
  {
    top: 715,
    left: 1555,
    width: 1855,
    height: 1175,
    name: "Chauffage",
  },
  {
    top: 855,
    left: 1880,
    width: 2215,
    height: 1115,
    name: "Electricite",
  },
  {
    top: 1115,
    left: 1880,
    width: 2215,
    height: 1250,
    name: "Plomberie",
  },
  {
    top: 1182,
    left: 80,
    width: 490,
    height: 1552,
    name: "Eclairage",
  },
  {
    top: 1015,
    left: 905,
    width: 1180,
    height: 1375,
    name: "Quincaillerie",
  },
  {
    top: 1400,
    left: 1250,
    width: 1520,
    height: 1690,
    name: "QuincaillerieDeux",
  },

  {
    top: 1015,
    left: 1180,
    width: 1555,
    height: 1375,
    name: "Outillage",
  },
  {
    top: 1400,
    left: 1515,
    width: 2325,
    height: 1690,
    name: "Jardin",
  },
  {
    top: 1240,
    left: 1870,
    width: 2320,
    height: 1380,
    name: "JardinDeux",
  },
];

export default sections;

export const categoryObject: CategoryObj = {
  Sol: {
    position: { top: 185, left: 80, width: 850, height: 605 },
    products: [],
  },

  Cuisine: {
    position: { top: 185, left: 850, width: 1335, height: 605 },
    products: [],
  },
  Rangement: {
    position: { top: 185, left: 1335, width: 1685, height: 605 },
    products: [],
  },
  Menuiserie: {
    position: { top: 185, left: 1685, width: 2315, height: 605 },
    products: [],
  },
  MenuiserieDeux: {
    position: { top: 615, left: 1880, width: 2315, height: 855 },
    products: [],
  },
  Decoration: {
    position: { top: 642, left: 80, width: 490, height: 1182 },
    products: [],
  },
  Peinture: {
    position: { top: 650, left: 520, width: 905, height: 1080 },
    products: [],
  },
  PeintureDeux: {
    position: { top: 1080, left: 520, width: 905, height: 1380 },
    products: [],
  },
  SalleDeBains: {
    position: { top: 645, left: 905, width: 1555, height: 1015 },
    products: [],
  },
  Chauffage: {
    position: { top: 715, left: 1555, width: 1855, height: 1175 },
    products: [],
  },

  Electricite: {
    position: { top: 855, left: 1880, width: 2215, height: 1115 },
    products: [],
  },
  Plomberie: {
    position: { top: 1115, left: 1880, width: 2215, height: 1250 },
    products: [],
  },
  Eclairage: {
    position: { top: 1182, left: 80, width: 490, height: 1552 },
    products: [],
  },
  Quincaillerie: {
    position: { top: 1015, left: 905, width: 1180, height: 1375 },
    products: [],
  },
  QuincaillerieDeux: {
    position: { top: 1400, left: 1250, width: 1520, height: 1690 },
    products: [],
  },
  Outillage: {
    position: { top: 1015, left: 1180, width: 1555, height: 1375 },
    products: [],
  },
  Jardin: {
    position: { top: 1400, left: 1515, width: 2325, height: 1690 },
    products: [],
  },
  JardinDeux: {
    position: { top: 1240, left: 1870, width: 2320, height: 1380 },
    products: [],
  },
  liste: {
    position: { top: 100, left: 2320, width: 2320, height: 1800 },
    products: [],
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
      name: "MenuiserieDeux",
    },
  },
  {
    top: 642,
    left: 80,
    width: 490,
    height: 1182,
    name: "Decoration",
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
      name: "PeintureDeux",
    },
  },
  {
    category: {
      top: 645,
      left: 905,
      width: 1555,
      height: 1015,
      name: "SalleDeBains",
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
      name: "Electricite",
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
      name: "Eclairage",
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
      name: "QuincaillerieDeux",
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
      name: "JardinDeux",
    },
  },
];
