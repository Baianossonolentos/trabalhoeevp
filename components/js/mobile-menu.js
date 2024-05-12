
const animarmenumobilefunctiononclick = document.querySelectorAll('.animarmenumobilefunctiononclick');
const btn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-mobile');
const menuon = 'menu-mobile-ativo';
const btnon = 'botao-x';
const colowitemenuativo = 'colowitemenuativo'
const linha = document.querySelectorAll('.linha');
const icontemu = document.getElementById('icon-temu')
const icontemumenubranco = 'icontemumenubranco'
const overlay = document.querySelector('.overlay')

//funcão responsavel pela mudança do botao do menu no cabeçalho e a ativacao do menu mobile
animarmenumobilefunctiononclick.forEach(botao => {

    
    


    botao.addEventListener("click", () => {
        if (btn.id === btnon) {
            btn.removeAttribute('id');
            menu.removeAttribute('id');
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        
            

        } else {
            btn.id = btnon;
            menu.id = menuon;
             overlay.style.display = 'block';
             document.body.style.overflow = 'hidden';
             

             

           
            
          
        }


    });
});


function toggleOverflow() {
    document.body.classList.toggle('overflow-hidden');
}

const menuButton = document.getElementById('');
menuButton.addEventListener('click', function() {
    toggleOverflow();
});






const barrasemScrollcolor = document.querySelectorAll('.itens-menu-desktop')
const barrasemScrollmenuamburgue = document.querySelectorAll('.linha')
const barrasemScrollbackgroud = document.querySelector('.cabecalho-geral')
const barraComScrollbackground = 'menucomscroll'
const barraComScrollcolor = 'barracomScrollcolor'
const barracomScrollmenuamburgue = 'barracomScrollmenuamburgue'

let menuActiveScroll = window.scrollY

/*funçao responsavel por colocar a barra marron do cabeçalho quando acontece o scroll no site
 e mudar a cor dos icones do cabeçalho para branco quando o site estiver scrollado */
// window.addEventListener("scroll", () => {

//     menuActiveScroll = window.scrollY;

//     if (menuActiveScroll > 10) {
//         barrasemScrollmenuamburgue.forEach(barrasemScrollmenuamburgue => {
//             barrasemScrollmenuamburgue.id = barracomScrollmenuamburgue
//         })

//         barrasemScrollcolor.forEach(barrasemScrollcolor => {
//             barrasemScrollcolor.id = barraComScrollcolor
//         })

//         barrasemScrollbackgroud.id = barraComScrollbackground
//         // botaoMudaTema.style.color = '#fff'

     


//     }

//     else {

//         barrasemScrollbackgroud.id = ''
//         botaoMudaTema.style.color = ''

//         barrasemScrollcolor.forEach(barrasemScrollcolor => {
//             barrasemScrollcolor.id = ''
//         })

//         barrasemScrollmenuamburgue.forEach(barrasemScrollmenuamburgue => {
//             barrasemScrollmenuamburgue.id = ' '
//         })



//     }

// })

