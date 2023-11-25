import Image from "next/image"
import Link from "next/link"
import React from "react"

interface SlideProps {
  image: string
  title: string
  right?: boolean
}

export default function Slide({ image, title, right }: SlideProps) {
  return (
    <div className="relative">
      <Image
        src={image}
        alt="banner"
        width={1440}
        height={650}
        className=" brightness-75 h-[500px] object-cover"
      />

      <div
        className={`absolute ${
          right ? "right-10" : "left-20"
        } top-24 text-white`}
      >
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-16">
          {title.split(" ").map((word, index, array) => (
            <React.Fragment key={index}>
              {word}
              {index !== array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>

        <Link
          href="/"
          className="bg-white py-3 px-6 font-medium text-black text-lg rounded-full"
        >
          shop now
        </Link>
      </div>
    </div>
  )
}
