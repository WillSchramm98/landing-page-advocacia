// Menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de contato (validação simples)
const formContato = document.getElementById('form-contato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validações básicas
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const telefone = document.getElementById('telefone');
        const mensagem = document.getElementById('mensagem');
        
        let isValid = true;
        let errorMessage = '';
        
        if (!nome.value.trim()) {
            errorMessage += '• Preencha seu nome\n';
            nome.style.borderColor = 'red';
            isValid = false;
        } else {
            nome.style.borderColor = '#ddd';
        }
        
        if (!email.value.trim() || !email.value.includes('@')) {
            errorMessage += '• Preencha um e-mail válido\n';
            email.style.borderColor = 'red';
            isValid = false;
        } else {
            email.style.borderColor = '#ddd';
        }
        
        if (!telefone.value.trim()) {
            errorMessage += '• Preencha seu telefone\n';
            telefone.style.borderColor = 'red';
            isValid = false;
        } else {
            telefone.style.borderColor = '#ddd';
        }
        
        if (!mensagem.value.trim()) {
            errorMessage += '• Escreva sua mensagem\n';
            mensagem.style.borderColor = 'red';
            isValid = false;
        } else {
            mensagem.style.borderColor = '#ddd';
        }
        
        if (isValid) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            formContato.reset();
        } else {
            alert('Por favor, corrija os seguintes erros:\n' + errorMessage);
        }
    });
}

// Máscara de telefone
const telefoneInput = document.getElementById('telefone');
if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 2) {
            value = `(${value.slice(0,2)}) ${value.slice(2)}`;
        }
        if (value.length > 10) {
            value = `${value.slice(0,10)}-${value.slice(10)}`;
        }
        
        e.target.value = value;
    });
}

// Menu ativo conforme a seção visível
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});