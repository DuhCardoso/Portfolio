import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Navbar(){
    return(
        <>
        <nav className="
            flex items-center justify-between p-6 
            fixed top-0 left-0 w-full z-[10] 
            bg-gradient-to-b from-[#000000] via-[#000000c4] to-transparent
        ">
            <h2 className=" text-2xl font-bold grow">DuhC</h2> 
            
            <div className=" flex justify-between items-center grow max-w-lg">
                <ul className="flex h-[45%] justify-between text-base font-medium items-center gap-4">
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 

                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-2px] after:relative hover:after:w-[105%]
                    ">
                        <a href="/">Home</a>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-2px] after:relative hover:after:w-[105%]
                    ">
                        <a href="/">Sobre Mim</a>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-2px] after:relative hover:after:w-[105%]
                    ">
                        <a href="/">Tecnologias</a>
                    </li>
                    <li className="
                        transition opacity duration-300
                        opacity-70 hover:opacity-100 
                        
                        after:transform after:duration-300
                        after:content-[''] after:bg-slate-50 after:w-0 after:h-[2px] after:block after:bottom-[-2px] after:left-[-2px] after:relative hover:after:w-[105%]
                    ">
                        <a href="/">Contato</a>
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
        </>
    )
}