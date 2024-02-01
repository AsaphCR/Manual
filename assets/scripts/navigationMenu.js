// ERP paths
let erp = 'pages/erp', entradaDeNotas = 'pages/entradaDeNotas', emissaoDeNotas = 'pages/emissaoDeNotas', transferencia = 'pages/transferencia', transferenciaEntreLojas = 'pages/transferenciaEntreLojas', transferenciaParaMatriz = 'pages/transferenciaParaMatriz', devolucao = 'pages/devolucao', malinha = 'pages/malinha', demonstracao = 'pages/demonstracao';

// PDV paths
let pdv = 'pages/pdv', venda = 'pages/venda', cancelamentoCupom = 'pages/cancelamentoCupom', reimpressaoCupom = 'pages/reimpressaoCupom';

// Troca paths
let troca = 'pages/troca', trocaNaLoja = 'pages/trocaNaLoja', trocaEntreLojas = 'pages/trocaEntreLojas';

// Pré-venda paths

function navIndex(element, path) {
    fetch(`${path}.html`)
        .then(response => response.text()) // Extract the text from the response
        .then(text => {
            element.innerHTML = text;
        }) // Call the click function with the text
        .catch(error => {console.error('Error fetching data:', error)}); // Handle any errors
}

