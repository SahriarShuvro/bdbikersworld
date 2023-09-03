const priceSlider = document.getElementById('price-slider');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

// Initialize the displayed min and max prices with formatting and the " BDT" symbol
minPrice.textContent = formatNumber(priceSlider.min * 1000) + ' BDT';
maxPrice.textContent = formatNumber(priceSlider.value * 1000) + ' BDT';

// Update max price when the slider is moved
priceSlider.addEventListener('input', function () {
    maxPrice.textContent = formatNumber(priceSlider.value * 1000) + ' BDT';
});

// Function to format a number in the desired style
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}