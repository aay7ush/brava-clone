"use client"

import { CARDS } from "@/constants"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Card from "./Card"

export default function Slideshow() {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-2.5 md:px-5">
      <Slider {...settings}>
        {CARDS.map((card) => (
          <Card key={card.title} title={card.title} image={card.image} />
        ))}
      </Slider>
    </div>
  )
}
