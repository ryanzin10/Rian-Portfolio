const listaProjetos = document.querySelectorAll('.projeto')

listaProjetos.forEach(projeto =>{
    projeto.addEventListener('click', () => {
        const idProjeto = projeto.attributes.id.value
        if (idProjeto === "spotify"){
            window.open('https://ryanzin10.github.io/Replica-Spotify/', '_blank');
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
