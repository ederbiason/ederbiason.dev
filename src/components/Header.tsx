"use client"

import Link from "next/link"
import { useState } from "react"
import { CgMenuGridO } from "react-icons/cg"
import { FaAngleDown, FaAt, FaBook, FaEnvelope, FaFolder, FaGithub, FaGlobe, FaHome, FaLinkedin, FaMoon, FaSun, FaTimes, FaUser } from "react-icons/fa"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
    const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>("#home")

    const menuItems = [
        { href: "#home", icon: <FaHome />, text: "início" },
        { href: "#about", icon: <FaUser />, text: "sobre" },
        { href: "#skills", icon: <FaBook />, text: "habilidades" },
        {
            href: "#portfolio",
            icon: <FaFolder />,
            text: "portfólio",
        },
        { href: "#contact", icon: <FaAt />, text: "contato" },
    ]

    return (
        <header className="bg-customGray fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full">
            <nav className="mx-4 md:mx-10 lg:mx-20 xl:mx-44 md:pt-8 md:pb-2 py-4 flex items-center justify-between md:text-sm lg:text-base">
                <div className="absolute md:left-2 top-0 lg:left-6 md:flex md:flex-col items-center hidden">
                    <div className="h-64 w-[1px] bg-gray-400"></div>

                    <div className="mt-3 flex flex-col gap-3 text-gray-400">
                        <Link href="https://www.linkedin.com/in/eder-biason-b0a7b920b/" target="_blank">
                            <FaLinkedin size={24} className="hover:text-white cursor-pointer" />
                        </Link>
                        <Link href="https://github.com/ederbiason" target="_blank">
                            <FaGithub size={24} className="hover:text-white cursor-pointer" />
                        </Link>
                        <Link href="mailto:ederbiason.eh@hotmail.com">
                            <FaEnvelope size={24} className="hover:text-white cursor-pointer" />
                        </Link>
                    </div>
                </div>

                <Link href="#" className="text-white text-bold text-sm md:text-base lg:text-lg">
                    <span className="text-customPurple">&#60;</span>Eder Biason <span className="text-customPurple">/&#62;</span>
                </Link>

                <div
                    className={`fixed md:static md:w-fit bottom-0 left-0 bg-zinc-800 rounded-t-3xl text-gray-400 w-full h-fit flex flex-col p-6 pb-3 transform transition-transform ${isMenuOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"
                        } md:bottom-auto md:left-auto md:flex md:items-center md:bg-transparent md:p-0`}
                >
                    <ul className="grid grid-cols-3 px-10 py-5 justify-items-center md:flex md:px-0 md:py-0 gap-14 md:gap-5 lg:gap-10">
                        {menuItems.map((item) => (
                            <li key={item.href} className="flex items-center gap-2">
                                <Link
                                    href={item.href}
                                    className={`flex flex-col md:flex-row items-center gap-2 transition-colors ${activeSection === item.href
                                        ? "font-bold text-white"
                                        : "hover:text-white"
                                        }`}
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setActiveSection(item.href)
                                    }}
                                >
                                    <div className="md:hidden">
                                        {item.icon}
                                    </div>
                                    <p className="md:flex">
                                        <span className="hidden md:block text-customPurple">#</span>
                                        {item.text}
                                    </p>
                                </Link>
                            </li>
                        ))}

                        {/* Languages */}
                        <div className="relative">
                            <button
                                className="flex flex-col md:flex-row items-center gap-2"
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            >
                                <FaGlobe className="md:hidden" />
                                <p className="md:flex">
                                    <span className="hidden md:block text-customPurple">#</span>
                                    idiomas
                                </p>
                                <FaAngleDown className="hidden md:block" />
                            </button>
                            {isLangMenuOpen && (
                                <div
                                    className="absolute top-8 left-0 bg-zinc-700 text-sm rounded-lg shadow-lg py-2"
                                    onMouseLeave={() => setIsLangMenuOpen(false)}
                                >
                                    <button
                                        className="block w-full px-4 py-2 hover:bg-zinc-600"
                                        onClick={() => console.log("Português")}
                                    >
                                        Português
                                    </button>
                                    <button
                                        className="block w-full px-4 py-2 hover:bg-zinc-600"
                                        onClick={() => console.log("English")}
                                    >
                                        English
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                setIsDarkMode(!isDarkMode)
                            }}
                            className="text-xl hidden md:block"
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </ul>

                    {/* Close modal button (only mobile) */}
                    <button
                        className="text-xl md:hidden place-self-end"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Toggle theme and menu buttons */}
                <div className="flex items-center gap-5 text-white md:hidden">
                    <button
                        onClick={() => {
                            setIsDarkMode(!isDarkMode)
                        }}
                        className="text-xl"
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    <button
                        className="text-xl"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <CgMenuGridO size={24} />
                    </button>
                </div>
            </nav>
        </header>
    )
}