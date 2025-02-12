"use client"

import Image from "next/image"
import Developer from "../../public/images/developer.png"
import { HiOutlineDownload } from "react-icons/hi"
import { Trans, useTranslation } from "react-i18next"

export function About() {
    const { t } = useTranslation()

    const careerInfo = t("about.careerInfo", { returnObjects: true }) as { value: string; text: string }[]

    return (
        <section
            id="about"
            className="mt-20 md:mt-32"
        >
            <div className="flex items-center gap-5">
                <h1 className="font-medium text-4xl text-titleColor">
                    <span className="text-customPurple">#</span>
                    {t("about.title")}
                </h1>

                <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
            </div>

            <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
                <div className="flex-1 md:max-w-[50%] text-justify flex flex-col gap-5 text-textColor mt-8 lg:mt-0">
                    <p>
                        <Trans
                            i18nKey="about.paragraph1"
                            components={{
                                1: <span className='text-customPurple' />
                            }}
                        />
                    </p>
                    <p>
                        <Trans
                            i18nKey="about.paragraph2"
                            components={{
                                1: <span className='text-customPurple' />
                            }}
                        />
                    </p>
                </div>

                <div className="">
                    <Image
                        src={Developer}
                        alt="Imagem de uma pessoa sentada com um computador na mão"
                        className="2xl:w-[500px]"
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 justify-items-center mt-10">
                {
                    careerInfo.map((info, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-1 border p-3 border-textColor hover:bg-gray-400 hover:bg-opacity-20">
                            <p className="text-2xl font-bold text-titleColor">
                                {info.value}
                            </p>

                            <p className="text-center text-textColor">
                                {info.text}
                            </p>
                        </div>
                    ))
                }
                <a
                    className="mt-11 text-titleColor font-semibold p-4 flex items-center gap-2 group border border-customPurple bg-opacity-40 bg-customPurple hover:bg-opacity-20 col-span-3 cursor-pointer"
                    href={t("about.resumePath")}
                    download
                >
                    {t("about.resume")}
                    <HiOutlineDownload size={20} className="transition-all duration-300 group-hover:translate-y-1" />
                </a>
            </div>
        </section>
    )
}
