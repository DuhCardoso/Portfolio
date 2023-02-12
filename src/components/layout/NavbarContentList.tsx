import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import NavbarItems from "./NavbarItems";

type navbarContentListType={
    mobileOnChaing?:any|null
}
export default function NavbarContentList({mobileOnChaing}:navbarContentListType){
    return(
        <>
            <ul className="
                flex flex-col h-[45%] justify-between text-2xl w-screen font-medium items-center gap-8 
                md:flex-row lg:text-base lg:gap-4 md:w-max
            ">
                {mobileOnChaing ? (
                    <>
                        <NavbarItems 
                        idItem="navHome"
                        href="#Home"
                        text="Home"
                        mobileOnChaing={mobileOnChaing}
                        />
                        <NavbarItems
                            idItem="navAboult"
                            href="#Aboult" 
                            text="Sobre Mim"
                            mobileOnChaing={mobileOnChaing}
                        />
                        <NavbarItems 
                            idItem="navSkill"
                            href="#Skill" 
                            text="Conhecimentos"
                            mobileOnChaing={mobileOnChaing}
                        />
                        <NavbarItems 
                            idItem="navProject"
                            href="#Project" 
                            text="Projetos"
                            mobileOnChaing={mobileOnChaing}
                        />
                        <NavbarItems 
                            idItem="navContact"
                            href="#Contact" 
                            text="Contato"
                            mobileOnChaing={mobileOnChaing}
                        />
                    </>
                    ):(
                    <>
                        <NavbarItems 
                        idItem="navHome"
                        href="#Home"
                        text="Home"
                        />
                        <NavbarItems
                            idItem="navAboult"
                            href="#Aboult" 
                            text="Sobre Mim"
                        />
                        <NavbarItems 
                            idItem="navSkill"
                            href="#Skill" 
                            text="Conhecimentos"
                        />
                        <NavbarItems 
                            idItem="navProject"
                            href="#Project" 
                            text="Projetos"
                        />
                        <NavbarItems 
                            idItem="navContact"
                            href="#Contact" 
                            text="Contato"
                        />
                    </>
                    )
                }
            </ul>

            <ul className="flex gap-8 text-3xl bottom-3 py-2 lg:text-xl lg:gap-3">
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://github.com/DuhCardoso" target="_blank"><BsGithub/></a>
                </li>
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://www.linkedin.com/in/DuhCardoso/" target="_blank"><BsLinkedin/></a>
                </li>
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://wa.me/5512996498270" target="_blank"><BsWhatsapp/></a>
                </li>
            </ul>
        </>
    )
}