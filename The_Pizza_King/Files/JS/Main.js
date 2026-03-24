let cart = [];

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
initTheme();

document.addEventListener('DOMContentLoaded', () => {
    if (typeof injectLayout === 'function') {
        injectLayout();
    }

    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                btn.textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                btn.textContent = '☀️';
            }
        });
    }

    const cartBtn = document.getElementById('cart-toggle');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            openCartModal();
        });
    }

    // Assign event listeners cleanly
    if (document.getElementById('booking-form')) {
        document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            showCustomAlert('Seat Booked!', 'Your seat has been reserved successfully.');
        });
    }

    if (document.getElementById('review-form')) {
        document.getElementById('review-form').addEventListener('submit', (e) => {
            e.preventDefault();
            showCustomAlert('Review Submitted', 'Thank you for your valuable feedback!');
            e.target.reset();
        });
    }

    if (document.getElementById('checkout-form')) {
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            showCustomAlert('Redirecting...', 'Connecting to payment gateway. Please wait.');
        });
    }

    const p = window.location.pathname;
    const isRoot = p.endsWith('The_Pizza_King/') || p.endsWith('The_Pizza_King/index.html') || p === '/' || p === '/index.html';
    if (isRoot) {
        setTimeout(() => {
            showCustomAlert("Welcome to Pizza King", "Enjoy Something Delicious Today!");
        }, 1200);
    }
});

// Modal Logic
function showCustomAlert(title, message) {
    const modal = document.getElementById('custom-modal');
    if(!modal) return;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = message;
    modal.classList.add('active');
}

function closeCustomAlert() {
    const modal = document.getElementById('custom-modal');
    if(modal) modal.classList.remove('active');
}

function handleOutOfStock(itemName) {
    showCustomAlert('Out of Stock', `${itemName} is currently out of stock. We will notify you when it's back!`);
}

function handleAddToCart(itemName, price) {
    cart.push({ name: itemName, price: parseFloat(price) });
    updateCartIcon();
    showCustomAlert('Added to Cart', `${itemName} was added to your cart for $${price}.`);
}

function updateCartIcon() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.length;
}

function openCartModal() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total');
    if(!modal || !list) return;

    list.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = '<p class="text-center text-lg">Your cart is completely empty.</p>';
    } else {
        cart.forEach((item) => {
            total += item.price;
            const li = document.createElement('div');
            li.style = 'display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding: 0.8rem 0; font-size: 1.1rem;';
            li.innerHTML = `<span><span style="color:var(--primary-color);">1x</span> ${item.name}</span> <span class="text-bold">$${item.price.toFixed(2)}</span>`;
            list.appendChild(li);
        });
    }

    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    modal.classList.add('active');
}

function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    if(modal) modal.classList.remove('active');
}
