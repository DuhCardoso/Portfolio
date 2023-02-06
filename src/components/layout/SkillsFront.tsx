import SkillsItens from "./SkillsItens";


export default function SkillsFront(){
    return(
        <div id="FrontEnd" className="
            text-center w-[80%] m-auto rounded-3xl p-8
            border-[1px] border-blue-1000 bg-blue-1000
            transition duration-300 min-h-[450px]
            hover:bg-transparent
            lg:w-[500px] lg:h-[100%]
        ">
            <h3 className="
                mb-12 font-bold text-xl text-sky-400
            ">
                Front-end tech's
            </h3>
            <ul className="
                grid grid-cols-2 text-start m-auto w-[70%] gap-y-5 
            ">
                <SkillsItens stack="HTML5" level="Experiente"/>
                <SkillsItens stack="CSS3" level="Experiente"/>
                <SkillsItens stack="JavaScript" level="Avançado"/>
                <SkillsItens stack="React" level="Avançado"/>
                <SkillsItens stack="Tailwindcss" level="Avançado"/>
                <SkillsItens stack="TypeScript" level="Basico"/>
                <SkillsItens stack="Styled-Components" level="Estudando"/>
            </ul>
        </div>
    )
}