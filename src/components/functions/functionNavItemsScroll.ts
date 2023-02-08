

export default function activateNavItens(section:HTMLElement): void{

    const targetLine = scrollY + innerHeight /2
        //o calculo feito nela é a soma da altura do scroll + a altura da Viwerport, esse valor dividido pela meta (/2), cria uma linha imaginaria no centro da viwerport
    
    const sectionTop = section.offsetTop;
        // Pega a altura em que começa a section
    const sectionHeight = section.offsetHeight ;
        // Pega a altura completa da section
    const sectionEnd = sectionTop + sectionHeight;
        // Soma o a altura de inicio e a total da section para definir onde ela termina


    const sectionTopReachOrPassedTargetLine = targetLine>=sectionTop;
        // Fica analisando enquanto a targetline for menor ou igual ao topo da section
    const sectionEndPassedTargetLine = targetLine>=sectionEnd;
        // Fica analisando enquanto a targetline for menor ou igual ao final da section



    const menuElement:HTMLElement = 
    document.querySelector(`#Menu div ul #nav${section.getAttribute('id')}`) as HTMLElement;
        // Busca o id do elemente da nav que contem o destino para adicionar e retirar as classes 

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine 
        // Analisa enquanto a targetline tiver passado do topo da section e enquanto NÃO estiver passado do final da section

    
    menuElement.classList.remove('activeNav')
    menuElement.classList.add('desableNav')

    if(sectionBoundaries){
        menuElement.classList.remove('desableNav')
        menuElement.classList.add('activeNav')

    }
}