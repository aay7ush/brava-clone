"use client"

import { CustomArrowProps } from "@/types"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Slide from "./Slide"

const CustomArrow = ({ onClick, icon, direction }: CustomArrowProps) => (
  <div
    style={{
      background: "#212122",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      position: "absolute",
      left: direction === "left" ? "0" : "auto",
      right: direction === "right" ? "0" : "auto",
      zIndex: "30",
      color: "white",
      display: "grid",
      placeContent: "center",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {icon}
  </div>
)

export default function HeroBanner() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <CustomArrow icon={<ArrowRight />} direction="right" />,

    prevArrow: <CustomArrow icon={<ArrowLeft />} direction="left" />,
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        <Slide title="heritage hoodies" image="/banner_1.png" />
        <Slide title="heritage tees" image="/banner_2.png" right={true} />
        <Slide title="premium tees" image="/banner_3.png" />
        <Slide title="premium zip hoodies" image="/banner_4.png" />
        <Slide
          title="heritage women's tanks"
          image="/banner_5.png"
          right={true}
        />
      </Slider>
    </div>
  )
}
