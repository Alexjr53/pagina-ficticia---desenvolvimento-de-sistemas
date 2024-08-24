
//fazer o slide
// decidir se deixar o header fixado ou não
// fazer os links levarem ate a section atraves do js
// melhorar o formulario e colocar logica
// trocar os textos lorem
// fazer o mapa
//testar no celular



//--------------- menu mobile
const menuToggle = document.querySelector(".menuToggle");
const menuMobile = document.querySelector(".menuList");
const menuImage = document.querySelector('.menuImage');
const body = document.body;

//primeiro adiciona/remove a classe para depois alterar o display para block/none. permite a animação 
menuToggle.addEventListener("click", function(event){
      if (menuMobile.classList.contains('show')) {
        menuImage.src = 'src/images/menu.png'

        menuMobile.classList.remove('show');
        setTimeout(() => {
            menuMobile.style.display = 'none'; // Oculta após a animação
            body.classList.remove('no-scroll'); // Habilita a rolagem
          }, 800)
      }else{

        menuImage.src = 'src/images/fechar.png' //altera o icone do menu para um x
        menuMobile.style.display = 'flex';
        setTimeout(() => {
            menuMobile.classList.add('show');
            body.classList.add('no-scroll'); // Habilita a rolagem
        }, 10); // Pequeno delay para permitir a animação
      }
})




/* <div class="membersContainer">
    <div class="member">
        <div class="memberDetails">
            <h3>Maria Silva</h3>
            <p>Gerente de Projetos</p>
        </div>
        <div class="image"><img src="" alt=""></div>
    </div>
    <p class="membersText">Com vasta experiência em gestão de projetos, Maria é responsável por garantir que cada etapa do desenvolvimento seja concluída dentro dos prazos e com a qualidade esperada, sempre focando nas necessidades do cliente.</p>
    <div class="slide">
        <span class="selected"></span>
        <span></span>
        <span></span>
    </div>
</div> 

<div class="membersContainer">
    <div class="member">
        <div class="memberDetails">
            <h3>João Pereira</h3>
            <p>Designer UX/UI</p>
        </div>
        <div class="image"><img src="" alt=""></div>
    </div>
    <p class="membersText">João é especialista em criar interfaces intuitivas e agradáveis, garantindo que a experiência do usuário seja sempre fluida e eficiente. Ele trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis.</p>
    <div class="slide">
        <span class="selected"></span>
        <span></span>
        <span></span>
    </div>
</div>


*/
