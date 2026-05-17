
export async function carregarSidebar() {
    try {
        // Busca o arquivo HTML comum da barra lateral
        // O caminho usa "../../" porque assume que está sendo chamado pelas pastas dentro de "pages/"
        const resposta = await fetch('../../shared/components/sidebar.html');
        const htmlSidebar = await resposta.text();
        
        // Injeta o conteúdo na div de gancho da página
        const container = document.getElementById('sidebar-container');
        if (container) {
            container.innerHTML = htmlSidebar;
            
            // Logo após colar o HTML, roda as configurações do menu e do usuário
            marcarMenuAtivo();
            configurarUsuarioLogado();
        }
    } catch (erro) {
        console.error("Erro ao carregar a barra lateral compartilhada:", erro);
    }
}

/**
 * Destaca em rosa neon o botão do menu correspondente à página atual
 */
function marcarMenuAtivo() {
    const path = window.location.pathname;
    
    // Captura os botões que foram injetados
    const btnHome = document.getElementById('menu-home');
    const btnGames = document.getElementById('menu-games');

    if (path.includes('games') && btnGames) {
        btnGames.classList.add('ativo');
    } else if (btnHome) {
        btnHome.classList.add('ativo');
    }
}

/**
 * Puxa as informações do usuário e injeta no cabeçalho da sidebar
 */
function configurarUsuarioLogado() {
    const elementoNome = document.getElementById('nome-usuario');
    
    if (elementoNome) {
        // Exemplo
        const usuarioLogado = {
            nome: "Alice Fernandes",
            jogosRegistrados: 0
        };

        elementoNome.textContent = usuarioLogado.nome;
    }
}