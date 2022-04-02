const listaProjetos = document.querySelectorAll('.projeto')

listaProjetos.forEach(projeto =>{
    projeto.addEventListener('click', () => {
        const idProjeto = projeto.attributes.id.value
        if (idProjeto === "spotify"){
            window.open('https://github.com/ryanzin10/replica-spotify/', '_blank');
        }

        else if (idProjeto === "netflix"){
            window.open('https://github.com/ryanzin10/replica-netflix', '_blank');
        }

        else if (idProjeto === "jokenpo2"){
            window.open('https://github.com/ryanzin10/jokenpo-2', '_blank');
        }

        else if (idProjeto === "pokedex"){
            window.open('https://github.com/ryanzin10/Pokedex', '_blank');
        }
    })
})

class MobileNavbar{
    constructor(topoDireita2, topoDireita, navLinks){
        this.topoDireita2 = document.querySelector(topoDireita2);
        this.topoDireita = document.querySelector(topoDireita);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'ativo';

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link)=>{
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }
    handleClick(){
        this.topoDireita.classList.toggle(this.activeClass);
        this.topoDireita2.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.topoDireita2.addEventListener("click", this.handleClick)
    };

    init(){
        if(this.topoDireita2){
            this.addClickEvent();
        }
       return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".topoDireita2",
    ".topoDireita",
    ".topoDireita a"
);
mobileNavbar.init();


const listaRedes = document.querySelectorAll('.rede')

listaRedes.forEach(contato =>{
    contato.addEventListener('click', () => {
        const idContato = contato.attributes.id.value
        if (idContato === "github"){
            window.open('https://github.com/ryanzin10/', '_blank');
        }

        else if (idContato === "linkedin"){
            window.open('https://www.linkedin.com/in/ryanzin10/', '_blank');
        }

        else if (idContato === "insta"){
            window.open('https://www.instagram.com/ryanzin10/', '_blank');
        }

    })
})