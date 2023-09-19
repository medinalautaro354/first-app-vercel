import ColorProvider from "@/components/ColorProvider";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="" href={"/about"}>Ir al About</Link>
    </main>
  )
}
