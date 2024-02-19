// ERP paths
let erpPath = 'pages/erp/'
let erp = erpPath+'erp', entradaDeNotas = erpPath+'entradaDeNotas', entradaFabrica = erpPath+'entradaFabrica', entradaMalinha = erpPath+'entradaMalinha', emissaoDeNotas = erpPath+'emissaoDeNotas', transferencia = erpPath+'transferencia', transferenciaEntreLojas = erpPath+'transferenciaEntreLojas', transferenciaParaMatriz = erpPath+'transferenciaParaMatriz', devolucao = erpPath+'devolucao', saidaMalinha = erpPath+'saidaMalinha', demonstracao = erpPath+'demonstracao';

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
