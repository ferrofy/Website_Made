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
    let cart = localStorage.getItem('restro_cart');
    if (cart) {
        return JSON.parse(cart);
    }
    return [];
}

function saveCart(cart) {
    localStorage.setItem('restro_cart', JSON.stringify(cart));
    updateCartCount();
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

function addToCart(id, name, price) {
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
        cart.push({ id: id, name: name, price: price, quantity: 1 });
    }
    saveCart(cart);
    showModal("Added to Cart", name + " has been added to your cart!");
}

function clearCart() {
    localStorage.removeItem('restro_cart');
    updateCartCount();
    if (window.location.pathname.includes('Cart')) {
        renderCart();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
