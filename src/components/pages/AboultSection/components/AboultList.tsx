import AboultInfo from "./AboultInfo";

export default function AboultList(){
    return(
        <ul className="
            flex flex-col gap-3 mt-[3%]
        ">
            <AboultInfo
                title="Aniversario"
                text="28 Mar 2004"
            />
            <AboultInfo 
                title="Idade"
                text="19 anos"
            />
            <AboultInfo 
                title="Cidade"
                text="Jeremoabo, Bahia, Brasil"
            />
            <AboultInfo 
                title="Trabalho atual"
                text="-"
            />
            <AboultInfo 
                title="Idiomas"
                text="Português (nativo), inglês (básico/intermediário)"
            />
        </ul>
    )
}