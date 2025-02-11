"use client"

import { useTranslation } from "react-i18next"

type Experience = {
    title: string
    subtitle: string
    dateRange: string
}

type Education = {
    title: string
    subtitle: string
    dateRange: string
}


export function Qualification() {
    const { t } = useTranslation()

    const tabs = t("qualification.tab", { returnObjects: true }) as { title: string }[]
    const educations = t("qualification.education", { returnObjects: true }) as Education[]
    const experiences = t("qualification.experiences", { returnObjects: true }) as Experience[]

    return (
        <section className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-white">
                        <span className="text-customPurple">#</span>
                        {t("qualification.title")}
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-gray-400 text-justify">
                    {t("qualification.subtitle")}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 gap-20">
                <div className="w-full px-10 md:px-0 md:w-auto">
                    <h1 className="text-white text-2xl mb-5 font-semibold">
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
                                        <h2 className="text-white font-semibold text-lg">
                                            {education.title}
                                        </h2>
                                        <p className="text-customPurple">
                                            {education.subtitle}
                                        </p>
                                        <p className="text-gray-400">
                                            {education.dateRange}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full px-10 md:px-0 md:w-auto">
                    <h1 className="text-white text-2xl mb-5 font-semibold">
                        <span className="text-customPurple">#</span>
                        {tabs[1].title}
                    </h1>

                    <div className="flex gap-5 w-full">
                        <div className="w-[1px] bg-gray-400"></div>

                        <div className="flex flex-col gap-5">
                            {experiences.map((experience, index) => (
                                <div key={index} className="border border-customPurple hover:bg-customPurple hover:bg-opacity-20 p-5 relative">
                                    <div className="w-5 h-5 animate-bounce rounded-full bg-customPurple absolute -top-1 -left-[31px]"></div>
                                    <h2 className="text-white font-semibold text-lg">
                                        {experience.title}
                                    </h2>
                                    <p className="text-customPurple">
                                        {experience.subtitle}
                                    </p>
                                    <p className="text-gray-400">
                                        {experience.dateRange}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}