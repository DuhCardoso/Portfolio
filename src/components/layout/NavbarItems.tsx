import { Dispatch, SetStateAction } from "react"

type navbarItemsType={
    href: String
    text: String
    idItem: String
}

export default function NavbarItems({ href, text, idItem}: navbarItemsType){
    
    
    return(
        
        <li id={`${idItem}`}  className="
            transition opacity duration-300
            opacity-70 hover:opacity-100 
            desableNav activeNav
        ">
            <a href={`${href}`}>{text}</a>
        </li>
    )
}