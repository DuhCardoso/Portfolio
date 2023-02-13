type techTagTypes = {
    text: String
    Key: React.Key
}

export default function ProjectsTechTag({ text, Key }: techTagTypes) {
    return (
        <li key={Key} className="
            bg-sky-500 w-max px-[.375rem] py-[.125rem] text-sm font-bold rounded-lg 
        ">
            {text}
        </li>
    )
}