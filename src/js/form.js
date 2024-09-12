//--------------------- formulario / modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('contactForm');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validação dos campos
    let isValid = validateFields();

    if (isValid) {
        openModal();
        form.reset()
    }

});

function validateFields(){
    let isValid = true;
    if (userName.value.trim() === "") {
        showError('name', 'Por favor, insira seu nome.');
        isValid = false;
    } else {
        removeError('name');
    }

    if (email.value.trim() === "") {
        showError('email', 'Por favor, insira seu e-mail.');
        isValid = false;
    } else {
        removeError('email');
    }

    if (message.value.trim() === "") {
        showError('message', 'Por favor, insira sua mensagem.');
        isValid = false;
    } else {
        removeError('message');
    }
    return isValid
}

function openModal() {
    overlay.classList.add('show')
    modal.classList.add('show')

    setTimeout(() => {  // Define a opacidade para 1 após um breve atraso para a transição de opacidade ocorrer
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
    }, 10);
}

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
    if (overlay.contains(event.target)) {
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
