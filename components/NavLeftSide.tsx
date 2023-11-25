import { ChevronDown } from "lucide-react"
import Link from "next/link"

const BRAND_LINKS = [
  { title: "all brands", url: "/" },
  { title: "$hosky", url: "/" },
  { title: "$bitfins", url: "/" },
  { title: "cardano stonerz club", url: "/" },
  { title: "cryptoraggies", url: "/" },
  { title: "danketsu", url: "/" },
  { title: "future fest", url: "/" },
  { title: "pendulum", url: "/" },
  { title: "vudu brigada", url: "/" },
]

const APPAREL_LINKS = [
  { title: "unisex hoodies", url: "/" },
  { title: "unisex zip hoodies", url: "/" },
  { title: "unisex sweatshirts", url: "/" },
  { title: "unisex tees", url: "/" },
  { title: "women's tanks", url: "/" },
  { title: "unisex tanks", url: "/" },
]

const HOME_LINKS = [
  { title: "phone cases", url: "/" },
  { title: "framed posters", url: "/" },
  { title: "posters", url: "/" },
]

export default function NavLeftSide() {
  return (
    <ul className="hidden lg:flex gap-5 font-bold">
      <li className="relative group">
        <div className="flex items-center gap-1 hover-effect cursor-pointer">
          <span>brands</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <ul className="hidden group-hover:flex flex-col gap-2 p-6 rounded-sm absolute top-7 bg-[#29292a] z-50 whitespace-nowrap">
          {BRAND_LINKS.map((link) => (
            <li key={link.title} className="relative w-fit">
              <Link href={link.url} className="hover-effect">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="relative group">
        <div className="flex items-center gap-1 hover-effect cursor-pointer">
          <span>shop</span>
          <ChevronDown className="w-4 h-4" />
        </div>

        <div className="p-10 w-screen hidden group-hover:grid hover:grid grid-cols-2 absolute -left-[10.8rem] top-8 bg-[#29292a] z-50">
          <div>
            <h4 className="mb-4 text-2xl">apparel</h4>

            <ul className="flex flex-col gap-2">
              {APPAREL_LINKS.map((link) => (
                <li key={link.title} className="relative w-fit">
                  <Link href={link.url} className="hover-effect">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-2xl">home</h4>

            <ul className="flex flex-col gap-2">
              {HOME_LINKS.map((link) => (
                <li key={link.title} className="relative w-fit">
                  <Link href={link.url} className="hover-effect">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>

      <li className="relative">
        <Link href="/" className="hover-effect">
          premium
        </Link>
      </li>

      <li className="relative">
        <Link href="/" className="hover-effect">
          gift cards
        </Link>
      </li>
    </ul>
  )
}
