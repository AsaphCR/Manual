// Elementos
let main = document.querySelector('main');

// Funções
function loadPage(path) {
    fetch(`pages/${path}.html`)
        .then(response => response.text()) // Extract the text from the response
        .then(text => {
            main.innerHTML = text;
        }) // Call the clique function with the text
        .catch(error => console.error('Error fetching data:', error)); // Handle any errors
}
