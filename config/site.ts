import { Brand, ContactData, Product, StatCardData, TestimonialData } from "@/types";
import { MdHomeFilled } from "react-icons/md";
import { FaMobile, FaMedal } from "react-icons/fa";
import { PiCigaretteLight } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { RiBox3Fill, RiPhoneFill } from "react-icons/ri";
import { IoFlash } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io"

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Soblim Trading",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Company",
      href: "#company",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Contact us",
      href: "#contact",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Values",
      href: "#values",
    },
    {
      label: "Products",
      href: "#products",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const productsConfig: Product[] = [
  {
    icon: MdHomeFilled,
    title: "Household Items",
    description: "Premium quality household products for everyday living",
    linkHref: "/learn",
    linkText: "Learn More",
  },
  {
    icon: FaMobile,
    title: "Mobile Gadgets",
    description: "Latest smartphone accessories and tech gadgets",
    linkHref: "/learn",
    linkText: "Learn More",
  },
  {
    icon: PiCigaretteLight,
    title: "Smoke Essentials",
    description: "Quality smoking accessories and related products",
    linkHref: "/learn",
    linkText: "Learn More",
  },
  {
    icon: BsStars,
    title: "Beauty & Fashion",
    description: "Trendy beauty products and fashion accessories",
    linkHref: "/learn",
    linkText: "Learn More",
  },
];

export const chooseConfig = [
  {
    title: "High-Quality Products",
    description: "Premium quality guaranteed across all our product lines.",
  },
  {
    title: "Great Customer Service",
    description: "Dedicated support team committed to your satisfaction",
  },
  {
    title: "Timely Delivery",
    description: "Fast and reliable delivery across Nigeria and Africa",
  },
  {
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guarantee on every purchase",
  },
  {
    title: "Innovation & Technology",
    description: "Cutting-edge solutions and modern business practices",
  },
  {
    title: "Sustainability Focus",
    description: "Committed to environmentally responsible business practices",
  },
];

export const brandConfig: Brand[] = [
  {
    icon: RiBox3Fill,
    title: "Consistency",
    description:
      "We maintain unwavering standards in every product and service we offer.",
  },
  {
    icon: IoFlash,
    title: "Efficiency",
    description:
      "We optimize processes to deliver swift and reliable solutions.",
  },
  {
    icon: RiLightbulbFlashFill,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to stay ahead in our industry.",
  },
  {
    icon: FaHeart,
    title: "Customer Focus",
    description:
      "We prioritize our customers’ needs and build lasting relationships.",
  },
  {
    icon: RiLeafFill,
    title: "Sustainability",
    description:
      "We are committed to responsible practices for a better future.",
  },
  {
    icon: FaMedal,
    title: "Quality Driven",
    description: "We strive for excellence in everything we do.",
  },
];

export const statCardData: StatCardData[] = [
  {
    number: "65+",
    title: "Branded Smartwatches",
    description: "Premium watch collection",
  },
  {
    number: "30K",
    title: "Daily Visitors",
    description: "Growing customer base",
  },
  {
    number: "50+",
    title: "Awards Won",
    description: "Industry recognition",
  },
  {
    number: "100%",
    title: "Customer Satisfaction",
    description: "Premium watch collection",
  },
];

export const partnerImage = [
  {
    url: "/images/jendol.png",
    alt: "jendol",
    width: 300,
    height: 52.6,
  },
  {
    url: "/images/oldenglish.png",
    alt: "old english",
    width: 300,
    height: 52.6,
  },
  {
    url: "/images/ojajamore.png",
    alt: "ojaja more",
    width: 300,
    height: 52.6,
  },
];

export const testimonialData: TestimonialData[] = [
  // {
  //   quote:
  //     "Exceptional quality and outstanding customer service. Solbim Trading has been our go-to partner for all our product needs.",
  //   imageSrc: "/images/customer1.png",
  //   imageAlt: "customer 1",
  //   name: "Adebayo Johnson",
  //   title: "Business Owner",
  // },
  {
    quote:
      "The reliability and efficiency of their delivery service is unmatched. Highly recommended for any business looking for quality products.",
    imageSrc: "/images/customer3.png",
    imageAlt: "customer 2",
    name: "Fatima Ibrahim",
    title: "Procurement Manager",
  },
  {
    quote:
      "Innovative solutions and excellent support. They understand our needs and consistently deliver beyond expectations.",
    imageSrc: "/images/customer2.png",
    imageAlt: "customer 3",
    name: "Chidi Okafor",
    title: "Store Manager",
  },
];



export const contactData: ContactData[] = [
  {
    icon: RiPhoneFill,
    title: "Phone",
    details: ["+234 (0) 123 456 7890", "+234 (0) 987 654 3210"],
  },
  {
    icon: IoMdMail,
    title: "Email",
    details: ["info@solbimtrading.com", "support@solbimtrading.com"],
  },
  {
    icon: FaLocationDot,
    title: "Office Address",
    details: ["info@solbimtrading.com", "support@solbimtrading.com"],
  },
]