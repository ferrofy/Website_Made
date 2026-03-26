function showModal(title, message) {
    const modal = document.getElementById('custom-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    
    if (modal && modalTitle && modalMessage) {
        modalTitle.innerText = title;
        modalMessage.innerText = message;
        modal.style.display = 'flex';
    } else {
        alert(title + ": " + message);
    }
}

function closeModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function getCart() {
    let cart = localStorage.getItem('aura_cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

function saveCart(cart) {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('Cart')) {
        renderCart();
    }
}

function updateCartCount() {
    const cart = getCart();
    const counter = document.getElementById('cart-counter');
    if (counter) {
        let totalItems = 0;
        for (let i = 0; i < cart.length; i++) {
            totalItems += cart[i].quantity;
        }
        counter.innerText = totalItems;
    }
}

function addToCart(id, name, price, img) {
    const cart = getCart();
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({ id: id, name: name, price: price, img: img, quantity: 1 });
    }
    saveCart(cart);
    showModal("Added to Cart", name + " has been added to your cart!");
}

function incrementItem(id) {
    const cart = getCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity++;
            break;
        }
    }
    saveCart(cart);
}

function decrementItem(id) {
    let cart = getCart();
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            if (cart[i].quantity > 1) {
                cart[i].quantity--;
            } else {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart(cart);
}

function clearCart() {
    localStorage.removeItem('aura_cart');
    updateCartCount();
    if (window.location.pathname.includes('Cart')) {
        renderCart();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
