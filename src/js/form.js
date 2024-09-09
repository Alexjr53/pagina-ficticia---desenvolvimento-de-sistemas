//--------------------- formulario / modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação dos campos
    const name = document.getElementById('name').value.trim();
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
