//---------------- criando o conteudo do teamMembers 
const sliderBtn = document.querySelectorAll('.btnSlider');
const slideContainer = document.getElementById('dynamicContent')
const members = {
    1: {
        name: 'Alexsandro Rosa Junior',
        role: 'Co-Founder / Desenvolvedor',
        imgSrc: 'src/images/avatar.png',
        description: 'Nossa abordagem é centrada no cliente. Trabalhamos em estreita colaboração para garantir que cada solução desenvolvida esteja alinhada com os objetivos de negócio e gere valor real.'
    },
    2: {
        name: 'Maria Silva',
        role: 'Gerente de Projetos',
        imgSrc: 'src/images/avatar-2.png',
        description: 'Maria é responsável por garantir que cada etapa do desenvolvimento seja concluída dentro dos prazos e com a qualidade esperada, sempre focando nas necessidades do cliente.'
    },
    3: {
        name: 'João Pereira',
        role: 'Designer UX/UI',
        imgSrc: 'src/images/avatar-3.png',
        description: 'Especialista em criar interfaces que garantem uma experiência fluida e eficiente para o usuário. Trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis.'
    }
};

function renderMemberContent(memberId) {
    const member = members[memberId];
    return `
        <div class="member">
            <div class="memberDetails">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
            <div class="photo"><img src="${member.imgSrc}" alt="Foto de ${member.name}"></div>
        </div>
        <p class="membersText">${member.description}</p>
    `;
}

function handleButtonClick(event) {
    sliderBtn.forEach(button => {
        button.classList.remove('selected');
    })
    event.target.classList.add('selected');

    const memberId = event.target.getAttribute('id')
    slideContainer.innerHTML = renderMemberContent(memberId);
}

sliderBtn.forEach(button => { //botão do slide
    button.addEventListener('click', handleButtonClick);
})