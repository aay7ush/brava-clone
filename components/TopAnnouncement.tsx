import Link from "next/link"

export default function TopAnnouncement() {
  return (
    <section className="bg-clr-yellow text-clr-dark-gray text-center py-2">
      <p className="font-bold uppercase text-sm">
        Visit us on tiktok <Link href="/">@bravaland.com</Link>
      </p>
    </section>
  )
}
