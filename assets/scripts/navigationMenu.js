function navIndex(element, path) {
    fetch(`${path}.html`)
        .then(response => response.text()) // Extract the text from the response
        .then(text => {
            element.innerHTML = text;
        }) // Call the click function with the text
        .catch(error => console.error('Error fetching data:', error)); // Handle any errors
}


