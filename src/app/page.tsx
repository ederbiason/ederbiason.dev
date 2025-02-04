import { About } from "@/components/About"
import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import { Skills } from "@/components/Skills"

export default function Page() {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-44 ">
      <Header />

      <main className="my-16 md:my-28">
        <Home />
        <About />
        <Skills />
      </main>

    </div>
  )
}
