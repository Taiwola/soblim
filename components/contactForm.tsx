import GradientButton from "@/app/_components/gradientButton";
import { Input, Textarea } from "@heroui/input";

export default function ContactForm() {
    return  <div className="border border-white shadow-md w-full p-4">
            <div className="flex flex-col gap-6">
              <h1 className="medium-text">Send us a Message</h1>

                <form action="">
                    <div className="flex flex-col gap-6">
                  <Input
                    isRequired
                    errorMessage="Please enter a valid name"
                    label="Full Name"
                    labelPlacement="outside"
                    name="FullName"
                    placeholder="Jane Doe"
                    type="text"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="JaneDoe@gmail.com"
                    type="email"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Input
                    isRequired
                    errorMessage="Please enter a valid number"
                    label="Phone Number"
                    labelPlacement="outside"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    type="text"
                    className="text-[18px] font-normal font-sans"
                  />

                  <Textarea
                    isRequired
                    className="w-full text-[18px] font-normal font-sans"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                  />

                  <GradientButton text="Contact Us" className="w-full" />
              </div>
                </form>
            </div>
          </div>
}