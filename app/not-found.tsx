import Image from "next/image"
import png from "@/public/images/e00c628d83109a800c86a3725cf6a295.jpg"

export default function NotFound() {
    return (
      <main className="flex justify-center">
            <Image src={png} alt=""/>
      </main>
    )
  }