import { Typewriter } from "react-simple-typewriter"
import { HiOutlineArrowDown } from "react-icons/hi"
import { useEffect } from "react"

export default function Home() {
    function hiddenArrowAnimation() {
        const arrowAnimation = document.getElementById('arrowAnimation') as HTMLElement
        if (window.scrollY > 200) {
            arrowAnimation.classList.add("hidden")
        } else {
            arrowAnimation.classList.remove("hidden")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", hiddenArrowAnimation)
    })
    return (
        <div id="Home" className="text-center pt-[40vh] h-screen
        ">
            <div id="home" className="z-[1] text-xl font-semibold min-[560px]:text-2xl">
                <h1 className="
                    uppercase w-max m-auto mb-3 text-slate-50 text-4xl font-bold stroke-slate-50 min-[560px]:text-5xl 
                    underline decoration-sky-500 underline-offset-[.75rem] decoration-3 

                ">
                    <Typewriter
                        words={["Eduardo Cardoso"]}
                        cursor
                        cursorBlinking
                        typeSpeed={200}

                    />
                </h1>

                <h2>sou Desenvolvedor Front-end</h2>
            </div>
            <div id="arrowAnimation" className="
                 text-5xl mx-auto w-max relative top-[35%]
            ">
                <HiOutlineArrowDown className="animate-opacityArrow " />
            </div>
        </div>
    )
}

/* 
    <span className="
        absolute z-[-1] left-0 top-0 w-[100%] 
        
    ">
        <img src="/bgHome.gif"  alt="Fundo noturno com diversos monitores" 
        className="
            w-[100%] h-screen brightness-[.8]
        "/>
    </span> 
*/