import { Card, CardBody, CardHeader } from "@heroui/react"

export default function WhyChooseUsCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <>
      <Card className="border-b-5 border-[#DB7525] p-3.5">
        <CardHeader>
          <h2 className="font-sans font-bold text-[21px] md:text-[27px]">
            {title}
          </h2>
        </CardHeader>
        <CardBody>
          <p className="font-sans font-normal text-[#595959] text-base md:text-[20px]">
            {description}
          </p>
        </CardBody>
      </Card>
    </>
  )
}
