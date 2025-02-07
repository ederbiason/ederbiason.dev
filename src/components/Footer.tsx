import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const footerOptions = [
    { href: "#home", text: "início" },
    { href: "#about", text: "sobre" },
    { href: "#portfolio", text: "portfólio" },
    { href: "#contact", text: "contato" },
]

export function Footer() {
    return (
        <footer className="border-t border-gray-400 bg-customGray pb-12 md:pb-0">
            <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-44 my-10 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0">
                    <div>
                        <p className="text-white font-bold text-2xl">
                            <span className="text-customPurple">&#60;</span>Eder Biason <span className="text-customPurple">/&#62;</span>
                        </p>
                        <p className="font-semibold text-customPurple">
                            Desenvolvedor Front-End
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 md:items-center md:gap-10">
                        {
                            footerOptions.map((option, index) => (
                                <Link key={index} href={option.href} className="flex items-center">
                                    <span className=" text-customPurple">#</span>
                                    <p className="text-gray-400 hover:text-white">
                                        {option.text}
                                    </p>
                                </Link> 
                            ))
                        }
                    </div>

                    <div className="flex gap-3 text-gray-400">
                        <Link href="https://www.linkedin.com/in/eder-biason-b0a7b920b/" target="_blank">
                            <FaLinkedin size={24} className="hover:text-white cursor-pointer" />
                        </Link>
                        <Link href="https://github.com/ederbiason" target="_blank">
                            <FaGithub size={24} className="hover:text-white cursor-pointer" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <p className="text-gray-400 font-semibold text-sm md:text-base">
                        <span className="text-customPurple">&copy;</span> Eder Biason. Todos os direitos reservados. {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}