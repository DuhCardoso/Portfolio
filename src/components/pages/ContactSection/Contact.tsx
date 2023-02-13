import { useEffect, useState } from "react";
import {AiOutlineMail} from "react-icons/ai" 
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import ContactItems from "./components/ContactItems";


export default function Contact(){
    const [widthBiggerThen, setWidthBiggerThen]= useState(false)
    useEffect(()=>{
        window.addEventListener("load",()=>{
            if(window.innerWidth>=768){
                setWidthBiggerThen(true)
            }else{
                setWidthBiggerThen(false)
            }
        })
        window.addEventListener("resize",()=>{
            if(window.innerWidth>=768){
                setWidthBiggerThen(true)
            }else{
                setWidthBiggerThen(false)
            }
        })    
    })
    return(
        <div id="Contact" className="
            py-[5rem]  px-[5%] h-screen 
        ">
            <h2 className="
                text-3xl font-bold w-max text-blue-50 mb-12
                
                after:content-[''] after:bg-sky-500 after:w-[45%] after:h-[0.25rem] after:rounded-lg after:block after:-bottom-[0.375rem] after:-left-[0.125rem] after:relative after:ml-1
            ">
                Contatos
            </h2>
            <div className="
                w-max mx-auto mt-[15%]
                
                md:grid md:grid-cols-2
                lg:mt-[10%]
            ">
                { widthBiggerThen && <img src="/chat.svg" className="h-max my-auto"/>
                }
                <div className="
                    flex flex-col gap-4 
                ">
                    <ContactItems 
                        text="DuhCardoso.contato@gmail.com" 
                        icon={<AiOutlineMail/>} 
                        href="#Contact" 
                        oneClassName="cursor-default"
                    />
                    <ContactItems 
                        text="linkedin.com/in/DuhCardoso" 
                        icon={<BsLinkedin/>} 
                        href="https://www.linkedin.com/in/DuhCardoso/" 
                    />
                    <ContactItems 
                        text="+55 (12) 99649-8270" 
                        icon={<BsWhatsapp/>} 
                        href="https://wa.me/5512996498270" 
                    />
                </div>
            </div>
        </div>
    )
}
