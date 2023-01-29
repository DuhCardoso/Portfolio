import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Navbar(){
    return(
        <nav>
            <p>DuhC</p> 
            <ul className="flex gap-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Tecnologias</Link>
                </li>
                <li>
                    <Link to="/">Sobre</Link>
                </li>
                <li>
                    <Link to="/">Contato</Link>
                </li>
            </ul>

            <div>
                <ul>
                    <li><a><BsGithub/></a></li>
                    <li><a><BsLinkedin/></a></li>
                    <li><a><BsGithub/></a></li>
                </ul>
            </div>
        </nav>
    )
}