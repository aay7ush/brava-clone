import { CardProps } from "@/types"
import Image from "next/image"
import Link from "next/link"

export default function Card({ image, title }: CardProps) {
  return (
    <div
      className={`${
        title === "$hosky"
          ? "bg-[#236bd3]"
          : title === "bitfins"
          ? "bg-[#091f2c]"
          : "bg-black"
      } flex justify-between min-w-[200px] max-w-[360px] whitespace-nowrap p-4 h-[150px] text-white rounded-r-lg rounded-l-full mx-auto`}
    >
      <Image
        src={image}
        alt=""
        width={375}
        height={375}
        className="rounded-full w-[150px] h-[150px] -translate-y-4 -translate-x-4"
      />

      <div className="flex flex-col gap-10 justify-center items-end">
        <p className="text-3xl font-bold">{title}</p>
        <Link href="/" className="underline">
          shop now
        </Link>
      </div>
    </div>
  )
}
