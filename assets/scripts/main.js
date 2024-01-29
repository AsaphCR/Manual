// Elementos
let contentSection = document.querySelector('section');


// Funções
function loadPage(path) {
    fetch(`${path}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        }) // Extract the text from the response
        .then(text => {
            contentSection.innerHTML = text;
        }) // Dump the text from the response in the contentSection
        .catch(error => {
            console.error('Error:', error);
            loadPage('pages/404');
        }); // Handle any errors
}
