import { IconType } from "react-icons"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

interface CardProps {
  icon: IconType
  title: string
  description: string
  linkHref?: string
  linkText?: string
  iconColor?: string
  iconBgColor?: string
  iconBorderColor?: string
  hidLink?: boolean
  className?: string
  textClassName?: string
  iconClassName?: string
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  linkHref,
  linkText = "Learn More",
  iconColor = "#DB7525",
  iconBgColor = "#FFECDD",
  iconBorderColor = "#DB7525",
  hidLink,
  className,
  textClassName,
  iconClassName,
}) => {
  return (
    <div
      className={`bg-white  rounded-[10px] border border-[#FFFFFF] gap-12 px-6 py-6 shadow ${className}`}
    >
      <div
        className={`rounded-[3px] p-2 border ${iconClassName}`}
        style={{ backgroundColor: iconBgColor, borderColor: iconBorderColor }}
      >
        <Icon className="w-6 h-6" style={{ color: iconColor }} />
      </div>
      <div className={`gap-[8px] ${textClassName}`}>
        <h2 className="font-sans font-bold text-[21px] md:text-2xl">{title}</h2>
        <p className="font-sans font-normal text-sm md:text-base text-[#595959]">
          {description}
        </p>
        <Link
          href={linkHref ? linkHref : ""}
          className={`flex gap-10 items-center justify-center ${
            hidLink ? "hidden" : ""
          }`}
        >
          <span className="font-medium font-sans text-sm md:text-base text-[#260019]">
            {linkText}
          </span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Card
