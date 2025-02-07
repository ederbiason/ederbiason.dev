const educations = [
    { title: "Engenharia de Software", subtitle: "UniFil", dateRange: "jul 2022 - jul 2026" },
    { title: "Engenharia de Produção - Software", subtitle: "UEM", dateRange: "jul 2021 - mai 2022" },
]

const experiences = [
    { title: "Estagiário Desenvolvedor", subtitle: "Junior Baby", dateRange: "fev 2024 - dez 2024" },
    { title: "Projeto de Extensão Curricular", subtitle: "UniFil", dateRange: "jun 2023 - jul 2024" },
]

export function Qualification() {
    return (
        <section className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-white">
                        <span className="text-customPurple">#</span>
                        qualificação
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-gray-400 text-justify">
                    Minha escolaridade e experiências de trabalho até o momento
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 gap-20">
                    <div className="w-full px-10 md:px-0 md:w-auto">
                    <h1 className="text-white text-2xl mb-5 font-semibold">
                        <span className="text-customPurple">#</span>
                        Educação
                    </h1>

                    <div className="flex gap-5 w-full">
                        <div className="w-[1px] bg-gray-400"></div>

                        <div className="flex flex-col gap-5">
                            {educations.map((education, index) => (
                                <div key={index} className="border border-customPurple hover:bg-customPurple hover:bg-opacity-20 p-5 relative">
                                    <div className="w-5 h-5 rounded-full bg-customPurple absolute -top-1 -left-[31px]"></div>
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
                        Experiência
                    </h1>

                    <div className="flex gap-5 w-full">
                        <div className="w-[1px] bg-gray-400"></div>

                        <div className="flex flex-col gap-5">
                            {experiences.map((experience, index) => (
                                <div key={index} className="border border-customPurple hover:bg-customPurple hover:bg-opacity-20 p-5 relative">
                                    <div className="w-5 h-5 rounded-full bg-customPurple absolute -top-1 -left-[31px]"></div>
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