import About from "@/components/about";
import HomeHero from "../components/homeHero";
import Product from "@/components/product";
import Choose from "@/components/choose";
import Brand from "@/components/brand";
import Trusts from "@/components/trusts";
import Partner from "@/components/partner";
import Customers from "@/components/customers";
import CTA from "@/components/cta";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <HomeHero />
      <About />
      <Product />
      <Choose />
      <Brand />
      <Trusts />
      <Partner />
      <Customers />
      <CTA />
      <ContactUs />
      <Footer />
    </main>
  );
}
