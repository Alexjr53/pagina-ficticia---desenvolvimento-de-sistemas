const menuToggle = document.querySelector(".menuToggle");
const menuMobile = document.querySelector(".menuList");
const menuLink = document.querySelectorAll('.menuList li')
const menuIcon = document.querySelector('.menuImage');
const arrowBtn = document.querySelector('.arrowBtn')
const body = document.body;
let menuOpen = false;

const toggleMenu = () => {
    menuOpen = !menuOpen;
    menuIcon.src = menuOpen ? 'src/images/fechar.png' : 'src/images/menu.png';
    body.classList.toggle('no-scroll', menuOpen);
    menuMobile.classList.toggle('show', menuOpen);
}

menuToggle.addEventListener("click", toggleMenu)

const closeMenu = () => {
    if (menuOpen) {
        toggleMenu()
    }
}

//--------------- função para os links do menu
menuLink.forEach(function (curLink) {
    curLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = curLink.querySelector('a').getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            closeMenu()
        }
    })
})

//fecha o menu mobile ao clicar na seta
arrowBtn.addEventListener('click', () =>{
    closeMenu() 
})

//fecha o menu mobile se a janela for redimensionada
window.addEventListener('resize', function() {
    closeMenu()    
});
