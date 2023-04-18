import config from "../config";
import aboutImage from "../assets/images/about.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
        to: config.routes.order,
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
        link: "",
    },
    {
        icon: FacebookIcon,
        link: "",
    },
    {
        icon: InstagramIcon,
        link: "",
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
