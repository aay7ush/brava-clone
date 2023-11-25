import Image from "next/image"
import MobileNav from "./MobileNav"
import NavLeftSide from "./NavLeftSide"
import NavRightSide from "./NavRightSide"

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-2.5 md:px-5 py-1.5 flex justify-between items-center relative">
      <MobileNav />

      <NavLeftSide />

      <Image src="/logo.webp" alt="logo" width={100} height={100} />

      <NavRightSide />
    </nav>
  )
}
