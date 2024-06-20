document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        window.location.href = 'Pedidos enviados.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const newInvestmentBtn = document.getElementById('newInvestmentBtn');
    newInvestmentBtn.addEventListener('click', () => {
        window.location.href = 'envio.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cadastreSeLink = document.getElementById('cadastreSeLink');
    cadastreSeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'cadastro.html'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cadastreSeLink = document.getElementById('Enviar');
    cadastreSeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'login.html';
    });
});


