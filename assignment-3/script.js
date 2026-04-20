// Product data used for dynamic rendering, searching, filtering, and cart actions.
const products = [
    {
        id: 1,
        name: "Men T-Shirt",
        category: "Men",
        price: 24.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        description: "A soft cotton t-shirt with a clean everyday fit for college, travel, and weekend plans."
    },
    {
        id: 2,
        name: "Women Dress",
        category: "Women",
        price: 49.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
        description: "A graceful dress with a flattering shape, made for brunch, celebrations, and casual evenings."
    },
    {
        id: 3,
        name: "Classic Sneakers",
        category: "Footwear",
        price: 59.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        description: "Comfortable sneakers with a sporty finish and cushioned sole for all-day movement."
    },
    {
        id: 4,
        name: "Denim Jacket",
        category: "Men",
        price: 69.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
        description: "A structured denim jacket that layers easily over tees, shirts, and relaxed outfits."
    },
    {
        id: 5,
        name: "Leather Handbag",
        category: "Accessories",
        price: 79.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
        description: "A polished handbag with roomy storage for essentials, notebooks, and daily carry items."
    },
    {
        id: 6,
        name: "Slim Fit Jeans",
        category: "Women",
        price: 44.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
        description: "Slim fit denim with a comfortable stretch, made for smart casual and everyday styling."
    },
    {
        id: 7,
        name: "Minimal Watch",
        category: "Accessories",
        price: 89.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        description: "A clean dial watch that adds a sharp finishing detail to formal and casual looks."
    },
    {
        id: 8,
        name: "Round Sunglasses",
        category: "Accessories",
        price: 29.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
        description: "Lightweight round sunglasses with tinted lenses for sunny commutes and outdoor plans."
    },
    {
        id: 9,
        name: "Women Heels",
        category: "Footwear",
        price: 64.99,
        rating: 5,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
        description: "Elegant block heels designed for stable steps, festive outfits, and evening wear."
    },
    {
        id: 10,
        name: "Casual Hoodie",
        category: "Men",
        price: 39.99,
        rating: 4,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
        description: "A cozy hoodie with a relaxed fit for study sessions, travel, and easy layering."
    }
];

const productGrid = document.getElementById("productGrid");
const productStatus = document.getElementById("productStatus");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartItemsContainer = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const quickViewModalElement = document.getElementById("quickViewModal");
const quickViewModal = new bootstrap.Modal(quickViewModalElement);
const quickAddBtn = document.getElementById("quickAddBtn");
const toastElement = document.getElementById("storeToast");
const toast = new bootstrap.Toast(toastElement, { delay: 1800 });

let activeCategory = "All";
let searchTerm = "";
let cart = [];
let wishlist = [];
let quickViewProductId = null;

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function createRatingStars(rating) {
    const fullStars = Array.from({ length: rating }, () => '<i class="bi bi-star-fill"></i>');
    const emptyStars = Array.from({ length: 5 - rating }, () => '<i class="bi bi-star"></i>');
    return [...fullStars, ...emptyStars].join("");
}

