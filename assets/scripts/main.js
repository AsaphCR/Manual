// Elementos
let erp = document.getElementById('ERP');
let main = document.querySelector('main')

// Funções
function clique(mainContent) {
    main.innerHTML = mainContent
}

// Implementação
erp.addEventListener('click', () => {
        fetch('erp.html')
            .then(response => response.text())  // Extract the text from the response
            .then(text => clique(text))         // Call the clique function with the text
            .catch(error => console.error('Error fetching data:', error));  // Handle any errors
    }
)