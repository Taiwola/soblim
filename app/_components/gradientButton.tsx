import { Button } from "@heroui/button"


export default function GradientButton({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <Button
      className={`bg-linear-to-r from-[#F57A20] to-[#F5A460] text-[#FAFAFA] font-sans font-medium text-[16px] rounded-[70px] py-[20px] px-[30px] ${className}`}
      style={{
        boxShadow: `
      0px 5px 12px 0px #EE69111A,
      0px 21px 21px 0px #EE691117,
      0px 48px 29px 0px #EE69110D,
      0px 86px 34px 0px #EE691103,
      0px 134px 38px 0px #EE691100
    `,
      }}
      variant="light"
    >
      {text}
    </Button>
  )
}
