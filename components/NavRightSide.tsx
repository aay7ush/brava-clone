import { SOCIALS } from "@/constants"
import { Search, ShoppingBag, User2 } from "lucide-react"
import Link from "next/link"

export default function NavRightSide() {
  return (
    <div className="flex gap-4">
      <Link href="/" className="font-bold relative hidden lg:block">
        <span className="hover-effect">become an affiliate</span>
      </Link>

      <div className="flex gap-4">
        {SOCIALS.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            className="hidden lg:block hover"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      <Link href="/" className="hidden md:block hover">
        <User2 />
      </Link>

      <button className="hover">
        <Search />
      </button>

      <Link href="/" className="relative group hover">
        <ShoppingBag />
        <span className="bg-white text-clr-dark-gray w-4 h-4 grid place-content-center rounded-full absolute -right-1 -top-1 text-xs group-hover:bg-clr-yellow">
          0
        </span>
      </Link>
    </div>
  )
}
