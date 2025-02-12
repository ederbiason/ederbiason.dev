"use client"

import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { DiRedis } from "react-icons/di"
import { FaAngular, FaAws, FaDatabase, FaDocker, FaGithub, FaJava, FaLinux, FaReact, FaVuejs, FaWrench } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { PiBracketsCurly } from "react-icons/pi"
import { RiNextjsFill } from "react-icons/ri"
import { SiCss3, SiExpress, SiFlask, SiGit, SiGradle, SiHtml5, SiJavascript, SiMongodb, SiNestjs, SiNodedotjs, SiOracle, SiPostgresql, SiPrisma, SiPython, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si"
import { TbCloudDataConnection } from "react-icons/tb"

interface Skill {
    name: string
    icon: ReactNode
}

interface SkillCategory {
    category: string
    icon: ReactNode
    skills: Skill[]
}

export function Skills() {
    const { t } = useTranslation()

    const categories = t("skills.categories", { returnObjects: true }) as { category: string }[]

    const createSkillsData: SkillCategory[] = [
        {
            category: categories[0].category,
            icon: <PiBracketsCurly />,
            skills: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: <FaJava /> },
                { name: "SQL", icon: <FaDatabase /> },
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss3 /> },
            ],
        },
        {
            category: categories[1].category,
            icon: <FaWrench />,
            skills: [
                { name: "React.js", icon: <FaReact /> },
                { name: "Next.js", icon: <RiNextjsFill /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "NestJS", icon: <SiNestjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Prisma", icon: <SiPrisma /> },
                { name: "Zod", icon: <SiZod /> },
                { name: "React Native", icon: <FaReact /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "Angular", icon: <FaAngular /> },
                { name: "Vue.js", icon: <FaVuejs /> },
                { name: "Spring Boot", icon: <SiSpringboot /> },
            ],
        },
        {
            category: categories[2].category,
            icon: <FaDatabase />,
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "SQLite", icon: <SiSqlite /> },
                { name: "Redis", icon: <DiRedis /> },
            ],
        },
        {
            category: categories[3].category,
            icon: <TbCloudDataConnection />,
            skills: [
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Oracle Cloud", icon: <SiOracle /> },
                { name: "Firebase", icon: <IoLogoFirebase /> },
                { name: "Docker", icon: <FaDocker /> },
                { name: "Linux", icon: <FaLinux /> },
                { name: "AWS", icon: <FaAws /> },
                { name: "Gradle", icon: <SiGradle /> },
            ],
        },
    ]

    return (
        <section id="skills" className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-titleColor">
                        <span className="text-customPurple">#</span>
                        {t("skills.title")}
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-textColor text-justify">
                    {t("skills.subtitle")}
                </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-8 md:mx-20">
                {
                    createSkillsData.map((skillData, index) => (
                        <div
                            key={index}
                            className={`p-8 border bg-gray-400 bg-opacity-20 border-textColor flex flex-col gap-5 ${index === 0 || index === 1 ? "col-span-2" : ""}`}
                        >
                            <div className="text-3xl font-semibold text-customPurple flex items-center gap-5">
                                {skillData.icon}

                                <h1 className="text-2xl text-titleColor">
                                    {skillData.category}
                                </h1>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-5 justify-items-center self-center">
                                {
                                    skillData.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-titleColor bg-customPurple bg-opacity-70 w-fit px-4 p-2 rounded-full font-medium hover:shadow-md hover:shadow-gray-500 hover:bg-opacity-60 cursor-pointer"
                                        >
                                            <span>
                                                {skill.icon}
                                            </span>
                                            <span>
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}