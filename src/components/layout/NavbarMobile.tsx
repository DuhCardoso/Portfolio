import { SetStateAction, useState } from "react"
import {TfiClose} from "react-icons/tfi"
import {SlMenu} from "react-icons/sl"
import NavbarContentList from "./NavbarContentList"

export default function NavbarMobile(){
    const [menuOpen, setMenuOpen]=useState(false)

    const menuExpandedOpen=(set:SetStateAction<boolean>)=>{
        function menuExpanded(stateValue:Boolean){
            const body = document.querySelector("body") as HTMLElement
            if(stateValue === false){
                body.classList.add("overflow-hidden")                
            }else{
                body.classList.remove("overflow-hidden")
            }
        }

        menuExpanded(menuOpen)
        setMenuOpen(set) 
    }
    return(
        <>
            {menuOpen ? (
                <NavbarMobileOpenMenu onChaing={menuExpandedOpen}/>
                ):(
                <button onClick={()=>menuExpandedOpen(true)} className="
                    w-max text-2xl 
                ">
                    <SlMenu/>
                </button>
            )}
        </>
        
    )
}

type NavbarMobileOpenMenuType={
    onChaing: any
}
function NavbarMobileOpenMenu({onChaing}:NavbarMobileOpenMenuType){   
    
    return(
        <span id="MobileMenuOpen" className="
            fixed w-screen h-screen bg-sky-700
            top-0 left-0  
        ">
            <h2 className="absolute top-6 left-[5%] text-2xl font-bold  md:grow ">
                <a href="#Home">DuhC</a>
            </h2> 

            <button onClick={()=>onChaing(false)} className="
                absolute w-max text-2xl right-[5%] top-6
            ">
                <TfiClose/>
            </button>
            <div className="
                flex flex-col justify-between items-center
                py-[20%] h-screen
            ">
                <NavbarContentList mobileOnChaing={onChaing}/>
            </div>
        </span>
        
    )
}