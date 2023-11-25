"use client"

import { useState } from "react"

import { SOCIALS } from "@/constants"
import { AlignJustify, ArrowRight, User2, X } from "lucide-react"
import Link from "next/link"

export default function MobileNav() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      {!open ? (
        <button className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          <AlignJustify />
        </button>
      ) : (
        <button onClick={() => setOpen((prev) => !prev)}>
          <X />
        </button>
      )}

      {open && (
        <div className="font-bold text-white bg-clr-dark-gray grid gap-7 absolute left-0 top-16 w-full h-[calc(100vh-116px)] z-50 px-2.5 md:px-5 text-xl">
          <ul className="grid gap-7">
            <li>
              <Link href="/" className="flex justify-between">
                <span>brands</span>
                <ArrowRight />
              </Link>
            </li>
            <li>
              <Link href="/" className="flex justify-between">
                <span>shop</span>
                <ArrowRight />
              </Link>
            </li>
            <li>
              <Link href="/">premium</Link>
            </li>
            <li>
              <Link href="/">gift cards</Link>
            </li>
            <li>
              <Link href="/">become an affiliate</Link>
            </li>
          </ul>

          <div className="flex gap-3">
            {SOCIALS.map((social) => (
              <Link key={social.name} href={social.url} className=" hover">
                {social.icon}
              </Link>
            ))}
          </div>
          <button className="flex gap-2 mt-auto">
            <User2 />
            <p>login</p>
          </button>
        </div>
      )}
    </>
  )
}
