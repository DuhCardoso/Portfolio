type navbarItemsType = {
    href: String
    text: String
    idItem: String
    mobileOnChaing?: any | null
}

export default function NavbarItems({ href, text, idItem, mobileOnChaing }: navbarItemsType) {


    return (
        <>
            {mobileOnChaing ? (
                <li id={`${idItem}`} onClick={() => mobileOnChaing(false)} className="
                    transition opacity duration-300 opacity-90
                    lg:opacity-70 hover:opacity-100 
                    desableNav activeNav
                ">
                    <a href={`${href}`}>{text}</a>
                </li>
            ) : (
                <li id={`${idItem}`} className="
                    transition opacity duration-300
                    opacity-70 hover:opacity-100 
                    desableNav activeNav
                ">
                    <a href={`${href}`}>{text}</a>
                </li>
            )

            }
        </>

    )
}