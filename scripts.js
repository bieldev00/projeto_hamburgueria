const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const filterAll = document.querySelector('.filter-all');

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((products) => {
        myLi +=
            `
    <li>
            <img src=${products.src} alt=${products.name}>
            <p>${products.name}</p>
            <p class="item-price">${formatCurrency(products.price)}</p>
    </li>
    `
    })
    
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc,current) => acc + current.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor total dos itens é: ${formatCurrency(totalValue)}</p>
    </li>
    `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter( (product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)
