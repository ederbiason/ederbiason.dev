import Image from "next/image";
import Developer from "../../public/images/developer.png"
import { HiOutlineDownload } from "react-icons/hi";

export function About() {
    const careerInfo = [
        {
            value: "1 ano",
            text: "de experiência na área"
        },
        {
            value: "50+",
            text: "repositórios no GitHub"
        },
        {
            value: "01",
            text: "empresa trabalhada"
        }
    ]

    return (
        <section
            id="about"
            className="mt-20 md:mt-32"
        >
            <div className="flex items-center gap-5">
                <h1 className="font-medium text-4xl text-white">
                    <span className="text-customPurple">#</span>
                    sobre mim
                </h1>

                <div className="h-[2px] w-24 md:w-72 bg-customPurple"></div>
            </div>

            <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
                <div className="flex-1 md:max-w-[50%] text-justify flex flex-col gap-5 text-gray-400 mt-8 lg:mt-0">
                    <p>
                        Sou <span className="text-customPurple">desenvolvedor frontend</span> com experiência na criação de sites modernos, integração com backends e bancos de dados não relacionais. Gosto de explorar o <span className="text-customPurple">desenvolvimento backend, mobile</span> e soluções em nuvem. Estudo <span className="text-customPurple">Engenharia de Software</span> na UniFil e busco sempre aprimorar minhas habilidades.
                    </p>
                    <p>
                        Gosto de combinar <span className="text-customPurple">tecnologia</span> e <span className="text-customPurple">criatividade</span> para construir soluções eficientes que resolvam problemas do dia a dia. Acredito na importância de <span className="text-customPurple">aprender continuamente</span> e colaborar com equipes para entregar <span className="text-customPurple">produtos de qualidade</span>.
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
                        <div key={index} className="flex flex-col items-center justify-center gap-1 border p-3 border-gray-400 hover:bg-gray-400 hover:bg-opacity-20">
                            <p className="text-2xl font-bold text-white">
                                {info.value}
                            </p>

                            <p className="text-center text-gray-400">
                                {info.text}
                            </p>
                        </div>
                    ))
                }
                <a 
                    className="mt-11 text-white font-semibold p-4 flex items-center gap-2 group border border-customPurple bg-opacity-40 bg-customPurple hover:bg-opacity-20 col-span-3 cursor-pointer"
                    href="/pdf/Currículo Eder H Biason.pdf"
                    download
                >
                    Baixar currículo
                    <HiOutlineDownload size={20} className="transition-all duration-300 group-hover:translate-y-1" />
                </a>
            </div>
        </section>
    )
}
