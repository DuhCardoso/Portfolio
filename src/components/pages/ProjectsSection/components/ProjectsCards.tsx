import { useEffect, useState } from "react"
import { BsGithub, BsLink45Deg } from "react-icons/bs"

import Button from "../../../layout/Button"
import ProjectsTechTag from "./ProjectsTechTag"

type projectsLinkTypes = {
    reposSrc: String,
    srcImg: String,
    text: String,
    techs: String[]
}
type reposInfoType = {
    name: String,
    html_url: String
    homepage: String
}


export default function ProjectsCards({ reposSrc, srcImg, text, techs }: projectsLinkTypes) {


    const [reposInfo, setReposInfo] = useState<reposInfoType>({} as reposInfoType)

    useEffect(() => {
        const startFetch = async () => {
            const response = await fetch(`${reposSrc}`)
            const data = await response.json() as reposInfoType
            setReposInfo({
                name: data.name,
                html_url: data.html_url,
                homepage: data.homepage
            })
        }
        startFetch()
    }, [])

    return (

        <span className="
        bg-bgcolor-dark rounded-xl
            ">
            <div className="
            py-8 px-4 w-[17.5rem] min-h-[28.125rem] 

            lg:opacity-70 lg:hover:opacity-100
            transition-all duration-300 
        ">

                <h2 className="
                    text-lg text-center font-bold mb-8 text-blue-50 
                    
                ">
                    {reposInfo.name}
                </h2>

                <img src={`${srcImg}`} alt="" className="
                    h-40 text-center mb-5 mx-auto rounded-md
                "/>

                <ul id="techList" className="
                    flex gap-1 flex-wrap mb-5 w-[90%] mx-auto items-center justify-center
                ">
                    {techs.map((tech: String, index: React.Key) => {
                        return <ProjectsTechTag Key={index} text={`${tech}`} />
                    })
                    }
                </ul>

                <div className="
                    flex  flex-col justify-between h-48
                ">
                    <p>
                        {text}
                    </p>

                    <div className="
                        flex justify-between
                    ">
                        <Button
                            link={`${reposInfo.html_url}`}
                            text=" Repositorio"
                            icon={<BsGithub />}
                        />
                        <Button
                            link={`${reposInfo.homepage}`}
                            text=" Demo"
                            icon={<BsLink45Deg />}
                        />
                    </div>
                </div>
            </div>
        </span>

    )
}