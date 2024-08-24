
// fazer os links levarem ate a section atraves do js
// melhorar o formulario e colocar logica
//testar no celular



//--------------- menu mobile
const menuToggle = document.querySelector(".menuToggle");
const menuMobile = document.querySelector(".menuList");
const menuImage = document.querySelector('.menuImage');
const body = document.body;

//primeiro adiciona/remove a classe para depois alterar o display para block/none. permite a animação 
menuToggle.addEventListener("click", function (event) {
    if (menuMobile.classList.contains('show')) {
        menuImage.src = 'src/images/menu.png'

        menuMobile.classList.remove('show');
        setTimeout(() => {
            menuMobile.style.display = 'none'; // Oculta após a animação
            body.classList.remove('no-scroll'); // Habilita a rolagem
        }, 800)
    } else {

        menuImage.src = 'src/images/fechar.png' //altera o icone do menu para um x
        menuMobile.style.display = 'flex';
        setTimeout(() => {
            menuMobile.classList.add('show');
            body.classList.add('no-scroll'); // Habilita a rolagem
        }, 10); // Pequeno delay para permitir a animação
    }
})

//---------------- criando o conteudo do teamMembers 
const sliderBtn = document.querySelectorAll('.btnSlider');
const slideContainer = document.getElementById('dynamicContent')

function handleButtonClick(event) {

    sliderBtn.forEach(button => {
        button.classList.remove('selected');
    })
    event.target.classList.add('selected');

    const memberId = event.target.getAttribute('id')
    let memberContent = ''

    switch (memberId) { // switch que determina qual informação ira aparecer no dinamic content
        case "1":
            memberContent = `
                                <div class="member">
                                   <div class="memberDetails">
                                      <h3>Alexsandro Rosa Junior</h3>
                                        <p>Co-Founder / Desenvolvedor</p>
                                    </div>
                                    <div class="image"><img src="src/images/avatar.png" alt="foto do alexsandro"></div>
                               </div>
                                <p class="membersText">Nossa abordagem é centrada no cliente. Trabalhamos em estreita colaboração para garantir que cada solução desenvolvida esteja alinhada com os objetivos de negócio e gere valor real.</p>
                             `
            break;

        case "2":
            memberContent = `
                                <div class="member">
                                   <div class="memberDetails">
                                      <h3>Maria Silva</h3>
                                        <p>Gerente de Projetos</p>
                                    </div>
                                    <div class="image"><img src="src/images/avatar-2.png" alt="foto do alexsandro"></div>
                               </div>
                                <p class="membersText">Maria é responsável por garantir que cada etapa do desenvolvimento seja concluída dentro dos prazos e com a qualidade esperada, sempre focando nas necessidades do cliente.</p>
                             `
            break;

        case "3":
            memberContent = `
                                <div class="member">
                                   <div class="memberDetails">
                                      <h3>João Pereira</h3>
                                        <p>Designer UX/UI</p>
                                    </div>
                                    <div class="image"><img src="src/images/avatar-3.png" alt="foto do alexsandro"></div>
                               </div>
                                <p class="membersText">Especialista em criar interfaces que garantem uma experiência fluida e eficiente para o usuário. trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis.</p>
                             `
            break;
        default:
            break;
    }

    slideContainer.innerHTML = memberContent;
}

sliderBtn.forEach(button => {
    button.addEventListener('click', handleButtonClick);

})