function getFilteredProducts() {
    return products.filter((product) => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<div class="col-12"><div class="no-products">No products found. Try another search or category.</div></div>';
    } else {
        productGrid.innerHTML = filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);

            return `
                <div class="col-sm-6 col-lg-4 col-xl-3">
                    <article class="product-card">
                        <div class="product-media">
                            <img src="${product.image}" alt="${product.name}">
                            <button class="wishlist-btn ${isWishlisted ? "active" : ""}" type="button" data-action="wishlist" data-id="${product.id}" aria-label="Add ${product.name} to wishlist">
                                <i class="bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}"></i>
                            </button>
                        </div>
                        <div class="product-body">
                            <span class="product-category">${product.category}</span>
                            <h3>${product.name}</h3>
                            <div class="rating" aria-label="${product.rating} out of 5 stars">${createRatingStars(product.rating)}</div>
                            <div class="product-footer">
                                <span class="price">${formatPrice(product.price)}</span>
                                <div class="card-actions">
                                    <button class="btn-card btn-quick" type="button" data-action="quick-view" data-id="${product.id}">View</button>
                                    <button class="btn-card" type="button" data-action="add-cart" data-id="${product.id}">
                                        <i class="bi bi-bag-plus me-1"></i>Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            `;
        }).join("");
    }

    const categoryLabel = activeCategory === "All" ? "all categories" : activeCategory;
    productStatus.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} in ${categoryLabel}.`;
}

function showToast(message) {
    document.getElementById("toastMessage").textContent = message;
    toast.show();
}

function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    const existingItem = cart.find((item) => item.id === productId);

    if (!product) {
        return;
    }

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
    showToast(`${product.name} added to cart.`);
}

function updateQuantity(productId, change) {
    const item = cart.find((cartItem) => cartItem.id === productId);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter((cartItem) => cartItem.id !== productId);
    }

    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    renderCart();
}

function renderCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = formatPrice(totalPrice);
    emptyCart.style.display = cart.length === 0 ? "block" : "none";
    checkoutBtn.disabled = cart.length === 0;

    cartItemsContainer.innerHTML = cart.map((item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)} each</p>
                <div class="cart-controls">
                    <button class="qty-btn" type="button" data-cart-action="decrease" data-id="${item.id}" aria-label="Decrease ${item.name} quantity">-</button>
                    <strong>${item.quantity}</strong>
                    <button class="qty-btn" type="button" data-cart-action="increase" data-id="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
                    <button class="remove-btn" type="button" data-cart-action="remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
        </div>
    `).join("");
}

function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter((id) => id !== productId);
        showToast("Removed from wishlist.");
    } else {
        wishlist.push(productId);
        showToast("Added to wishlist.");
    }

    renderProducts();
}

function openQuickView(productId) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
        return;
    }

    quickViewProductId = productId;
    document.getElementById("quickViewImage").src = product.image;
    document.getElementById("quickViewImage").alt = product.name;
    document.getElementById("quickViewCategory").textContent = product.category;
    document.getElementById("quickViewTitle").textContent = product.name;
    document.getElementById("quickViewRating").innerHTML = createRatingStars(product.rating);
    document.getElementById("quickViewDescription").textContent = product.description;
    document.getElementById("quickViewPrice").textContent = formatPrice(product.price);
    quickViewModal.show();
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
    localStorage.setItem("stylestore-theme", theme);
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((filterButton) => filterButton.classList.remove("active"));
        button.classList.add("active");
        activeCategory = button.dataset.category;
        renderProducts();
    });
});

searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProducts();
});

productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const productId = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "add-cart") {
        addToCart(productId);
    }

    if (action === "quick-view") {
        openQuickView(productId);
    }

    if (action === "wishlist") {
        toggleWishlist(productId);
    }
});

cartItemsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-cart-action]");

    if (!button) {
        return;
    }

    const productId = Number(button.dataset.id);
    const action = button.dataset.cartAction;

    if (action === "increase") {
        updateQuantity(productId, 1);
    }

    if (action === "decrease") {
        updateQuantity(productId, -1);
    }

    if (action === "remove") {
        removeFromCart(productId);
    }
});

quickAddBtn.addEventListener("click", () => {
    if (quickViewProductId) {
        addToCart(quickViewProductId);
        quickViewModal.hide();
    }
});

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
});

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        return;
    }

    showToast("Checkout demo completed.");
    cart = [];
    renderCart();
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Message sent successfully.");
    event.target.reset();
});

document.getElementById("newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Subscribed to newsletter.");
    event.target.reset();
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const navbarCollapse = document.getElementById("navbarNav");

        if (navbarCollapse.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
        }
    });
});

const savedTheme = localStorage.getItem("stylestore-theme");
if (savedTheme) {
    applyTheme(savedTheme);
}

renderProducts();
renderCart();
