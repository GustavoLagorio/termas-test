const homeCarrousel = document.querySelector('.home_carrousel_list');
let position = 0

function moverCarrousel() {
    if (position < 4) {
        position++;
        let mover = position*20;         
        homeCarrousel.style.transform = `translateX(-${mover}%)`;              
    }
    else {
        homeCarrousel.style.transform = `translateX(0%)`;
        position = 0;        
    }
}

setInterval(moverCarrousel, 2000);