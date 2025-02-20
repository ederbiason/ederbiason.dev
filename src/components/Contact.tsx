"use client"

import Image from "next/image"
import contactImage from '/public/images/contact.png'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { ReactNode } from "react"
import Link from "next/link"
import { BiSend } from "react-icons/bi"
import { useTranslation } from "react-i18next"

interface ContactInfoProps {
    icon?: ReactNode
    field: string
    value: string
}

export function Contact() {
    const { t } = useTranslation()

    const contact = t("contact.contactInfos", { returnObjects: true }) as ContactInfoProps[]

    const contactInfos: ContactInfoProps[] = [
        { icon: <FaPhoneAlt />, field: contact[0].field, value: contact[0].value },
        { icon: <FaEnvelope />, field: contact[1].field, value: contact[1].value },
        { icon: <FaLocationDot />, field: contact[2].field, value: contact[2].value }
    ]

    return (
        <section id="contact" className="mt-12 md:mt-24">
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-5">
                    <h1 className="font-medium text-4xl text-titleColor">
                        <span className="text-customPurple">#</span>
                        {t("contact.title")}
                    </h1>

                    <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
                </div>

                <p className="text-textColor text-justify">
                    {t("contact.subtitle")}
                </p>
            </div>

            <div className="flex items-center justify-center">
                <div className="border border-textColor mt-8 p-10 flex flex-col md:flex-row items-center gap-20 bg-gray-400 bg-opacity-20">
                    <div className="flex flex-col gap-8">
                        {
                            contactInfos.map((info, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <div className="text-customPurple text-4xl">
                                        {info.icon}
                                    </div>

                                    <div className="flex flex-col items-start text-titleColor">
                                        <span className="font-bold text-lg">
                                            {info.field}
                                        </span>
                                        <span className="">
                                            {info.value}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }

                        <Link
                            href="mailto:ederbiason.eh@hotmail.com"
                            className="mt-3 flex w-fit gap-2 p-5 text-titleColor text-lg bg-customPurple bg-opacity-75 items-center font-bold group hover:bg-opacity-60"
                        >
                            {t("contact.contactButton")}
                            <BiSend size={24} className="transition-all duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <Image
                        src={contactImage}
                        alt="Foto de um rapaz de blusa no computador acenando Hello"
                    />
                </div>
            </div>
        </section>
    )
}