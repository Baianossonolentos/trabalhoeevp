
const idBody = document.body;
const modoDark = 'dark-mod'
const botaoMudaTema = document.getElementById('icon-temu')
const lua = 'bi-moon-fill'
const sol = 'bi-brightness-low-fill'

// const logowindowsblack = '/components/img/LOGO\ BRANCO.png'
// const logowindowslight = '/components/img/LOGO-WINDOWS-PRETO.png'
const trocaimagemlogo = document.getElementById('troca-imagem-logo')

const Backgroundimagetemablack = "url('/components/img/ZIGUEZAGUE\ DO\ PRETO.png')"
const trocarBackgroundimagetemalight = "url('/components/img/ZIGUEZAGUE\ DO\ BRACO.png')"
const containerbackgroundimage = document.querySelectorAll('.conteudo-pagina-background-image')





//funçao que ativa o modo dark, alem disso troca o icone do tema quando o tema é mudado
const modoDarkAtivado = () => {
    botaoMudaTema.classList.remove(lua)
    botaoMudaTema.classList.add(sol);

    containerbackgroundimage.forEach(containerbackgroundimage => {
        containerbackgroundimage.style.backgroundImage = ''
        containerbackgroundimage.style.backgroundImage = Backgroundimagetemablack
    })

    // trocaimagemlogo.src = ''
    // trocaimagemlogo.src = logowindowsblack

}

//funçao que ativa o modo light, alem disso troca o icone do tema quando o tema é mudado
const modoLightAtivado = () => {
    botaoMudaTema.classList.remove(sol)
    botaoMudaTema.classList.add(lua)

    containerbackgroundimage.forEach(containerbackgroundimage => {
        containerbackgroundimage.style.backgroundImage = ''
        containerbackgroundimage.style.backgroundImage = trocarBackgroundimagetemalight
    })

    // trocaimagemlogo.src = ''
    // trocaimagemlogo.src = logowindowslight

}


//função responsavel por chamar a funçao do tema e salvar o tema escolhido no localstorage
//localstorage é um lugar onde é armazenado dados em chave valor no navegador do cliente
botaoMudaTema.addEventListener('click', () => {

    idBody.classList.toggle(modoDark)

    if (idBody.classList.contains(modoDark)) {

        modoDarkAtivado() 
        localStorage.setItem('tema', 'dark') 
    }

    else {
        modoLightAtivado()
        localStorage.setItem('tema', 'light')
    }

})


//funçao responsavel por analisar qual tema a pagina estava antes de ser carregada, usando o localstorage
window.onload = () => { 

    const tema = localStorage.getItem('tema');

    if (tema === 'dark') {
        idBody.classList.add(modoDark) 
        modoDarkAtivado()
    }

    else {
        modoLightAtivado() 
    }

}
