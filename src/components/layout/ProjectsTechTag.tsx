type techTagTypes={
    text: String
    Key: React.Key
}

export default function ProjectsTechTag({text, Key}:techTagTypes){
    return(
        <li key={Key} className="
            bg-sky-500 w-max px-1 text-sm font-semibold rounded-md 
        ">
            {text}
        </li>
    )
}