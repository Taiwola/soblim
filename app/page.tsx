import BrandPartner from "./component/brand-partner"
import BrandValue from "./component/brand-value"
import ContactUs from "./component/contact-us"
import CTA from "./component/cta"
import Customer from "./component/customer"
import Footer from "./component/footer"
import Header from "./component/header"
import Hero from "./component/hero"
import Trust from "./component/trust"
import Offer from "./component/what-we-offer"
import AboutUs from "./component/who-we-are"
import WhyChooseUs from "./component/why-choose-us"

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <AboutUs />
      <Offer />
      <WhyChooseUs />
      <BrandValue />
      <Trust />
      <BrandPartner />
      <Customer />
      <CTA />
      <ContactUs />
      <Footer />
    </div>
  )
}
