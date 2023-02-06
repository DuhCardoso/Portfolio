import { IconType } from "react-icons/lib"

type buttonTypes={
    link: String
    text: String
    icon?: any
}

export default function Button({link, text, icon}:buttonTypes){
    return(
        <a href={`${link}`} target="_blank" className="
            text-none flex gap-2 w-max items-center border rounded-xl
            px-3 py-1 

            hover:border-sky-600 hover:bg-sky-200 hover:text-slate-900 
            transition-all duration-300
        ">
            {icon} {text}
        </a>
    )
}