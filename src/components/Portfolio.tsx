"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import { FaBriefcaseMedical, FaGithub, FaPoop, FaShoppingCart, FaUser, FaVideo } from "react-icons/fa"
import Image from "next/image"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Link from "next/link"
import { RiShareBoxFill } from "react-icons/ri"
import { useTranslation } from "react-i18next"

interface Project {
    title: string
    image: string
    linkGithub: string
    linkDeploy: string
    tags: string[]
    modal: {
      title: string
      description: string
      details: string[]
    }
  }

export function Portfolio() {
    const navSwiperButtonClass = "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl z-10 text-titleColor text-opacity-70 flex items-center justify-between w-fit bg-customPurple p-1 bg-opacity-80 transition-all duration-300 hover:scale-125 hover:bg-opacity-100 rounded-lg cursor-pointer hover:text-opacity-100"

    const { t } = useTranslation()

    const projects = t("portfolio.projects", { returnObjects: true }) as Project[]
    const projectIcons = [<FaPoop />, <FaShoppingCart />, <FaBriefcaseMedical />, <FaUser />, <FaVideo />]

    return (
        <section id="portfolio" className="mt-12 md:mt-32">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-titleColor">
                        <span className="text-customPurple">#</span>
                        {t("portfolio.title")}
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-textColor text-justify">
                    {t("portfolio.subtitle")}
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
                                <div className="border-2 border-textColor cursor-pointer">
                                    <Image
                                        src={project.image}
                                        alt={`Foto do projeto - ${project.title}`}
                                        width={300}
                                        height={100}
                                        className="border-b-2 border-textColor w-full h-full md:max-h-[270px] 2xl:min-h-[380px] object-cover"
                                    />

                                    <div className="px-5 py-3 flex flex-wrap gap-3 bg-background">
                                        {
                                            project.tags.map((tag, index) => (
                                                <div
                                                    key={`${tag}-${index}`}
                                                    className="transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 text-titleColor bg-customPurple bg-opacity-30 w-fit px-2 p-1 rounded-full font-medium hover:shadow-md hover:shadow-gray-500 hover:bg-opacity-60 cursor-pointer text-sm"
                                                >
                                                    <span>
                                                        {tag}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="border-t-2 border-textColor p-5 bg-background flex flex-col gap-5">
                                        <div className="flex gap-3">
                                            <div className="text-customPurple text-2xl">
                                                {projectIcons[index % projectIcons.length]}
                                            </div>
                                            <h1 className="text-titleColor font-semibold text-xl">
                                                {project.title}
                                            </h1>
                                        </div>

                                        <div className="flex gap-3">
                                            {
                                                project.linkDeploy !== "" && (
                                                    <Link href={project.linkDeploy} target="_black" className="px-3 py-2 border border-customPurple text-titleColor font-semibold flex items-center gap-3 text-lg hover:bg-customPurple hover:bg-opacity-30 group">
                                                        Live
                                                        <RiShareBoxFill className="transition-all duration-300 group-hover:-translate-y-1" />
                                                    </Link>
                                                )
                                            }

                                            <Link href={project.linkGithub} target="_black" className="px-3 py-2 border border-customPurple text-titleColor font-semibold flex items-center gap-3 text-lg hover:bg-customPurple hover:bg-opacity-30 group">
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