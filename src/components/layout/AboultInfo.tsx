import {RiArrowRightSLine} from "react-icons/ri";

type AboultInfoTypes={
    title: String,
    text: String
}


export default function AboultInfo({title, text}:AboultInfoTypes){
    return(
        <li className="
            flex flex-start gap-2 justify-items-center items-center 
        ">
            <div className="
                flex gap-2 justify-items-center items-center
            ">
                <RiArrowRightSLine className="fill-sky-500" />
                <h4 className="
                    font-semibold text-base
                ">
                    {title}:
                </h4>
            </div>
            <p className="
                opacity-90
            ">
                {text}
            </p>
        </li>
    )
}