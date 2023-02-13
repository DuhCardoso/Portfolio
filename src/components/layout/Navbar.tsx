import { useEffect, useState } from "react";

import NavbarContentList from "./NavbarContentList";
import NavbarMobile from "./NavbarMobile";
import NavLogo from "./Logo";



export default function Navbar() {
    const [widthBiggerThen, setWidthBiggerThen] = useState(false)
    useEffect(() => {
        window.addEventListener("load", () => {
            if (window.innerWidth >= 1024) {
                setWidthBiggerThen(true)
            } else {
                setWidthBiggerThen(false)
            }
        })
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                setWidthBiggerThen(true)
            } else {
                setWidthBiggerThen(false)
            }
        })
    })

    return (
        <nav id="Menu" className="
            flex items-center justify-between py-6 px-[5%]
            fixed top-0 left-0 w-screen z-[10] 
            bg-gradient-to-b from-[#000000] via-[#000000c4] to-transparent
        ">
            <NavLogo />

            <div className=" 
                flex justify-end items-center  w-max
                lg:max-w-xl lg:justify-between lg:grow
            ">
                {widthBiggerThen ? (
                    <NavbarContentList />
                ) : (
                    <NavbarMobile />
                )}
            </div>
        </nav>
    )
}


