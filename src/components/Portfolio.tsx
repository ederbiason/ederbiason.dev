"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { FaBriefcaseMedical, FaGithub, FaPoop, FaShoppingCart, FaUser } from "react-icons/fa"
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import { RiShareBoxFill } from "react-icons/ri"

const projects = [
    {
        title: "Poop Party",
        image: "/images/projects/poop-party.png",
        linkGithub: "https://github.com/ederbiason/poop-party",
        linkDeploy: "https://poop-party.vercel.app",
        icon: <FaPoop />,
        tags: ["React", "MongoDB", "NestJS"],
        modal: {
            title: "Poop Party",
            description: `Projeto inspirado em uma brincadeira entre amigos para contabilizar a quantidade de vezes que íamos ao banheiro durante um ano inteiro. Inicialmente, usávamos um grupo no WhatsApp, mas decidi automatizar esse processo enquanto aprendia NestJS na prática.`,
            details: [
                "Frontend: React, TypeScript, Tailwind, ShadcnUI",
                "Backend: NestJS, MongoDB, Mongoose, JWT Authentication",
                "Outras Tecnologias: ViteJS, Firebase, Zod, Deploy na Vercel"
            ],
        },
    },
    {
        title: "E-commerce Junior Baby",
        image: "/images/projects/ecommerce.png",
        linkGithub: "https://github.com/ederbiason/ecommerce-juniorbaby",
        linkDeploy: "",
        icon: <FaShoppingCart />,
        tags: ["NextJS", "React", "MongoDB", "Stripe"],
        modal: {
            title: "E-commerce Junior Baby",
            description: `Projeto desenvolvido durante meu estágio obrigatório, onde criei um e-commerce do zero com pagamento via Stripe, integrado com um sistema de gerenciamento de estoque para administradores.`,
            details: [
                "Frontend: React, TypeScript, NextJS, Tailwind, ShadcnUI",
                "Backend: NodeJS, MongoDB, Mongoose, JWT Authentication",
                "Outras Tecnologias: Firebase, Stripe, React Redux, Zod"
            ],
        },
    },
    {
        title: "Saúde in Foco",
        image: "/images/projects/saude-in-foco.png",
        linkGithub: "https://github.com/ederbiason/saude-in-foco",
        linkDeploy: "http://144.22.160.181:3000/",
        icon: <FaBriefcaseMedical />,
        tags: ["React", "NodeJS", "AI API", "Leaflet"],
        modal: {
            title: "Saúde in Foco",
            description: `Projeto de extensão curricular voltado para democratizar o acesso à informação de saúde para moradores de Londrina. Inclui notícias sobre saúde, um chatbot de pré-diagnóstico baseado em IA e um mapa interativo mostrando pontos de atendimento médico próximos, além de uma cartilha de doenças com informações de sintomas e tratamento.`,
            details: [
                "Frontend: Vite, React, TypeScript, Tailwind",
                "Backend: NodeJS, Firebase, AI API",
                "Mapas: Leaflet"
            ],
        },
    },
    {
        title: "Portfólio",
        image: "/images/projects/portfolio.png",
        linkGithub: "https://github.com/ederbiason/ederbiason.dev",
        linkDeploy: "",
        icon: <FaUser />,
        tags: ["NextJS", "React", "Tailwind", "SwiperJS"],
        modal: {
            title: "Portfólio",
            description: `Meu portfólio pessoal para apresentar meus projetos, conhecimentos e trajetória profissional para recrutadores e demais interessados.`,
            details: [
                "Frontend: React, NextJS, Tailwind, SwiperJS",
            ],
        },
    },
    {
        title: "AI VideoHelper",
        image: "/images/projects/videohelper.png",
        linkGithub: "https://github.com/ederbiason/ai-videohelper",
        linkDeploy: "",
        icon: <FaUser />,
        tags: ["NextJS", "React", "Fastify", "FFmpeg", "AI API"],
        modal: {
            title: "AI VideoHelper",
            description: `Ferramenta que automatiza a criação de descrições e títulos para vídeos do YouTube a partir da transcrição do conteúdo do vídeo subido.`,
            details: [
                "Frontend: React, NextJS, Tailwind, SwiperJS, ShadcnUI",
                "Backend: Prisma, Fastify, Node.js, AI, Zod"
            ],
        },
    }
]

export function Portfolio() {
    const navSwiperButtonClass = "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl z-10 text-white text-opacity-70 flex items-center justify-between w-fit bg-customPurple p-1 bg-opacity-80 transition-all duration-300 hover:scale-125 hover:bg-opacity-100 rounded-lg cursor-pointer hover:text-opacity-100"

    return (
        <section id="portfolio" className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-white">
                        <span className="text-customPurple">#</span>
                        portfólio
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-gray-400 text-justify">
                    Projetos concluídos e detalhes sobre cada sistema
                </p>
            </div>

            <div className="mt-10 flex justify-center items-center w-full">
                <Swiper
                    modules={[Navigation, EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    slidesPerView={1}
                    initialSlide={1}
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev",
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            loopAdditionalSlides: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                            loopAdditionalSlides: 1,
                        },
                    }}
                    loop={true}
                    className="relative w-full max-w-[1500px]"
                >
                    {
                        projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="border-2 border-gray-400 cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={`Foto do projeto - ${project.title}`}
                                        width={300}
                                        height={100}
                                        className="border-b-2 border-gray-400 w-full h-full md:h-[320px] object-cover"
                                    />

                                    <div className="px-5 py-3 flex flex-wrap gap-3 bg-customGray">
                                        {
                                            project.tags.map((tag, index) => (
                                                <div
                                                    key={index}
                                                    className="transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-white bg-customPurple bg-opacity-30 w-fit px-2 p-1 rounded-full font-medium hover:shadow-md hover:shadow-gray-500 hover:bg-opacity-60 cursor-pointer text-sm"
                                                >
                                                    <span>
                                                        {tag}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="border-t-2 border-gray-400 p-5 bg-customGray flex flex-col gap-5">
                                        <div className="flex gap-3">
                                            <div className="text-customPurple text-2xl">
                                                {project.icon}
                                            </div>
                                            <h1 className="text-white font-semibold text-xl">
                                                {project.title}
                                            </h1>
                                        </div>

                                        <div className="flex gap-3">
                                            {
                                                project.linkDeploy !== "" && (
                                                    <Link href={project.linkDeploy} target="_black" className="px-3 py-2 border border-customPurple text-white font-semibold flex items-center gap-3 text-lg hover:bg-customPurple hover:bg-opacity-30 group">
                                                        Live
                                                        <RiShareBoxFill className="transition-all duration-300 group-hover:-translate-y-1" />
                                                    </Link>
                                                )
                                            }

                                            <Link href={project.linkGithub} target="_black" className="px-3 py-2 border border-customPurple text-white font-semibold flex items-center gap-3 text-lg hover:bg-customPurple hover:bg-opacity-30 group">
                                                GitHub
                                                <FaGithub className="transition-all duration-300 group-hover:-translate-y-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <div className={`prev ${navSwiperButtonClass} left-10`}>
                        <IoIosArrowBack />
                    </div>

                    <div className={`next ${navSwiperButtonClass} right-0`}>
                        <IoIosArrowForward />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}