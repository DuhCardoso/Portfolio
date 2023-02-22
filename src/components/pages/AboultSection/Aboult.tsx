import { BsLink45Deg } from "react-icons/bs";
import AboultList from "./components/AboultList";

export default function Aboult() {
    return (
        <div id="Aboult" className="bg-blue-1000 py-[5rem] px-[5%] " >
            <h2 className="
                text-3xl font-bold w-max mb-12 text-blue-50
                
                after:content-[''] after:bg-sky-500 after:w-[45%] after:h-[4px] after:rounded-lg after:block after:-bottom-[6px] after:left-[-2px] after:relative after:ml-1
            ">
                Sobre Mim
            </h2>

            <p className="
                opacity-90 mb-7 w-[95%] mx-auto lg:w-[64rem]
            ">
                Eu sou Eduardo Cardoso, também conhecido como DuhCardoso. Sou desenvolvedor web, sou muito dedicado a minha área de atuação. Atualmente estou em dedicando a melhor meus conhecimentos de Front &  Back-end com muito empenho e paixão.
            </p>

            <div id="AboultProfile">


                <h3 className="
                    font-semibold text-xl mb-2 w-[90%] mx-auto lg:w-[60rem] underline 
                ">
                   <a href="/CV-Eduardo_Cardoso.pdf" target="_blank" className="flex items-center" ><BsLink45Deg /> Web Developer. </a>
                </h3>

                <p className="
                    opacity-90 mb-12 w-[90%] mx-auto lg:w-[60rem]
                ">
                    Como uma pessoa motivada e ambiciosa, tenho vontade de sempre alcançar o melhor e aumentar meus conhecimentos. Sendo comunicativo e buscando o melhor relacionamento com meu colegar, sou capaz de trabalhar como parte de uma equipe e também de forma independente.
                </p>

                <div className="
                    flex flex-col mb-12 w-[90%] mx-auto
                    sm:flex-row sm:gap-5 
                    sm:justify-center
                    lg:gap-16 lg:w-[60rem]
                ">
                    <img src="/aboultProfile.png" className="
                        w-[200px] rounded-lg   object-contain 
                    " alt=""/>

                    <AboultList />
                </div>

                <p className="
                    opacity-90 mb-6 w-[90%] mx-auto lg:w-[60rem]
                ">
                    Minha experiência e habilidades me tornam um ativo valioso em qualquer organização e estou ansioso para assumir novos desafios e responsabilidades. Quer esteja lidando com problemas complexos, desenvolvendo soluções inovadoras ou colaborando com outras pessoas para atingir um objetivo comum, sempre me esforço para oferecer resultados excepcionais.
                </p>
            </div>
        </div>
    )
}