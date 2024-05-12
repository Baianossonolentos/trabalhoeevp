//biblioteca usada  'scrollreveal'



window.revealonce = ScrollReveal({ reset: false})




revealonce.reveal('.efeito-animation01', {
    duration: 3000,
    distance: '90px',
    rotate: {
        x: 200,
        y: 0,
        z: 0
    }

})

revealonce.reveal('.efeito-animation02', {
    duration: 3000,
    distance: '90px',
    delay: 500,
})

revealonce.reveal('.efeito-animation03', {
    duration: 3500,
    distance: '100px',
    delay: 100,

})

revealonce.reveal('.efeito-animation05', {
    duration: 1500,
    distance: '30px',
    
    delay: 900,
    origin: 'right'

})

revealonce.reveal('.efeito-animation06', {
    duration: 4500,
    distance: '30px',
   
    delay: 1000,
    origin: 'left'

})
