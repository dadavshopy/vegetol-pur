
let cart = [];
function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.item} – ${entry.price}€`;
        cartList.appendChild(li);
        total += entry.price;
    });
    totalDisplay.textContent = total.toFixed(2);
}
