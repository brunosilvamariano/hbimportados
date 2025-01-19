document.querySelectorAll('a[href^="#"], .btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Seleciona o destino a partir do atributo href
        const target = document.querySelector(this.getAttribute('href'));

        // Ajuste para a rolagem suave
        window.scrollTo({
            top: target.offsetTop - 70, // Ajusta a posição com o offset do cabeçalho
            behavior: 'smooth'
        });
        
        // Para esconder o menu após clicar (caso tenha um menu de navegação)
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('#navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
});
