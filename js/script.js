function mudarPagina(idPaginaClicada, elementoClicado) {
    // 1. Pega todas as seções e garante que elas formem uma lista (Array)
    const secoes = Array.from(document.querySelectorAll('.secao-pagina'));
    
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    // 2. Mostra apenas a seção que tem o ID que foi clicado
    document.getElementById(idPaginaClicada).style.display = 'block';

    // 3. Remove a classe 'active' de todos os botões do menu
    const botoes = Array.from(document.querySelectorAll('.nav-btn'));
    
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // 4. Adiciona a classe 'active' no botão que você acabou de clicar
    elementoClicado.classList.add('active');

    document.body.setAttribute('data-pagina', idPaginaClicada);
}

// ==========================================
// ENVIO DO FORMULÁRIO COM TOAST NOTIFICATION
// ==========================================
const formulario = document.getElementById('meu-formulario');
const toast = document.getElementById('toast-notificacao');

// Função auxiliar para mostrar o Toast
function mostrarToast(mensagem, tipo) {
    toast.innerText = mensagem;
    
    // Remove classes antigas para não dar conflito
    toast.classList.remove('sucesso', 'erro', 'show');
    
    // Adiciona a cor certa (sucesso ou erro) e a classe que faz deslizar para a tela
    toast.classList.add(tipo);
    // Um pequeno atraso para o CSS renderizar antes de animar
    setTimeout(() => { toast.classList.add('show'); }, 10);

    // Esconde o Toast automaticamente após 4 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

if (formulario) {
    formulario.addEventListener('submit', async function(e) {
        e.preventDefault(); // Impede o recarregamento

        const botao = formulario.querySelector('.btn-enviar');
        const textoOriginal = botao.innerHTML;
        botao.innerHTML = 'Enviando... ⏳';
        botao.disabled = true;

        try {
            const response = await fetch(formulario.action, {
                method: formulario.method,
                body: new FormData(formulario),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // SUCESSO
                mostrarToast('✅ Mensagem enviada com sucesso!', 'sucesso');
                formulario.reset(); // Limpa os campos
            } else {
                // ERRO DO SERVIDOR
                mostrarToast('❌ Ops! Ocorreu um problema ao enviar.', 'erro');
            }
        } catch (error) {
            // ERRO DE CONEXÃO
            mostrarToast('❌ Erro de conexão. Tente novamente.', 'erro');
        }

        // Restaura o botão
        botao.innerHTML = textoOriginal;
        botao.disabled = false;
    });
}