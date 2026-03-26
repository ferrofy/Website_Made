let depth = './';
const scripts = document.getElementsByTagName('script');
for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.includes('components.js')) {
        if (scripts[i].getAttribute('src') && scripts[i].getAttribute('src').startsWith('../')) {
            depth = '../';
        }
    }
}

const headerHTML = `
<header>
    <div class="container nav-container">
        <div class="logo">
            <a href="${depth}index.html">AURA<span class="text-silver">.</span></a>
        </div>
        <ul class="nav-links">
            <li><a href="${depth}index.html">Home</a></li>
            <li><a href="${depth}Menu/index.html">Menu</a></li>
            <li><a href="${depth}CustomCake/index.html">Custom Cake</a></li>
            <li><a href="${depth}LiveOrder/index.html">Live Order</a></li>
            <li><a href="${depth}Contact/index.html">Contact</a></li>
            <li>
                <a href="${depth}Cart/index.html" class="cart-icon">
                    Cart <span class="cart-count" id="cart-counter">0</span>
                </a>
            </li>
        </ul>
    </div>
</header>
`;

const footerHTML = `
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-col">
                <h3>Aura</h3>
                <p>An elegant dining experience.</p>
                <p>Taste the aesthetic.</p>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <a href="${depth}Menu/index.html">Menu</a>
                <a href="${depth}CustomCake/index.html">Custom Cake</a>
                <a href="${depth}LiveOrder/index.html">Live Order</a>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <p>123 Aesthetic Blvd, Heritage District</p>
                <p>Phone: +91 987 654 3210</p>
                <p>Email: contact@aura.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Aura. All Rights Reserved.</p>
        </div>
    </div>
</footer>

<div id="custom-modal" class="modal">
    <div class="modal-content">
        <h3 id="modal-title" class="text-gold">Notification</h3>
        <p id="modal-message">Message here</p>
        <button class="btn" onclick="closeModal()">Close</button>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
});
