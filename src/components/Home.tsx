"use client"

import Image from "next/image"
import HomeImage from "../../public/images/home.svg"
import DecorationImage from "../../public/images/decoration.svg"
import DotsImage from "../../public/images/dots.svg"
import { BiSend } from "react-icons/bi"
import Link from "next/link"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { Trans, useTranslation } from "react-i18next"

export function Home() {
    const { t } = useTranslation()

    return (
        <section
            className="flex flex-col gap-12"
            id="home"
        >
            <div className="text-white flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="flex flex-col gap-5">
                    <h1 className="font-semibold text-4xl">
                        {t("home.title")}
                    </h1>

                    <p className="font-semibold text-customPurple text-lg">
                        {t("home.subtitle")}
                    </p>

                    <p className="text-gray-400 teste">
                        <Trans
                            i18nKey="home.social"
                            components={{
                                1: <span className='text-customPurple' />
                            }}
                        />
                    </p>

                    <Link
                        href="#contact"
                        className="mt-3 flex w-fit gap-2 py-3 px-5 border border-customPurple items-center font-semibold group hover:bg-customPurple hover:bg-opacity-20"
                    >
                        {t("home.contact")}
                        <BiSend size={20} className="transition-all duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="flex flex-col items-center relative">
                    <Image
                        src={HomeImage}
                        width={650}
                        height={400}
                        alt="Pessoa de capuz e boné"
                        className="border-b border-customPurple z-10"
                    />

                    <Image
                        src={DecorationImage}
                        width={128}
                        height={128}
                        alt="Decoração"
                        className="absolute left-0 top-20 lg:w-52 lg:h-52"
                    />

                    <Image
                        src={DotsImage}
                        width={100}
                        height={50}
                        alt="Decoração"
                        className="absolute z-20 right-10 bottom-24 w-28 h-16 lg:w-40 lg:h-28"
                    />

                    <div className="border border-gray-400 border-t-transparent flex items-center p-2 gap-3 w-fit">
                        <div className="w-4 h-4 border border-customPurple bg-customPurple bg-opacity-20" />
                        <p className="text-gray-400">
                            {t("home.imageTitle")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-end text-white text-xl">
                    <div className="p-6 border border-gray-400 font-bold relative">
                        <p>
                            {t("home.quoteMessage")}
                        </p>

                        <FaQuoteLeft className="absolute -top-2.5 left-4 bg-customGray" />
                        <FaQuoteRight className="absolute -bottom-2.5 right-4 bg-customGray" />
                    </div>

                    <div className="p-3 border border-gray-400 border-t-0 font-semibold">
                        {t("home.quoteAutor")}
                    </div>
                </div>
            </div>
        </section>
    )
}
