import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import NavbarItems from "./NavbarItems";



export default function Navbar(){     

    return(
        <>
        <nav id="Menu" className="
            flex items-center justify-between p-6 
            fixed top-0 left-0 w-full z-[10] 
            bg-gradient-to-b from-[#000000] via-[#000000c4] to-transparent
            lg:px-[5%]
        ">
            <h2 className=" text-2xl font-bold grow">
                <a href="#Home">NML</a>
            </h2> 
            
            <div className=" 
                flex justify-between items-center grow max-w-xl
            ">
                <ul className="
                    flex h-[45%] justify-between text-base font-medium items-center gap-4
                ">
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
                </ul>

                <ul className="flex gap-3 text-xl bottom-3 py-2 ">
                    <li className="transition-opacity opacity-70 hover:opacity-100"
                    >
                        <a href="#" target="_blank"><BsGithub/></a>
                    </li>
                    <li className="transition-opacity opacity-70 hover:opacity-100"
                    >
                        <a href="#" target="_blank"><BsLinkedin/></a>
                    </li>
                    <li className="transition-opacity opacity-70 hover:opacity-100"
                    >
                        <a href="#" target="_blank"><BsWhatsapp/></a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}


