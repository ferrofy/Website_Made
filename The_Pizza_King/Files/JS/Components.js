function getBasePath() {
    const p = window.location.pathname;
    const isRoot = p.endsWith('The_Pizza_King/') || p.endsWith('The_Pizza_King/index.html') || p === '/' || p === '/index.html';
    return isRoot ? './' : '../';
}

function injectLayout() {
    const base = getBasePath();
    
    // Aesthetic Pizza slice emoji as favicon dynamically injected
    const iconHTML = `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>">`;
    document.head.insertAdjacentHTML('beforeend', iconHTML);

    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    const themeIcon = isDark ? '☀️' : '🌙';

    const headerHTML = `
    <header>
        <div class="Header_Full_Box">
            <div class="Header_Heading">
                <a href="${base}index.html"><h1>The Pizza King</h1></a>
            </div>
            <div class="Header_Actions">
                <button id="cart-toggle" class="cart-btn" title="View Cart">
                    🛒 Cart <span id="cart-count" style="background: #fff; color: var(--primary-color); padding: 2px 8px; border-radius: 20px; font-size: 0.9rem;">0</span>
                </button>
                <button id="theme-toggle" class="theme-btn" title="Toggle Theme">${themeIcon}</button>
            </div>
        </div>
        <div class="Menu_Bar">
            <div class="Menu_Bar_Items">
                <a href="${base}index.html">Home</a>
                <a href="${base}Menu/index.html">Menu</a>
                <a href="${base}Booking/index.html">Booking Seat</a>
                <a href="${base}Contact/index.html">Contact Us</a>
                <a href="${base}Review/index.html">Reviews</a>
                <a href="${base}Location/index.html">Location</a>
                <a href="${base}About/index.html">About</a>
            </div>
        </div>
    </header>
    `;

    const footerHTML = `
    <footer>
        <div class="Footer_Full_Box">
            <div class="Footer_Sub_Box">
                <div class="Sub_Box_Heading"><h3>About Us</h3></div>
                <p>The Pizza King serves the most authentic and crispy pizzas in town. Fast delivery, fresh ingredients, and love in every slice!</p>
            </div>
            <div class="Footer_Sub_Box">
                <div class="Sub_Box_Heading"><h3>Quick Links</h3></div>
                <ul class="Sub_Box_All_Links">
                    <li><a href="${base}About/index.html" class="Sub_Box_Links">About</a></li>
                    <li><a href="${base}Menu/index.html" class="Sub_Box_Links">Menu</a></li>
                    <li><a href="${base}Booking/index.html" class="Sub_Box_Links">Booking</a></li>
                    <li><a href="${base}Review/index.html" class="Sub_Box_Links">Reviews</a></li>
                    <li><a href="${base}Contact/index.html" class="Sub_Box_Links">Contact</a></li>
                </ul>
            </div>
            <div class="Footer_Sub_Box">
                <div class="Sub_Box_Heading"><h3>Contact Info</h3></div>
                <p class="Sub_Box_Text">📞 8219698525</p>
                <p class="Sub_Box_Text">📧 agnihotriishan197@gmail.com</p>
                <a href="${base}Location/index.html"><p class="Sub_Box_Text" style="color: var(--primary-color); margin-top: 1rem; font-weight: bold;">📍 Click Here For Location</p></a>
            </div>
        </div>
    </footer>
    `;

    const modalsHTML = `
    <div id="custom-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="modal-close" onclick="closeCustomAlert()">&times;</span>
            <h2 id="modal-title" class="mb-1"></h2>
            <p id="modal-desc" class="mb-2 text-lg"></p>
            <button class="btn w-100" onclick="closeCustomAlert()">Close</button>
        </div>
    </div>
    <div id="cart-modal" class="modal-overlay">
        <div class="modal-content">
            <span class="modal-close" onclick="closeCartModal()">&times;</span>
            <h2 class="mb-2">Your Cart</h2>
            <div id="cart-items-list" class="mb-2" style="max-height: 250px; overflow-y: auto; text-align: left;"></div>
            <div class="divider"></div>
            <h3 style="text-align: right;">Total: <span id="cart-total" style="color: var(--primary-color);">$0.00</span></h3>
            <button class="btn w-100 mt-1" onclick="closeCartModal(); window.location.href='${base}Menu/index.html#checkoutPayment'">Checkout</button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML + modalsHTML);
}
