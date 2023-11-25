"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Card from "./Card"

const cards = [
  { title: "$hosky", image: "slideshow_1.svg" },
  { title: "bitfins", image: "slideshow_2.svg" },
  { title: "future fest", image: "slideshow_3.svg" },
  { title: "vudu brigada", image: "slideshow_4.svg" },
  { title: "pendulum", image: "slideshow_5.svg" },
]

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
        {cards.map((card) => (
          <Card key={card.title} title={card.title} image={card.image} />
        ))}
      </Slider>
    </div>
  )
}
