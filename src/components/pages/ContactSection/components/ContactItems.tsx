type ContactItemsType={
    text: String
    href: String
    icon: any 
    oneClassName?: String
}

export default function ContactItems({text, href, icon, oneClassName}:ContactItemsType){
    return(
        <a href={`${href}`} target="_blank" className={`
            w-[22.7rem] pr-4
            bg-blue-1000  rounded-xl 
            flex justify-start items-center gap-4
            hoverContactBorderSon
            ${oneClassName}
        `}>
            <div className="
                text-2xl p-4 text-slate-50 bg-bgcolor-dark rounded-xl 
                border-[0.125rem] border-blue-1000 
                transition-all duration-300
            ">
                {icon}
            </div>
            <h4 className="text-lg font-semibold mb-1 mx-auto">{text}</h4>
        </a>
    )
}
