
let compare = document.getElementById('compare');

let compareCard = compare.querySelectorAll('.compare-cards');

compareCard.forEach(singleCompareCard => {

    singleCompareCard.addEventListener('click', function () {
        location.href = './compare-bikes/2/3.html'
        singleCompareCard.setAttribute('style', 'cursor:pointer;')
    }, false);

    singleCompareCard.setAttribute('style', 'cursor:pointer;')
});


