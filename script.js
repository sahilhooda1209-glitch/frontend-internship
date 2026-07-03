const products = [
    { id: 1, name: "Smartphone", price: 500, category: "electronics", image: "https://via.placeholder.com/200x200" },
    { id: 2, name: "Headphones", price: 50, category: "electronics", image: "https://via.placeholder.com/200x200" },
    { id: 3, name: "Laptop", price: 900, category: "electronics", image: "https://via.placeholder.com/200x200" },
    { id: 4, name: "Watch", price: 100, category: "accessories", image: "https://via.placeholder.com/200x200" },
    { id: 5, name: "T-Shirt", price: 20, category: "clothing", image: "https://via.placeholder.com/200x200" },
    { id: 6, name: "Jeans", price: 40, category: "clothing", image: "https://via.placeholder.com/200x200" },
    { id: 7, name: "Shoes", price: 80, category: "clothing", image: "https://via.placeholder.com/200x200" },
    { id: 8, name: "Bag", price: 30, category: "accessories", image: "https://via.placeholder.com/200x200" },
    { id: 9, name: "Camera", price: 300, category: "electronics", image: "https://via.placeholder.com/200x200" },
    { id: 10, name: "Jacket", price: 60, category: "clothing", image: "https://via.placeholder.com/200x200" },
    { id: 11, name: "Bottle", price: 15, category: "accessories", image: "https://via.placeholder.com/200x200" },
    { id: 12, name: "Mouse", price: 25, category: "electronics", image: "https://via.placeholder.com/200x200" }
];

const grid = document.getElementById("product-grid");
let cartItems = []; // Task 4: Items store karne ke liye

function renderProducts(productsToRender) {
    grid.innerHTML = "";
    productsToRender.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
    
    // UI Update
    document.getElementById("cart-count").innerText = cartItems.length;
    
    // Task 5: Total Calculation
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    console.log("Cart Items:", cartItems.map(i => i.name));
    console.log("Total Price: $" + total);
    alert(product.name + " added! Total: $" + total);
}

document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    renderProducts(filtered);
});

function filterProducts(category) {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

renderProducts(products);
