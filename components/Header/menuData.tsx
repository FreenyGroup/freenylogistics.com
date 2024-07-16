import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 3,
    title: "Our Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "All Services",
        newTab: false,
        path: "/services",
      },
      {
        id: 34,
        title: "Shuttle Service",
        newTab: false,
        path: "/services/shuttle-service",
      },
      {
        id: 35,
        title: "Private School Transportation",
        newTab: false,
        path: "/services/private-school-transportation",
      },
      {
        id: 35,
        title: "Place Of Worship Transportation",
        newTab: false,
        path: "/services/place-of-worship-transportation",
      },
      {
        id: 35.1,
        title: "Airport Transportation",
        newTab: false,
        path: "/services/airport-transportation",
      },
      {
        id: 36,
        title: "Hotel Transportation",
        newTab: false,
        path: "/services/hotel-transportation",
      },
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

export default menuData;
