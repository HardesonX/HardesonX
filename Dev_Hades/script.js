document.addEventListener('DOMContentLoaded', function () {
    // Obtenha o elemento select
    var selectElement = document.getElementById('selecao');

    // Adicione um ouvinte de evento para mudanças no select
    selectElement.addEventListener('change', function () {
        // Obtenha o valor da opção selecionada
        var selectedOption = selectElement.value;

        // Oculte todos os overlays
        var overlays = document.querySelectorAll('.overlay');
        overlays.forEach(function (overlay) {
            overlay.style.display = 'none';
        });

        // Mostre o overlay correspondente à opção selecionada
        var overlaySelecionado = document.getElementById(selectedOption);
        if (overlaySelecionado) {
            overlaySelecionado.style.display = 'flex';
        }
    });
});

// Função para fechar o modal
function fecharModal(id) {
    var overlay = document.getElementById(id);
    if (overlay) {
        overlay.style.display = 'none';
    }
}