// Sample product data
const products = [];

async function fetchProductdataAndPopulate() {
    await fetchProductData
    addCards();
}
// Create a function which call an external API to get a collection of data (Excercise 9-10)
 function fetchProductData(){
fetch('https://fakestoreapi.com/products')
    .then((response) => {if (!response.ok) {
        throw new Error('Network response was not okay');
    } 
    return response.json();
 })
    .then((json) => {
        products.push(...json)
    })
    .catch((error)=> {
    console.error("Error fetching data:", error)
    });
}

// Function to populate the template with product data and append to the container
function addCards() {
    const template = document.getElementById('product-cardTemplate');
    const container = document.getElementById('productContainer');

    products.forEach(product => {
        // Clone the template content
        const clone = document.importNode(template.content, true);

        // Update the cloned elements with product data
        clone.querySelector('.productName').innerText = product.name;
        clone.querySelector('#productPrice').innerText = product.price;
        clone.querySelector('.productDescription').innerText = product.description;

        // Append the cloned template to the container
        container.appendChild(clone);
    });
}
fetchProductdata()
