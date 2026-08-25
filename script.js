/**
 * Alterna a expansão dos cards de aprendizado ao clicar.
 */
function toggleCard(cardElement) {
    const isActive = cardElement.classList.contains('active');
    
    // Fecha todos os cards abertos para manter uma navegação limpa
    document.querySelectorAll('.card').forEach(c => {
        c.classList.remove('active');
        const actionText = c.querySelector('.action-text');
        if (actionText) actionText.textContent = 'mais';
    });

    // Se o card clicado não estava ativo, abre ele
    if (!isActive) {
        cardElement.classList.add('active');
        const actionText = cardElement.querySelector('.action-text');
        if (actionText) actionText.textContent = 'menos';
    }
}

/**
 * Base de dados dos insights para o Simulador Iterativo
 */
const insightsData = {
    all: {
        title: "Visão Geral das Descobertas",
        description: "A sessão de teste demonstrou que, embora a proposta de valor principal do aplicativo tenha sido altamente validada, melhorias estruturais na interface gráfica (UI) são essenciais para reduzir o tempo até o primeiro clique útil."
    },
    ux: {
        title: "Aprendizado 1: UX & Arquitetura de Informação",
        description: "<strong>Observação:</strong> O usuário demorou para encontrar o botão principal.<br><strong>Solução:</strong> Aumentar o contraste do botão de ação primária e adicionar suporte visual com um pequeno onboarding guiado na primeira execução."
    },
    feature: {
        title: "Aprendizado 2: Relevância de Funcionalidades",
        description: "<strong>Observação:</strong> O painel de resumo capturou atenção imediata e positiva.<br><strong>Solução:</strong> Mover o resumo para a área de topo e permitir a exportação rápida de dados diretamente dessa tela."
    }
};

/**
 * Filtra e exibe o conteúdo no Simulador de Feedback
 */
function filterInsight(category) {
    // Atualiza estados dos botões
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Identifica o botão clicado
    event.target.classList.add('active');

    // Atualiza a tela de exibição
    const displayContent = document.getElementById('displayContent');
    const data = insightsData[category];

    if (data) {
        displayContent.innerHTML = `
            <div class="display-item">
                <h4><i class="fa-solid fa-lightbulb"></i> ${data.title}</h4>
                <p>${data.description}</p>
            </div>
        `;
    }
}
