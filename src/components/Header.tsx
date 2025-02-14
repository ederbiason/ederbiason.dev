"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { CgMenuGridO } from "react-icons/cg"
import { FaAngleDown, FaAt, FaBook, FaEnvelope, FaFolder, FaGithub, FaGlobe, FaHome, FaLinkedin, FaMoon, FaSun, FaTimes, FaUser } from "react-icons/fa"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [isLangMenuOpen, setIsLangMenuOpen] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>("#home")
    const [activeLanguage, setActiveLanguage] = useState<string | null>("")

    const { i18n } = useTranslation()

    useEffect(() => {
        setActiveLanguage(localStorage.getItem("language"))
    }, [i18n.language])

    const changeLanguage = (lng: "en" | "pt") => {
        i18n.changeLanguage(lng)
        localStorage.setItem("language", lng)
        setIsLangMenuOpen(false)
    }

    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]")
            const scrollY = window.scrollY

            sections.forEach((section) => {
                const sectionHeight = (section as HTMLElement).offsetHeight
                const sectionTop = (section as HTMLElement).offsetTop - 50
                const sectionId = section.getAttribute("id") || ""

                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
                ) {
                    setActiveSection(sectionId)
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const menuItems = [
        { href: "#home", icon: <FaHome />, text: t("header.home") },
        { href: "#about", icon: <FaUser />, text: t("header.about") },
        { href: "#skills", icon: <FaBook />, text: t("header.skills") },
        {
            href: "#portfolio",
            icon: <FaFolder />,
            text: t("header.portfolio"),
        },
        { href: "#contact", icon: <FaAt />, text: t("header.contact") },
    ]

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            document.body.classList.add("dark-theme")
            setIsDarkMode(true)
        }
    }, [])

    return (
        <header className="bg-background fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full z-50">
            <nav className="mx-4 md:mx-10 lg:mx-20 xl:mx-44 md:pt-8 md:pb-2 py-4 flex items-center justify-between md:text-sm lg:text-base">
                <div className="absolute md:left-2 top-0 lg:left-6 md:flex md:flex-col items-center hidden">
                    <div className="h-64 w-[1px] bg-textColor"></div>

                    <div className="mt-3 flex flex-col gap-3 text-textColor">
                        <Link href="https://www.linkedin.com/in/eder-biason-b0a7b920b/" target="_blank">
                            <FaLinkedin size={24} className="hover:text-titleColor cursor-pointer" />
                        </Link>
                        <Link href="https://github.com/ederbiason" target="_blank">
                            <FaGithub size={24} className="hover:text-titleColor cursor-pointer" />
                        </Link>
                        <Link href="mailto:ederbiason.eh@hotmail.com">
                            <FaEnvelope size={24} className="hover:text-titleColor cursor-pointer" />
                        </Link>
                    </div>
                </div>

                <Link href="#home" className="text-titleColor text-bold text-sm md:text-base lg:text-lg">
                    <span className="text-customPurple">&#60;</span>Eder Biason <span className="text-customPurple">/&#62;</span>
                </Link>

                <div
                    className={`fixed md:static md:w-fit bottom-0 left-0 bg-background shadow-[0px_-4px_10px_rgba(0,0,0,0.3)] rounded-t-3xl text-textColor w-full h-fit flex flex-col p-6 pb-3 transform transition-transform ${isMenuOpen ? "translate-y-0" : "translate-y-full md:translate-y-0"
                        } md:bottom-auto md:left-auto md:flex md:items-center md:shadow-none md:p-0`}
                >
                    <ul className="grid grid-cols-3 px-10 py-5 justify-items-center md:flex md:px-0 md:py-0 gap-14 md:gap-5 lg:gap-10">
                        {menuItems.map((item) => (
                            <li key={item.href} className="flex items-center gap-2">
                                <Link
                                    href={item.href}
                                    className={`flex flex-col md:flex-row items-center gap-2 transition-colors ${activeSection === item.href.slice(1)
                                        ? "font-bold text-titleColor md:text-titleColor"
                                        : "hover:text-titleColor"
                                        }`}
                                    onClick={() => {
                                        setIsMenuOpen(false)
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
                                className="flex flex-col md:flex-row items-center gap-2 group"
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            >
                                <FaGlobe className="md:hidden" />
                                <p className="md:flex group-hover:text-titleColor">
                                    <span className="hidden md:block text-customPurple">#</span>
                                    {activeLanguage === "pt" ? "idiomas" : "languages"}
                                </p>
                                <FaAngleDown className="hidden md:block group-hover:text-titleColor" />
                            </button>
                            {isLangMenuOpen && (
                                <div
                                    className="absolute -top-24 -left-1/3 md:top-8 md:left-0 bg-background border border-borderColor text-sm rounded-lg shadow-lg py-2"
                                    onMouseLeave={() => setIsLangMenuOpen(false)}
                                >
                                    <button
                                        className={`block w-full px-4 py-2 hover:bg-zinc-600 hover:bg-opacity-30 ${activeLanguage === "pt" && "text-titleColor font-bold"}`}
                                        onClick={() => changeLanguage("pt")}
                                    >
                                        {activeLanguage === "pt" ? "Português" : "Portuguese"}
                                    </button>
                                    <button
                                        className={`block w-full px-4 py-2 hover:bg-zinc-600 hover:bg-opacity-30 ${activeLanguage === "en" && "text-titleColor font-bold"}`}
                                        onClick={() => changeLanguage("en")}
                                    >
                                        {activeLanguage === "pt" ? "Inglês" : "English"}
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => {
                                setIsDarkMode(!isDarkMode)
                                document.body.classList.toggle("dark-theme")
                                localStorage.setItem(
                                    "theme",
                                    isDarkMode ? "light" : "dark"
                                )
                            }}
                            className="text-xl hidden md:block hover:text-titleColor"
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
                <div className="flex items-center gap-5 text-titleColor md:hidden">
                    <button
                        onClick={() => {
                            setIsDarkMode(!isDarkMode)
                            document.body.classList.toggle("dark-theme")
                            localStorage.setItem(
                                "theme",
                                isDarkMode ? "light" : "dark"
                            )
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