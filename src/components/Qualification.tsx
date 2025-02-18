"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FaArrowRight } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io"

type Experience = {
    title: string
    subtitle: string
    dateRange: string
    responsibilities: {
        title: string
        tasks: string[]
    }
    technologies: {
        title: string
        tools: string[]
    }
}

type Education = {
    title: string
    subtitle: string
    dateRange: string
}


export function Qualification() {
    const [activeModal, setActiveModal] = useState<number | null>(null)

    const { t } = useTranslation()

    const tabs = t("qualification.tab", { returnObjects: true }) as { title: string }[]
    const educations = t("qualification.education", { returnObjects: true }) as Education[]
    const experiences = t("qualification.experiences", { returnObjects: true }) as Experience[]

    return (
        <section className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-titleColor">
                        <span className="text-customPurple">#</span>
                        {t("qualification.title")}
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-textColor text-justify">
                    {t("qualification.subtitle")}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 gap-20">
                <div className="w-full px-10 md:px-0 md:w-auto">
                    <h1 className="text-titleColor text-2xl mb-5 font-semibold">
                        <span className="text-customPurple">#</span>
                        {tabs[0].title}
                    </h1>

                    <div className="flex gap-5 w-full">
                        <div className="w-[1px] bg-gray-400"></div>

                        <div className="flex flex-col gap-5">
                            {educations.map((education, index) => (
                                <div key={index} className="border border-customPurple hover:bg-customPurple hover:bg-opacity-20 p-5 relative">
                                    <div className="w-5 h-5 rounded-full bg-customPurple animate-bounce absolute -top-1 -left-[31px]"></div>
                                    <div>
                                        <h2 className="text-titleColor font-semibold text-lg">
                                            {education.title}
                                        </h2>
                                        <p className="text-customPurple">
                                            {education.subtitle}
                                        </p>
                                        <p className="text-textColor">
                                            {education.dateRange}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-10 md:px-0 md:w-auto">
                    <h1 className="text-titleColor text-2xl mb-5 font-semibold">
                        <span className="text-customPurple">#</span>
                        {tabs[1].title}
                    </h1>

                    <div className="flex gap-5 w-full">
                        <div className="w-[1px] bg-gray-400"></div>

                        <div className="flex flex-col gap-5">
                            {experiences.map((experience, index) => (
                                <div key={index} className="border border-customPurple hover:bg-customPurple hover:bg-opacity-20 p-5 relative">
                                    <div className="w-5 h-5 animate-bounce rounded-full bg-customPurple absolute -top-1 -left-[31px]"></div>
                                    <h2 className="text-titleColor font-semibold text-lg">
                                        {experience.title}
                                    </h2>
                                    <p className="text-customPurple">
                                        {experience.subtitle}
                                    </p>
                                    <p className="text-textColor pb-1 md:pb-0">
                                        {experience.dateRange}
                                    </p>

                                    <button
                                        className="group text-customPurple flex items-center gap-1 absolute bottom-1 right-2.5 underline underline-offset-4 hover:text-titleColor"
                                        onClick={() => setActiveModal(index)}
                                    >
                                        {t("qualification.seeMore")}
                                        <FaArrowRight size={14} className="transition-all duration-300 group-hover:translate-x-1" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className={`fixed px-4 md:px-0 z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                        activeModal === index ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="relative bg-background rounded-md p-6 w-[500px] transition-transform duration-300">
                        <IoIosCloseCircleOutline
                            size={30}
                            className="absolute top-3 right-3 cursor-pointer text-customPurple hover:text-white hover:bg-customPurple rounded-full"
                            onClick={() => setActiveModal(null)}
                        />

                        <h1 className="font-bold text-2xl text-titleColor">
                            {experience.title}
                        </h1>

                        <p className="text-customPurple font-semibold">
                            {experience.subtitle} | {experience.dateRange}
                        </p>

                        <ul className="text-textColor list-disc p-5">
                            {
                                experience.responsibilities.tasks.map((responsability, index) => (
                                    <li key={index}>
                                        {responsability}
                                    </li>
                                ))
                            }
                        </ul>

                        <div>
                            <p className="text-titleColor font-semibold">
                                {experience.technologies.title}
                            </p>
                            <div className="pt-3 flex flex-wrap gap-3 bg-background">
                                {
                                    experience.technologies.tools.map((tool, index) => (
                                        <div
                                            key={`${tool}-${index}`}
                                            className="transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-titleColor bg-customPurple bg-opacity-30 w-fit px-2 p-1 rounded-full font-medium hover:shadow-md hover:shadow-gray-500 hover:bg-opacity-60 cursor-pointer text-sm"
                                        >
                                            <span>
                                                {tool}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}