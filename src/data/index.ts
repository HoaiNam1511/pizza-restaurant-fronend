import config from "../config";
import aboutImage from "../assets/images/about.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as globalInterface from "../types";
interface NavData {
    to: string;
    title: string;
    icon?: any;
}

export const navData: NavData[] = [
    {
        to: config.routes.home,
        title: "Home",
        icon: null,
    },
    {
        to: config.routes.product,
        title: "Menu",
        icon: null,
    },
    {
        to: config.routes.booking,
        title: "Booking",
        icon: null,
    },
    {
        to: config.routes.about,
        title: "About",
        icon: null,
    },
    {
        to: config.routes.contact,
        title: "Contact",
        icon: null,
    },
    {
        to: config.routes.order,
        title: "Order",
        icon: null,
    },
    {
        to: config.routes.cart,
        title: "Cart",
        icon: null,
    },
];

interface Contact {
    icon: any;
    title1: string;
    title2: string;
}

export const contactData: Contact[] = [
    {
        icon: LocalPhoneIcon,
        title1: "+2 392 3929 210",
        title2: "A small river named Duden flows",
    },
    {
        icon: MyLocationIcon,
        title1: "198 West 21th Street",
        title2: "Suite 721 New York NY 10016",
    },
    {
        icon: AccessTimeIcon,
        title1: "Open Tuesday - Sunday",
        title2: "8:00 am - 9:00 pm",
    },
];

interface Social {
    icon: any;
    link: string;
}

export const socialData: Social[] = [
    {
        icon: TwitterIcon,
        link: "https://twitter.com/hoainamit",
    },
    {
        icon: FacebookIcon,
        link: "https://www.facebook.com/hoainam151101",
    },
    {
        icon: InstagramIcon,
        link: "https://www.instagram.com/hoainam9618/",
    },
];

interface About {
    imageSrc: string;
    headerTitle: string;
    title: string;
}

export const aboutData: About = {
    imageSrc: aboutImage,
    headerTitle: "WELCOME TO PIZZA A RESTAURANT",
    title: "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their",
};

interface NutriData {
    title: string;
    value: number;
}

export const nutriData: NutriData[] = [
    {
        title: "Calories",
        value: Math.floor(Math.random() * (101 - 50) + 50),
    },
    {
        title: "Carbohydrates",
        value: Math.floor(Math.random() * (30 - 10) + 10),
    },
    {
        title: "Squirrels",
        value: Math.floor(Math.random() * (40 - 10) + 10),
    },
    {
        title: "Fats",
        value: Math.floor(Math.random() * (50 - 10) + 20),
    },
];

export const sizeData: globalInterface.Select[] = [
    {
        title: "Small",
        value: "small",
    },
    {
        title: "Medium",
        value: "medium",
    },
    {
        title: "Large",
        value: "large",
    },
    {
        title: "Extra-large",
        value: "extra",
    },
];

export interface Tab {
    title: string;
    value: number;
}

export const TabData: Tab[] = [
    { title: "DESCRIPTION", value: 0 },
    { title: "ADDITIONAL INFORMATION", value: 1 },
];

export interface AdditionalInformation {
    size: string;
    weight: string;
    dimension: string;
}

export const AdditionalInformationData: AdditionalInformation[] = [
    {
        size: "Small",
        weight: "1.5 kg",
        dimension: "20 × 20 × 1.6 cm",
    },
    {
        size: "Medium",
        weight: "1.8 kg",
        dimension: "24 × 24 × 1.8 cm",
    },
    {
        size: "Large",
        weight: "2 kg",
        dimension: "30 × 30 × 2 cm",
    },
    {
        size: "Extra large",
        weight: "2.4 kg",
        dimension: "36 × 36 × 2.6 cm",
    },
];
