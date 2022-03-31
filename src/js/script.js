const listaOpcoes = document.querySelectorAll('.opcoes')

listaOpcoes.forEach(opcoes =>{
    opcoes.addEventListener('click', () => {
        const idOpcaoSelecionada = opcoes.attributes.id.value
        const opcaoAtiva = document.querySelector('.ativo')
        opcaoAtiva.classList.remove('ativo')

        //adicionar a classe ativo no item selecionado da lista
        let cartaoOpcaoParaAtivar = document.getElementById(idOpcaoSelecionada)
        cartaoOpcaoParaAtivar.classList.add('ativo')        

    })
})
