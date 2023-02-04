import {RiArrowRightSLine} from "react-icons/ri";

type SkillsItensType={
    stack:String,
    level:String
}

export default function SkillsItens({stack, level}:SkillsItensType){
    return (
        <li className="
            w-max flex items-start gap-1 mb-6
        ">
            <RiArrowRightSLine className="
                fill-sky-500 text-xl mt-[.19rem]
            "/>
            <div className="

            ">
                <h4 className="font-medium text-base ">{stack}</h4>
                <p className="text-sky-300 text-sm font-medium">{level}</p>
            </div>
        </li>
    )
}