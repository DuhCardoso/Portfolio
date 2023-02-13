import ProjectsCards from "./components/ProjectsCards";


export default function Projects(){
    return(
        <div id="Project" className="
            bg-blue-1000 py-[5rem]  px-[5%] 
            
        ">
            <h2 className="
                text-3xl font-bold w-max mb-12 text-blue-50 text-center
                
                after:content-[''] after:bg-sky-500 after:w-[45%] after:h-[4px] after:rounded-lg after:block after:-bottom-[6px] after:left-[-2px] after:relative after:ml-1
            ">
                Projetos
            </h2>

            <div className="
                flex gap-4 flex-wrap items-center justify-center
                md:grid md:grid-cols-2 md:gap-4 md:justify-items-center md:w-[85%] md:m-auto
                lg:grid lg:grid-cols-3 lg:gap-4 lg:w-[90%]
            ">
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/CardProduct" 
                    srcImg="/CardProduct.png" 
                    techs={["React.js", "TailwindCSS"]}
                    text="
                        O card de um sofá, que pode ser visto de todos os seus ângulos. Feito com Vite e a dependência Tailwindcss para a estilização da aplicação.
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/RocketPlayer" 
                    srcImg="/RocketPlayer.png" 
                    techs={["React.js", "TailwindCSS"]}
                    text="
                        Projeto para simular o Font-end de um reprodutor de música do Spotify.
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/RocketPay" 
                    srcImg="/RocketPay.png" 
                    techs={["HTML", "CSS", "iMask", "Node"]}
                    text="
                        O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/RocketCoffee" 
                    srcImg="/RocketCoffee.png" 
                    techs={["HTML", "CSS"]}
                    text="
                        Menu virtual de uma cafeteria.
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/Leitor-de-Destino" 
                    srcImg="/LeitorDeDistino.png" 
                    techs={["HTML", "CSS", "JavaScript"]}
                    text="
                        Faça uma pergunta e descubra o seu destino! Gerada de um array de frases e passado por meio da DOM. 
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/Lista-de-chamada" 
                    srcImg="/ListaDeChamada.png" 
                    techs={["React.js", "CSS"]}
                    text="
                        Uma aplicação que envia um nome e salva o horário em que o nome foi enviado, criando um componente na tela, assim criando uma lista.
                    "
                />
                <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/DoctorCary" 
                    srcImg="/DoctorCary.png" 
                    techs={["HTML", "CSS", "JavaScript"]}
                    text="
                        NLW Return - Rocketseat
                    "
                />
                {/* <ProjectsCards 
                    reposSrc="https://api.github.com/repos/DuhCardoso/RocketPay" 
                    srcImg="" 
                    techs={["React.js", "TailwindCSS"]}
                    text="
                        Test
                    "
                /> */}
            </div>
        </div>
    )
}