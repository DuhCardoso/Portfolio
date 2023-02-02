import AboultList from "../layout/AboultList";

export default function Aboult(){
    return(
        <div id="Aboult" className="bg-blue-1000 py-[5rem]  mx-[-5.52%] px-[5%] " >
            <h2 className="
                text-3xl font-bold w-max mb-12 text-blue-50
                
                after:content-[''] after:bg-sky-500 after:w-[45%] after:h-[4px] after:rounded-lg after:block after:-bottom-[6px] after:left-[-2px] after:relative after:ml-1
            ">
                Sobre Mim
            </h2>

            <p className="
                opacity-90 mb-7
            ">
                Eu sou Eduardo Cardoso, também conhecido como Naomeli. Sou desenvolvedor web, sou muito dedicado a minha área de atuação. Atualmente estou em dedicando a melhor meus conhecimentos de Front & Back-end com muito empenho e paixão.
            </p>

            <div id="AboultProfile">
                

                <h3 className="
                    font-semibold text-xl mb-2
                ">
                    Web Developer.
                </h3>

                <p className="
                    opacity-90 mb-12 
                ">
                    Como uma pessoa motivada e ambiciosa, tenho vontade de sempre alcançar o melhor e aumentar meus conhecimentos. Sendo comunicativo e buscando o melhor relacionamento com meu colegar, sou capaz de trabalhar como parte de uma equipe e também de forma independente.
                </p>

                <div className="
                    flex mb-12 justify-center gap-5 
                    lg:gap-16 lg:justify-start
                ">
                    <img src="/aboultProfile.png" className="
                        w-[200px] rounded-lg   object-contain
                    "/>

                    <AboultList />
                </div>

                <p className="
                    opacity-90 mb-6
                ">
                    Minha experiência e habilidades me tornam um ativo valioso em qualquer organização e estou ansioso para assumir novos desafios e responsabilidades. Quer esteja lidando com problemas complexos, desenvolvendo soluções inovadoras ou colaborando com outras pessoas para atingir um objetivo comum, sempre me esforço para oferecer resultados excepcionais.
                </p>
            </div>
        </div>
    )
}