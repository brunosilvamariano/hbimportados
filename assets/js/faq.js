// Seleciona todos os botões "Ver Mais" na página
const verMaisBtns = document.querySelectorAll('.ver-mais-btn');

verMaisBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // Encontra a seção correspondente ao botão clicado
        const section = this.closest('section');
        
        // Encontra os cards ocultos dentro dessa seção
        const hiddenCards = section.querySelector('.hidden-cards');
        
        if (hiddenCards) {
            // Exibe os cards ocultos
            hiddenCards.style.display = 'flex'; // Ou 'block', dependendo do layout
        }
        
        // Esconde o botão "Ver Mais" e mostra o botão "Ver Menos"
        this.style.display = 'none';
        section.querySelector('.ver-menos-btn').style.display = 'inline-block'; // Exibe o botão "Ver Menos"
    });
});

// Seleciona todos os botões "Ver Menos"
const verMenosBtns = document.querySelectorAll('.ver-menos-btn');

verMenosBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // Encontra a seção correspondente ao botão clicado
        const section = this.closest('section');
        
        // Encontra os cards ocultos dentro dessa seção
        const hiddenCards = section.querySelector('.hidden-cards');
        
        if (hiddenCards) {
            // Oculta os cards adicionais
            hiddenCards.style.display = 'none';
        }
        
        // Esconde o botão "Ver Menos" e mostra o botão "Ver Mais"
        this.style.display = 'none';
        section.querySelector('.ver-mais-btn').style.display = 'inline-block'; // Exibe o botão "Ver Mais"
    });
});
