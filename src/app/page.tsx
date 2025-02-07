import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Qualification } from "@/components/Qualification"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import { Portfolio } from "@/components/Portfolio"
import { Skills } from "@/components/Skills"

export default function Page() {
  return (
    <>
      <Header />

      <main className="my-16 md:my-28 mx-4 md:mx-10 lg:mx-20 xl:mx-44">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
