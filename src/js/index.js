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
                                    <div class="photo"><img src="src/images/avatar.png" alt="foto do alexsandro"></div>
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
                                    <div class="photo"><img src="src/images/avatar-2.png" alt="foto do alexsandro"></div>
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
                                    <div class="photo"><img src="src/images/avatar-3.png" alt="foto do alexsandro"></div>
                               </div>
                                <p class="membersText">Especialista em criar interfaces que garantem uma experiência fluida e eficiente para o usuário. trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis.</p>
                             `
            break;
        default:
            break;
    }

    slideContainer.innerHTML = memberContent;
}

sliderBtn.forEach(button => { //botão do slide
    button.addEventListener('click', handleButtonClick);

})

//--------------- função para os links do menu
document.querySelectorAll('.menuList a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        // Obtém o ID da seção 
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center' 
            });
        }
    });
});

//--------------------- formulario / modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//abre o modal
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação dos campos
    const name = document.getElementById('name').value.trim(); // retira os espaços vazios da string
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    if (name === "") {
        showError('name', 'Por favor, insira seu nome.');
        isValid = false;
    } else {
        removeError('name');
    }

    if (email === "") {
        showError('email', 'Por favor, insira seu e-mail.');
        isValid = false;
    } else {
        removeError('email');
    }

    if (message === "") {
        showError('message', 'Por favor, insira sua mensagem.');
        isValid = false;
    } else {
        removeError('message');
    }

    if (isValid) {
        openModal();
        resetInputs();
    }

});


function resetInputs(){
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
    
}

function openModal() {
    overlay.classList.add('show')
    modal.classList.add('show')

    
    setTimeout(() => {  // Define a opacidade para 1 após um breve atraso para a transição de opacidade ocorrer
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
    }, 10);
}

//fecha o modal
function closeModal() {
    overlay.style.opacity = '0';
    modal.style.opacity = '0';

    setTimeout(() => {
        overlay.classList.remove('show');
        modal.classList.remove('show');
    }, 500); 
}

//fecha o modal clicando no X
document.getElementById('closeModal').addEventListener('click', function() {
    closeModal()
});


//fecha o modal clicando fora dele---
document.addEventListener("click", function(event){
    if (overlay.contains(event.target)) { //se o clique for no overlay executa a função closeModal
        closeModal()
    }
})

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (!error || !error.classList.contains('error')) {
        error = document.createElement('div');
        error.className = 'error';
        field.parentNode.insertBefore(error, field.nextSibling);
    }
    error.textContent = message;
}

function removeError(fieldId) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (error && error.classList.contains('error')) {
        error.remove();
    }
}
