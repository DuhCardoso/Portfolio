import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Navbar(){
    return(
        <nav className="flex items-center justify-between my-5 px-6 mr-6">
            <h1 className=" text-2xl font-bold grow">DuhC</h1> 
            
            <div className=" flex justify-between items-center grow max-w-lg">
                <ul className="flex h-[45%] justify-between text-base font-medium items-center gap-4">
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 

                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-1px] after:relative hover:after:w-[110%]
                    ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-1px] after:relative hover:after:w-[110%]
                    ">
                        <Link to="/">Tecnologias</Link>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-1px] after:relative hover:after:w-[110%]
                    ">
                        <Link to="/">Sobre</Link>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-1px] after:relative hover:after:w-[110%]
                    ">
                        <Link to="/">Contato</Link>
                    </li>
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
    )
}