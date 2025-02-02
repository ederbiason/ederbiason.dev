import Image from "next/image"
import HomeImage from "../../public/images/home.svg"
import DecorationImage from "../../public/images/decoration.svg"
import DotsImage from "../../public/images/dots.svg"
import { BiSend } from "react-icons/bi"
import Link from "next/link"

export function Home() {
    return (
        <section
            className="text-white flex flex-col md:flex-row items-center gap-8"
            id="home"
        >
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-4xl">
                    Eder Biason
                </h1>

                <p className="font-semibold text-customPurple text-lg">
                    Desenvolvedor Front-End
                </p>

                <p className="text-gray-400">
                    Estudante de <span className="text-customPurple">Engenharia de Software</span> apaixonado por tecnologia e programação.
                </p>

                <Link
                    href="#contato"
                    className="mt-3 flex w-fit gap-2 py-2 px-5 border border-customPurple items-center font-semibold group hover:bg-customPurple hover:bg-opacity-20"
                >
                    Contato
                    <BiSend size={20} className="transition-all duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="flex flex-col items-center relative">
                <Image
                    src={HomeImage}
                    width={650}
                    height={400}
                    alt=""
                    className="border-b border-customPurple z-10"
                />

                <Image
                    src={DecorationImage}
                    width={128}
                    height={128}
                    alt=""
                    className="absolute left-0 top-20 lg:w-52 lg:h-52"
                />

                <Image
                    src={DotsImage}
                    width={100}
                    height={50}
                    alt=""
                    className="absolute z-20 right-10 bottom-24 w-28 h-16 lg:w-40 lg:h-28"
                />

                <div className="border border-gray-400 border-t-transparent flex items-center p-2 gap-3 w-fit">
                    <div className="w-4 h-4 border border-customPurple bg-customPurple bg-opacity-20" />
                    <p className="text-gray-400">
                        Aberto para novas oportunidades
                    </p>
                </div>
            </div>
        </section>
    )
}
