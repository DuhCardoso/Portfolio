import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";


export default function Footer(){
    return(
        <footer className="
            bg-blue-1000 h-40 text-center
            flex flex-col justify-center items-center 
        ">
            <ul className="flex gap-4 justify-center text-2xl py-2 mb-4">
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://github.com/DuhCardoso" target="_blank"><BsGithub/></a>
                </li>
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://www.twitter.com/Naomeligo" target="_blank"><BsTwitter/></a>
                </li>
                <li className="transition-opacity opacity-90 lg:opacity-70 hover:opacity-100"
                >
                    <a href="https://www.instagram.com/Naomeligo" target="_blank"><BsInstagram/></a>
                </li>
            </ul>
            <h5 className="
                text-lg
                transition-opacity opacity-80 hover:opacity-100
            ">
                Criado por <strong>DuhCardoso</strong> - 2023 ©
            </h5>
        </footer>
    )
}