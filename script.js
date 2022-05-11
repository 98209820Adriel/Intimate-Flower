function menuMobile(){
    let nav = document.querySelector('.nav-mobile');
    let menu = document.querySelector('#menu');

    if(menu.classList.contains('menu-mobile')){
        nav.style.display = 'flex';
        menu.classList.add('faseTwo');
        menu.classList.remove('menu-mobile');
    }
    else if(menu.classList.contains('faseTwo')){
        nav.style.display = 'none';
        menu.classList.remove('faseTwo');
        menu.classList.add('menu-mobile');
    }

}
    



