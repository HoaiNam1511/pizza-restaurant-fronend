import config from "../config";
import aboutImage from "../assets/images/about.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import avatar1 from "../assets/chef/person_1.jpg";
import avatar2 from "../assets/chef/person_2.jpg";
import avatar3 from "../assets/chef/person_3.jpg";
import avatar4 from "../assets/chef/person_4.jpg";
import * as globalInterface from "../types";
import { PizzaIcon1, Award, ChefHat, Like } from "../assets/icon/icon";
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

export const sizeData: globalInterface.SelectSizePrice[] = [
    {
        title: "Small",
        value: "small",
        price: 0,
    },
    {
        title: "Medium",
        value: "medium",
        price: 4,
    },
    {
        title: "Large",
        value: "large",
        price: 8,
    },
    {
        title: "Extra-large",
        value: "extra",
        price: 12,
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

export interface Table {
    title: string;
    value: number;
}

export const TableData: Table[] = [
    {
        title: "1 People",
        value: 1,
    },
    {
        title: "2 People",
        value: 2,
    },
    {
        title: "4 People",
        value: 4,
    },
    {
        title: "6 People",
        value: 6,
    },
    {
        title: "8 People",
        value: 8,
    },
];

export const ChefData: globalInterface.Chef[] = [
    {
        image: avatar1,
        name: "TOM SMITH",
        position: "Hair Specialist",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        image: avatar2,
        name: "MARK WILSON",
        position: "Hair Specialist",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        image: avatar3,
        name: "PATRICK JACOBSON",
        position: "Hair Specialist",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
        image: avatar4,
        name: "IVAN DORCHSNER",
        position: "Beard Specialist",
        description:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
];

export const infoAwardData: globalInterface.InfoAward[] = [
    {
        icon: PizzaIcon1,
        title1: 3,
        title2: "Pizza Branches",
    },
    {
        icon: Award,
        title1: 16,
        title2: "Number of Awards",
    },
    {
        icon: Like,
        title1: 10678,
        title2: "Happy Customer",
    },
    {
        icon: ChefHat,
        title1: 86,
        title2: "Staff",
    },
];
