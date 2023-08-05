document.addEventListener('DOMContentLoaded', () => {

    // Get references to the input field and item list
    const searchInput = document.getElementById('search-input');
    const itemList = document.getElementById('container');

    // Function to filter items based on search term
    function filterItems(searchTerm) {
        const items = itemList.querySelectorAll('.card-text');
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            const searchValue = searchTerm.toLowerCase();
            if (text.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event listener for input changes
    searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value;
        filterItems(searchTerm);
    });
});

let brandCard = document.querySelectorAll('.brand-card')

brandCard.forEach(eachCard => {
    let textForID = document.querySelectorAll('.card-text')
    // Get the text content from the element
    let originalText = textForID.textContent;

    // Function to remove spaces and convert to camelCase
    function camelCase(text) {
        return text.replace(/\s+/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) => {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }

    // Convert the text to camelCase
    let camelCaseText = camelCase(originalText);

    brandCard.forEach(singleBrandCard => {
        singleBrandCard.setAttribute('value', camelCaseText)
    });
});