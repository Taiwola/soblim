import { ReactElement, SVGProps } from "react";
import { IconType } from "react-icons";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface Product {
  icon: IconType;
  title: string;
  description: string;
  linkHref: string;
  linkText: string
}

export interface Brand {
  icon: IconType,
  title: string,
  description: string
}



export interface StatCardData {
  number: string
  title: string
  description: string
}


export interface TestimonialData {
  quote: string
  imageSrc: string
  imageAlt: string
  name: string
  title: string
}


export interface ContactData {
  icon: React.ElementType
  title: string
  details: string[]
}