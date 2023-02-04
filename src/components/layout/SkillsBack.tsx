import SkillsItens from "./SkillsItens";


export default function SkillsBack(){
    return(
        <div id="FrontEnd" className="
            text-center w-[80%] m-auto rounded-3xl p-8
            border-[1px] border-blue-1000 bg-blue-1000
            transition duration-300
            hover:bg-transparent
            lg:w-[500px] min-h-[450px]
        ">
            <h3 className="
                mb-12 font-bold text-xl text-sky-400
            ">
                Back-end Tech's
            </h3>
            <ul className="
                grid grid-cols-2 text-start m-auto w-[70%] gap-y-5 
            ">
                <SkillsItens stack="SQLite" level="Intermediário"/>
                <SkillsItens stack="Node.JS" level="Intermediário"/>
                <SkillsItens stack="MySQL" level="Basico"/>
                <SkillsItens stack="Prisma" level="Basico"/>
                <SkillsItens stack="Elixir" level="Interesse"/>
            </ul>
        </div>
    )
}