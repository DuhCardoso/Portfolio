

export default function Home(){
    return (
        <div id="Home" className="text-center pt-[40%] h-screen
        ">
            <span className="
                absolute z-[-1] left-0 top-0 w-[100%] 
                
            ">
                <img src="/bgHome.gif"  alt="Fundo noturno com diversos monitores" 
                className="
                    w-[100%] h-screen brightness-[.8]
                    lg:m-auto lg:w-[1137px] 
                "/>
            </span>

            <div id="home" className="z-[1] text-2xl font-semibold ">
                <h1 className="uppercase text-sky-500 text-5xl font-bold stroke-slate-50">Eduardo Cardoso</h1>
                <h2>sou Desenvolvedor Front-end</h2>
            </div>
        </div>
)
}