// ERP paths
let erp = 'pages/erp/erp', entradaDeNotas = 'pages/erp/entradaDeNotas', emissaoDeNotas = 'pages/erp/emissaoDeNotas', transferencia = 'pages/erp/transferencia', transferenciaEntreLojas = 'pages/erp/transferenciaEntreLojas', transferenciaParaMatriz = 'pages/erp/transferenciaParaMatriz', devolucao = 'pages/erp/devolucao', malinha = 'pages/erp/malinha', demonstracao = 'pages/erp/demonstracao';

// PDV paths
let pdv = 'pages/pdv/pdv', venda = 'pages/pdv/vendaPDV', cancelamentoCupom = 'pages/pdv/cancelamentoCupom', reimpressaoCupom = 'pages/pdv/reimpressaoCupom';

// Troca paths
let troca = 'pages/troca/troca', trocaNaLoja = 'pages/troca/trocaNaLoja', trocaEntreLojas = 'pages/troca/trocaEntreLojas';

// Pré-venda paths
let preVenda = 'pages/preVenda/preVenda'

// Functions
function navIndex(element, path) {
    fetch(`${path}.html`)
        .then(response => response.text()) // Extract the text from the response
        .then(text => {
            element.innerHTML = text;
        }) // Call the click function with the text
        .catch(error => {console.error('Error fetching data:', error)}); // Handle any errors
}
