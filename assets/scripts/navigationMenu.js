// let menuErp, menuPdv;

function navIndex(element, path) {
    fetch(`${path}.html`)
        .then(response => response.text()) // Extract the text from the response
        .then(text => {
            element.innerHTML = text;
        }) // Call the click function with the text
        .catch(error => {console.error('Error fetching data:', error)}); // Handle any errors
}

// menuErp = fetch('erpIndex.html').then(response => {if (!response.ok) {throw new Error('Network response was not ok');} return response.text();}).then(text => {console.log('Fetched ERP content:', text); menuErp = text; return text;}).catch(error => {console.error('Error fetching ERP data:', error);});

// menuPdv = fetch(`${path}.html`).then(response => response.text()).then(text => {return text;}).catch(error => {console.error('Error fetching data:', error)});