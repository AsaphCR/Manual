// Elementos
let contentSection = document.querySelector('section');
let scrollToTop = document.querySelector('.scrollToTop');


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
    window.scrollTo(0, 0);
}

function scrollToTopButton() {
    if (window.scrollY == 0) {
        scrollToTop.style.display = 'none';
    } else {
        scrollToTop.style.display = 'flex';
    }
}


// Event Listeners
window.addEventListener('scroll', scrollToTopButton)