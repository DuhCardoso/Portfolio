import activateNavItens from "./functionNavItemsScroll"

window.addEventListener("scroll", onScrollFunctions)

export default function onScrollFunctions(){    
    // Sera passado para um useEffet no component "App.tsx"
    if(window.innerWidth >= 1024){
        activateNavItens(document.getElementById("Home") as HTMLElement)
        activateNavItens(document.getElementById("Aboult") as HTMLElement)
        activateNavItens(document.getElementById("Skill") as HTMLElement)
        activateNavItens(document.getElementById("Project") as HTMLElement)
        activateNavItens(document.getElementById("Contact") as HTMLElement)
    }

}