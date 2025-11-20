import GradientButton from "@/app/_components/gradientButton";
import { Button } from "@heroui/button";

export default function CTA() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[url('/images/hero.png')] bg-cover bg-center w-full h-[400px] md:h-[459px] rounded-2xl flex justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center gap-6">
            <h1 className="big-text text-white max-w-3xl">  Ready to Experience Quality
              Products & Services?</h1>
              <p className="small-text text-[#e9e9e9bb] max-w-xl">
                 Join thousands of satisfied customers who trust Solbim Trading for
              their product needs. Get
              started today and experience the difference.
              </p>
              <div className="flex gap-4">
                 <GradientButton text="Contact Us" />
              <Button
                variant="ghost"
                className="border-1 font-sans rounded-4xl text-white py-[20px] px-[30px] transition-all"
              >
                Get a Quote
              </Button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
