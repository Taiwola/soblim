import { productsConfig } from "@/config/site";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProductsSection() {
  return (
    <section id="products" className="w-full py-16 bg-light-pink">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8">
          <SectionHeader />
          <DesktopProductGrid />
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center mb-8">
      <h1 className="big-text">Who We Offer</h1>
      <p className="small-text max-w-3xl">
        Discover our comprehensive range of high-quality products designed to
        meet your everyday needs with excellence and reliability.
      </p>
    </div>
  );
}

function DesktopProductGrid() {
  return (
    <div className="md:grid sm:grid-cols-2 lg:grid-cols-4 md:gap-6 flex flex-col gap-6">
      {productsConfig.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

interface ProductCardProps {
  product: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
  const { icon: Icon, title, description, linkHref, linkText } = product;

  return (
    <div className="shadow-lg bg-white rounded-lg p-6 flex flex-col items-center gap-6 transition-transform hover:scale-105">
      <IconWrapper>
        <Icon className="text-[#DB7525] w-6 h-6" />
      </IconWrapper>

      <h2 className="medium-text text-center">{title}</h2>

      <p className="small-text text-center text-gray-600 leading-relaxed">
        {description}
      </p>

      <ProductLink href={linkHref} text={linkText} />
    </div>
  );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[3px] p-3 border-2 bg-[#FFECDD] border-[#DB7525]">
      {children}
    </div>
  );
}

function ProductLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="inline-flex gap-3 items-center text-black font-medium hover:text-[#BF5A1A] transition-colors"
    >
      {text}
      <FaArrowRight className="w-4 h-4" />
    </Link>
  );
}
