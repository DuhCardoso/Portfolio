import SkillsBack from "../layout/SkillsBack";
import SkillsFront from "../layout/SkillsFront";

export default function Skills(){
    return(
        <div id="Skill" className="
            py-[5rem] mx-[-5.52%] px-[5%] 
        ">
            <h2 className="
                text-3xl font-bold w-max text-blue-50 mb-12
                
                after:content-[''] after:bg-sky-500 after:w-[45%] after:h-[4px] after:rounded-lg after:block after:-bottom-[6px] after:left-[-2px] after:relative after:ml-1
            ">
                Conhecimentos
            </h2>
            

            <div className="
                grid grid-cols-1 lg:grid-cols-2 gap-8
            ">
                <SkillsFront />
                <SkillsBack />
            </div>
            

        </div>
    )
}