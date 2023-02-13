

export default function DisableNavSocialLinks(){
    const contact= document.getElementById("Contact") as HTMLElement
    const navSocialLinks= document.querySelector("#Menu div #NavSocialLinks") as HTMLElement
    const targetLine = scrollY + innerHeight /2

    navSocialLinks.classList.add("flex")
    navSocialLinks.classList.remove("hidden")
    
    if(targetLine >= contact.offsetTop){
        navSocialLinks.classList.add("hidden")
        navSocialLinks.classList.remove("flex")
}
}