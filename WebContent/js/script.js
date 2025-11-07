// Sample product data
const products = [
  // Men's Products
  {
    id: 1,
    name: "Classic Crew Neck Tee",
    category: "men",
    price: 49.99,
    image: "https://via.placeholder.com/500x500?text=Crew+Neck+Tee",
    description: "Premium quality crew neck tee with moisture-wicking fabric. Perfect for workouts and everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
  },
  {
    id: 2,
    name: "Performance Training Shorts",
    category: "men",
    price: 59.99,
    image: "https://via.placeholder.com/500x500?text=Training+Shorts",
    description:
      "Lightweight training shorts with internal compression and deep pockets for maximum comfort and functionality.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray"],
  },
  {
    id: 3,
    name: "Flex Joggers",
    category: "men",
    price: 79.99,
    image: "https://via.placeholder.com/500x500?text=Flex+Joggers",
    description: "Versatile joggers designed for both gym and casual wear with tapered ankles and tech fabric.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy"],
  },
  {
    id: 4,
    name: "Compression Tank Top",
    category: "men",
    price: 44.99,
    image: "https://via.placeholder.com/500x500?text=Compression+Tank",
    description: "Supportive compression tank with breathable mesh panels for high-intensity workouts.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
  },
  // Women's Products
  {
    id: 5,
    name: "High-Waist Leggings",
    category: "women",
    price: 89.99,
    image: "https://via.placeholder.com/500x500?text=High-Waist+Leggings",
    description: "Premium high-waist leggings with tummy control and phone pockets. Designed for comfort and support.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
  },
  {
    id: 6,
    name: "Sports Bra - Maximum Support",
    category: "women",
    price: 69.99,
    image: "https://via.placeholder.com/500x500?text=Sports+Bra",
    description: "Maximum support sports bra with underwire and moisture-wicking technology for intense workouts.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White"],
  },
  {
    id: 7,
    name: "Fitted Athletic Tank",
    category: "women",
    price: 54.99,
    image: "https://via.placeholder.com/500x500?text=Athletic+Tank",
    description: "Sleek fitted tank with built-in bra support. Perfect for studio workouts and active lifestyle.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Blush"],
  },
  {
    id: 8,
    name: "Women's Training Shorts",
    category: "women",
    price: 64.99,
    image: "https://via.placeholder.com/500x500?text=Women's+Training+Shorts",
    description: "Breathable training shorts with hidden pockets and moisture-wicking fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Purple"],
  },
]

// Currency formatter for Indian Rupees
function formatINR(value) {
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value)
  } catch (e) {
    return '₹' + Number(value).toFixed(2)
  }
}

// Initialize featured products on home page
function initFeaturedProducts() {
  const featuredContainer = document.getElementById("featuredProducts")
  if (!featuredContainer) return

  const featured = products.slice(0, 4)
  featuredContainer.innerHTML = featured.map((product) => createProductCard(product)).join("")
}

// Create product card HTML
function createProductCard(product) {
  return `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatINR(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(event, ${product.id})">Add to Cart</button>
            </div>
        </div>
    `
}

// Filter products on products page
function initProductsPage() {
  const productsGrid = document.getElementById("productsGrid")
  if (!productsGrid) return

  const urlParams = new URLSearchParams(window.location.search)
  const category = urlParams.get("category") || "all"

  displayProducts(category)

  // Add filter button listeners
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      displayProducts(this.dataset.filter)
    })
  })
}

function displayProducts(category) {
  const productsGrid = document.getElementById("productsGrid")
  const filtered = category === "all" ? products : products.filter((p) => p.category === category)
  productsGrid.innerHTML = filtered.map((product) => createProductCard(product)).join("")
}

// Navigate to product detail page
function goToProduct(id) {
  window.location.href = `product.html?id=${id}`
}

// Initialize product detail page
function initProductDetail() {
  const productDetailDiv = document.getElementById("productDetail")
  if (!productDetailDiv) return

  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  if (!product) {
    productDetailDiv.innerHTML = "<p>Product not found</p>"
    return
  }

  productDetailDiv.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-info">
                <h1>${product.name}</h1>
                <div class="product-detail-price">${formatINR(product.price)}</div>
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-options">
                    <div class="option-group">
                        <label for="size">Size</label>
                        <select id="size">
                            ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
                        </select>
                    </div>
                    <div class="option-group">
                        <label for="color">Color</label>
                        <select id="color">
                            ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
                        </select>
                    </div>
                    <div class="option-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" value="1" min="1" max="10">
                    </div>
                </div>

                <button class="btn btn-primary" onclick="addToCartFromDetail(${product.id})">Add to Cart</button>
            </div>
        </div>
    `
}

// Add to cart from product detail
function addToCartFromDetail(productId) {
  const product = products.find((p) => p.id === productId)
  const size = document.getElementById("size").value
  const color = document.getElementById("color").value
  const quantity = Number.parseInt(document.getElementById("quantity").value)

  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const existingItem = cart.find((item) => item.id === productId && item.size === size && item.color === color)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: quantity,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  alert("Product added to cart!")
  window.location.href = "cart.html"
}

// Add to cart from product grid
function addToCart(event, productId) {
  event.stopPropagation()
  const product = products.find((p) => p.id === productId)

  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  alert("Added to cart!")
}

// Initialize cart page
function initCart() {
  const cartItemsDiv = document.getElementById("cartItems")
  if (!cartItemsDiv) return

  const cart = JSON.parse(localStorage.getItem("cart")) || []

  if (cart.length === 0) {
    cartItemsDiv.innerHTML =
      '<div class="empty-cart"><p>Your cart is empty</p><a href="products.html" class="btn btn-primary">Continue Shopping</a></div>'
    return
  }

  let total = 0
  cartItemsDiv.innerHTML = cart
    .map((item, index) => {
      const itemTotal = item.price * item.quantity
      total += itemTotal
    return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size} | Color: ${item.color}</p>
          <p class="cart-item-price">${formatINR(item.price)} x ${item.quantity} = ${formatINR(itemTotal)}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `
    })
    .join("")

  const shipping = 10
  const grandTotal = total + shipping

  document.getElementById("subtotal").textContent = formatINR(total)
  document.getElementById("total").textContent = formatINR(grandTotal)
}

function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  cart[index].quantity += change

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1)
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  initCart()
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.splice(index, 1)
  localStorage.setItem("cart", JSON.stringify(cart))
  initCart()
}

function checkout() {
  alert("Proceeding to checkout. This is a demo version.")
  window.location.href = "login.html"
}

// Authentication
function handleLogin(event) {
  event.preventDefault()
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  const users = JSON.parse(localStorage.getItem("users")) || []
  const user = users.find((u) => u.email === email && u.password === password)

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
    alert("Login successful!")
    window.location.href = "index.html"
  } else {
    alert("Invalid email or password")
  }
}

function handleRegister(event) {
  event.preventDefault()
  const name = document.getElementById("name").value
  const email = document.getElementById("regEmail").value
  const password = document.getElementById("regPassword").value

  const users = JSON.parse(localStorage.getItem("users")) || []

  if (users.find((u) => u.email === email)) {
    alert("Email already registered")
    return
  }

  users.push({ name, email, password })
  localStorage.setItem("users", JSON.stringify(users))
  alert("Registration successful! Please login.")
  window.location.href = "login.html"
}

function handleContact(event) {
  event.preventDefault()
  alert("Thank you for your message! We will get back to you soon.")
  event.target.reset()
}

// Initialize pages on load
document.addEventListener("DOMContentLoaded", () => {
  initFeaturedProducts()
  initProductsPage()
  initProductDetail()
  initCart()
})
