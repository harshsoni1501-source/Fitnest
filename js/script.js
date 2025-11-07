// ============================================
// PRODUCT DATA
// ============================================

const products = [
  {
    id: 1,
    name: "DAMENSCH Men's Polo",
    category: "men",
    price: 599,
  image: "/public/third-quadrant-jeans.jpg",
    description: "Premium textured regular fit polo t-shirt with sophisticated style and comfort.",
    sizes: [
      { label: '38', stock: 6 },
      { label: '40', stock: 8 },
      { label: '42', stock: 3 },
      { label: '44', stock: 4 },
      { label: '46', stock: 6 },
    ],
    sizeFit: 'Slim fit. The model (height 6\'1) is wearing a size 40',
    materialCare: ['100% cotton', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Long Sleeves',
      'Fit': 'Slim Fit',
      'Hemline': 'Curved',
      'Placket': 'Button Placket',
      'Pocket Type': 'Patch',
      'Collar': 'Spread Collar',
      'Length': 'Regular',
      'Cuff': 'Button'
    },
    completeLook: 'Add this well-designed shirt to your wardrobe and stay warm all year long. Pair with boots and a leather bracelet for a smart-casual finish.'
  },
  {
    id: 2,
    name: "KOTTY Men's Regular Fit Classic",
    category: "men",
    price: 650,
  image: "/public/mens-denim-shirt.jpg",
    description: "Classic design with stylish look, perfect for any occasion.",
    sizes: [
      { label: '38', stock: 5 },
      { label: '40', stock: 7 },
      { label: '42', stock: 5 },
      { label: '44', stock: 1 },
      { label: '46', stock: 0 },
    ],
    sizeFit: 'Regular fit. Model wears size 40',
    materialCare: ['100% cotton', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Long Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Straight',
      'Placket': 'Button Placket',
      'Pocket Type': 'Patch',
      'Collar': 'Classic Collar',
      'Length': 'Regular',
      'Cuff': 'Button'
    },
    completeLook: 'A timeless shirt that pairs well with chinos or denim — ideal for work and weekend.'
  },
  {
    id: 3,
    name: "LEOTUDE Oversized T-Shirt",
    category: "men",
    price: 399,
  image: "https://m.media-amazon.com/images/I/61n8G12sUML._SY879_.jpg",
    description: "Comfortable cotton t-shirt perfect for everyday wear.",
    sizes: [
      { label: 'S', stock: 10 },
      { label: 'M', stock: 12 },
      { label: 'L', stock: 8 },
      { label: 'XL', stock: 4 },
    ],
    sizeFit: 'Oversized fit. Choose your usual size for comfort.',
    materialCare: ['100% cotton', 'Machine-wash cold'],
    specifications: {
      'Sleeve Length': 'Short Sleeves',
      'Fit': 'Oversized',
      'Hemline': 'Straight',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Crew Neck',
      'Length': 'Regular',
      'Cuff': 'Ribbed'
    },
    completeLook: 'Perfect for layered looks or casual days — pair with joggers or slim jeans.'
  },
  {
    id: 7,
    name: "Arayna Tunic Top",
    category: "women",
    price: 899,
    image: "/public/arayna-tunic-top.jpg",
    description: "Lightweight tunic top with a flattering silhouette and breathable fabric.",
    sizes: [
      { label: 'S', stock: 5 },
      { label: 'M', stock: 6 },
      { label: 'L', stock: 4 },
    ],
    sizeFit: 'Relaxed fit with a flared hem — model wears size S',
    materialCare: ['Lightweight blend', 'Hand wash recommended'],
    specifications: {
      'Sleeve Length': '3/4 Sleeves',
      'Fit': 'Relaxed',
      'Hemline': 'Flared',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Round Neck',
      'Length': 'Tunic',
      'Cuff': 'Simple'
    },
    completeLook: 'A breezy tunic to pair with leggings or straight pants for a feminine look.'
  },
  {
    id: 8,
    name: "Deidad Regular Top",
    category: "women",
    price: 999,
    image: "/public/deidad-regular-top.jpg",
    description: "Classic regular fit top with clean lines for everyday wear.",
    sizes: [
      { label: 'S', stock: 3 },
      { label: 'M', stock: 2 },
      { label: 'L', stock: 0 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['Soft cotton blend', 'Machine wash'],
    specifications: {
      'Sleeve Length': 'Short Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Straight',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Round Neck',
      'Length': 'Hip',
      'Cuff': 'Plain'
    },
    completeLook: 'A versatile top that transitions easily from office to evening.'
  },
  {
    id: 9,
    name: "Premium Wrap Sleeveless Top",
    category: "women",
    price: 799,
    image: "/public/premium-women-wrap-top.jpg",
    description: "Stylish sleeveless wrap top with a tailored fit and elegant finish.",
    sizes: [
      { label: 'S', stock: 6 },
      { label: 'M', stock: 5 },
      { label: 'L', stock: 4 },
    ],
    sizeFit: 'Tailored fit. Consider sizing up for a relaxed fit.',
    materialCare: ['Polyester blend', 'Hand wash cold'],
    specifications: {
      'Sleeve Length': 'Sleeveless',
      'Fit': 'Tailored',
      'Hemline': 'Straight',
      'Placket': 'Wrap',
      'Pocket Type': 'None',
      'Collar': 'V-Neck',
      'Length': 'Regular',
      'Cuff': 'N/A'
    },
    completeLook: 'An elegant top for evenings and events — wear with tailored trousers or a skirt.'
  },
  // Additional Men's Products
  {
    id: 4,
    name: " Leotude Cotton T-Shirt",
    category: "men",
    price: 449,
    image: "https://m.media-amazon.com/images/I/61WYx598KKL._SY879_.jpg",
    description: "Essential cotton t-shirt with a comfortable fit and versatile style.",
    sizes: [
      { label: 'S', stock: 8 },
      { label: 'M', stock: 10 },
      { label: 'L', stock: 9 },
      { label: 'XL', stock: 6 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['100% cotton', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Short Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Straight',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Crew Neck',
      'Length': 'Regular',
      'Cuff': 'Ribbed'
    },
    completeLook: 'A wardrobe essential that pairs with everything — jeans, shorts, or chinos.'
  },
  {
    id: 5,
    name: "Bullmer Oversized Tshirt",
    category: "men",
    price: 749,
    image: "https://m.media-amazon.com/images/I/7166is6WezL._SY879_.jpg",
    description: "Professional slim-fit shirt perfect for office and formal occasions.",
    sizes: [
      { label: 'S', stock: 4 },
      { label: 'M', stock: 6 },
      { label: 'L', stock: 5 },
      { label: 'XL', stock: 3 },
    ],
    sizeFit: 'Slim fit. The model wears size 40',
    materialCare: ['Cotton blend', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Long Sleeves',
      'Fit': 'Slim Fit',
      'Hemline': 'Straight',
      'Placket': 'Button Placket',
      'Pocket Type': 'Patch',
      'Collar': 'Classic Collar',
      'Length': 'Regular',
      'Cuff': 'Button'
    },
    completeLook: 'Perfect for any occasion. Pair with  trousers or chinos.'
  },
  {
    id: 6,
    name: "Finivo Cotton Striped Shirt",
    category: "men",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71Jli-Yjv2L._SY879_.jpg",
    description: "Comfortable hoodie with soft fabric, perfect for casual wear.",
    sizes: [
      { label: '38', stock: 7 },
      { label: '40', stock: 9 },
      { label: '42', stock: 8 },
      { label: '44', stock: 5 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['Cotton blend', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Long Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Ribbed',
      'Placket': 'Pullover',
      'Pocket Type': 'Kangaroo',
      'Collar': 'Hood',
      'Length': 'Regular',
      'Cuff': 'Ribbed'
    },
    completeLook: 'A cozy shirt for relaxed days. Wear with joggers or jeans for a casual look.'
  },
  // Additional Women's Products
  {
    id: 10,
    name: "Toplot Women Shirt",
    category: "women",
    price: 849,
    image: "https://m.media-amazon.com/images/I/71ehlKHqhUL._SY741_.jpg",
    description: "Elegant floral print blouse with a feminine design and comfortable fit.",
    sizes: [
      { label: 'S', stock: 5 },
      { label: 'M', stock: 7 },
      { label: 'L', stock: 6 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['Polyester blend', 'Hand wash'],
    specifications: {
      'Sleeve Length': '3/4 Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Curved',
      'Placket': 'Button Placket',
      'Pocket Type': 'None',
      'Collar': 'Round Neck',
      'Length': 'Regular',
      'Cuff': 'Button'
    },
    completeLook: 'A shirt that elevates any outfit. Pair with trousers for a polished look.'
  },
  {
    id: 11,
    name: "Tivante V Neck Crop Top",
    category: "women",
    price: 699,
    image: "https://m.media-amazon.com/images/I/41h55wxEnAL.jpg",
    description: "Classic denim shirt with a relaxed fit, perfect for everyday style.",
    sizes: [
      { label: 'S', stock: 4 },
      { label: 'M', stock: 6 },
      { label: 'L', stock: 5 },
    ],
    sizeFit: 'Relaxed fit. True to size.',
    materialCare: ['100% cotton', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Long Sleeves',
      'Fit': 'Relaxed',
      'Hemline': 'Straight',
      'Placket': 'Button Placket',
      'Pocket Type': 'Patch',
      'Collar': 'Classic Collar',
      'Length': 'Regular',
      'Cuff': 'Button'
    },
    completeLook: 'A versatile crop top  that works for casual outings. Style with jeans .'
  },
  {
    id: 12,
    name: "Royalica Midi Belted Dress",
    category: "women",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/51LbyZSEtwL._SY879_.jpg",
    description: "Flowing maxi dress with an elegant silhouette, perfect for special occasions.",
    sizes: [
      { label: 'S', stock: 3 },
      { label: 'M', stock: 4 },
      { label: 'L', stock: 3 },
    ],
    sizeFit: 'Flowing fit. True to size.',
    materialCare: ['Polyester blend', 'Hand wash'],
    specifications: {
      'Sleeve Length': 'Sleeveless',
      'Fit': 'Flowing',
      'Hemline': 'Flared',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Round Neck',
      'Length': 'Maxi',
      'Cuff': 'N/A'
    },
    completeLook: 'A stunning midi dress for events and celebrations. Accessorize with heels and statement jewelry.'
  },
  // Additional Men's Products (2 more)
  {
    id: 13,
    name: "Ben Martin Denim Jeans",
    category: "men",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71OBVZ-69WL._SY879_.jpg",
    description: "Classic fit denim jeans with comfortable stretch, perfect for everyday wear.",
    sizes: [
      { label: '30', stock: 5 },
      { label: '32', stock: 7 },
      { label: '34', stock: 6 },
      { label: '36', stock: 4 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['98% cotton, 2% elastane', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'N/A',
      'Fit': 'Regular',
      'Hemline': 'Straight',
      'Placket': 'Zipper',
      'Pocket Type': 'Five-Pocket',
      'Collar': 'N/A',
      'Length': 'Full',
      'Cuff': 'Hemmed'
    },
    completeLook: 'Versatile jeans that work with any top. Pair with t-shirts, polos, or shirts for a casual look.'
  },
  {
    id: 14,
    name: "Athletic Shorts",
    category: "men",
    price: 549,
    image: "https://m.media-amazon.com/images/I/61dINsGfswL._SX679_.jpg",
    description: "Comfortable athletic shorts with moisture-wicking fabric, ideal for sports and workouts.",
    sizes: [
      { label: 'S', stock: 6 },
      { label: 'M', stock: 8 },
      { label: 'L', stock: 7 },
      { label: 'XL', stock: 5 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['Polyester blend', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'N/A',
      'Fit': 'Regular',
      'Hemline': 'Straight',
      'Placket': 'Drawstring',
      'Pocket Type': 'Side Pockets',
      'Collar': 'N/A',
      'Length': 'Above Knee',
      'Cuff': 'Hemmed'
    },
    completeLook: 'Perfect for gym sessions or casual outings. Style with athletic shoes and a tank top.'
  },
  // Additional Women's Products (2 more)
  {
    id: 15,
    name: "Leriya Women V Neck Floral Print ",
    category: "women",
    price: 749,
    image: "https://m.media-amazon.com/images/I/616eGfn0phL._SY879_.jpg",
    description: "Flattering A-line skirt with a comfortable fit and elegant drape.",
    sizes: [
      { label: 'S', stock: 4 },
      { label: 'M', stock: 6 },
      { label: 'L', stock: 5 },
    ],
    sizeFit: 'A-line fit. True to size.',
    materialCare: ['Polyester blend', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'N/A',
      'Fit': 'A-Line',
      'Hemline': 'Flared',
      'Placket': 'Zipper',
      'Pocket Type': 'None',
      'Collar': 'N/A',
      'Length': 'Knee Length',
      'Cuff': 'Hemmed'
    },
    completeLook: 'A timeless mini dress that is perfect for party or casual wear.'
  },
  {
    id: 16,
    name: "liva Cord Set",
    category: "women",
    price: 599,
    image: "https://m.media-amazon.com/images/I/61o4w9dG3CL._SX569_.jpg",
    description: "Trendy crop top with vibrant print, perfect for casual and party wear.",
    sizes: [
      { label: 'S', stock: 5 },
      { label: 'M', stock: 7 },
      { label: 'L', stock: 6 },
    ],
    sizeFit: 'Regular fit. True to size.',
    materialCare: ['Cotton blend', 'Machine-wash'],
    specifications: {
      'Sleeve Length': 'Short Sleeves',
      'Fit': 'Regular',
      'Hemline': 'Cropped',
      'Placket': 'Pullover',
      'Pocket Type': 'None',
      'Collar': 'Round Neck',
      'Length': 'Crop',
      'Cuff': 'Ribbed'
    },
    completeLook: 'A stylish cord set that is perfect for casual outings and gatherings.'
  },
]

// ============================================
// IMAGE RESOLUTION HELPERS
// Try to automatically find an image in /public/ based on product name or provided filename.
// This allows you to drop images into `public/` and have the site pick them up.

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^a-z0-9\-\.]/g, '') // Remove invalid chars
    .replace(/\-+/g, '-') // Collapse dashes
    .replace(/^\-+|\-+$/g, '') // Trim dashes
}

async function fileExists(url) {
  // Try HEAD first
  try {
    const res = await fetch(url, { method: 'HEAD' })
    if (res.ok) return true
  } catch (e) {
    // HEAD might be blocked on some servers — fallback to image load test
  }

  // Fallback: create Image and test load
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

async function resolveImageForProduct(product) {
  // If product already has an explicit image that resolves, use it first
  const candidates = []

  if (product.image) {
    // Normalize common forms to absolute /public/ path if filename only
    try {
      const asUrl = new URL(product.image, window.location.href).pathname
      // if the path contains '/public/' keep it; otherwise try both
      const base = asUrl.split('/').pop()
      if (base) candidates.push('/public/' + base)
      candidates.push(asUrl)
    } catch (e) {
      // ignore
    }
  }

  // Add slugified name candidates with common extensions
  const base = slugify(product.name || '')
  if (base) {
    const exts = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']
    for (const ext of exts) {
      candidates.push('/public/' + base + ext)
    }
  }

  // Also try name words join (no dashes)
  if (product.name) {
    const compact = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '')
    if (compact) {
      const exts = ['.jpg', '.png', '.jpeg']
      for (const ext of exts) candidates.push('/public/' + compact + ext)
    }
  }

  // Finally try a generic placeholder
  candidates.push('/public/placeholder.jpg')
  candidates.push('/public/placeholder.png')
  candidates.push('/public/placeholder.svg')

  // Deduplicate while preserving order
  const seen = new Set()
  const uniq = candidates.filter((c) => {
    if (!c) return false
    if (seen.has(c)) return false
    seen.add(c)
    return true
  })

  for (const url of uniq) {
    // ensure same-origin path
    const fullUrl = url.startsWith('/') ? url : '/' + url
    // try existence
    // eslint-disable-next-line no-await-in-loop
    if (await fileExists(fullUrl)) {
      return fullUrl
    }
  }

  // fallback to the original product.image or empty
  return product.image || ''
}

async function resolveAllImages() {
  const tasks = products.map(async (p) => {
    try {
      p.resolvedImage = await resolveImageForProduct(p)
    } catch (e) {
      p.resolvedImage = p.image || '/public/placeholder.jpg'
    }
  })
  await Promise.all(tasks)
}

// ============================================
// CURRENCY FORMATTING (INR)
function formatINR(value) {
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value)
  } catch (e) {
    return '₹' + Number(value).toFixed(2)
  }
}

// ============================================
// ACCESSIBILITY HELPERS (focus trap + inert background)
// ============================================
function trapFocus(modalEl, { onClose, restoreFocusTo } = {}) {
  const FOCUSABLE = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
  const nodes = Array.from(modalEl.querySelectorAll(FOCUSABLE)).filter((n) => n.offsetWidth > 0 || n.offsetHeight > 0 || n === document.activeElement)
  const first = nodes[0] || modalEl
  const last = nodes[nodes.length - 1] || modalEl

  function keyHandler(e) {
    if (e.key === 'Tab') {
      if (nodes.length === 0) {
        e.preventDefault()
        return
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    } else if (e.key === 'Escape') {
      e.preventDefault()
      if (typeof onClose === 'function') onClose()
    }
  }

  document.addEventListener('keydown', keyHandler)

  // focus the first focusable element (or modal wrapper) for keyboard users
  try { first.focus() } catch (e) {}

  return function release() {
    document.removeEventListener('keydown', keyHandler)
    try { if (restoreFocusTo && restoreFocusTo.focus) restoreFocusTo.focus() } catch (e) {}
  }
}

function setBackgroundInert(overlay, inert = true) {
  // mark all direct children of body except the overlay and profile dropdown as aria-hidden when modal open
  Array.from(document.body.children).forEach((el) => {
    // Skip the overlay itself and any fixed profile dropdown
    if (el === overlay) return
    if (el.classList.contains('profile-dropdown') && el.classList.contains('fixed')) return
    try {
      if (inert) el.setAttribute('aria-hidden', 'true')
      else el.removeAttribute('aria-hidden')
    } catch (e) {}
  })
}

// Open an editor modal for a cart item so user can change size/quantity in-place
function editCartItem(productId, currentSize, cartIndex = null) {
  const product = products.find(p => p.id === productId)
  if (!product) return

  const cart = getCart()
  const itemIndex = (cartIndex !== null && cartIndex !== undefined) ? Number(cartIndex) : cart.findIndex(it => it.id === productId && ((it.size || '') === (currentSize || '')))
  if (itemIndex === -1) {
    showNotification('Cart item not found')
    return
  }
  const cartItem = cart[itemIndex]
  const initialQty = cartItem.quantity || 1

  // create overlay/modal similar to product modal but with Save behaviour
  const overlay = document.createElement('div')
  overlay.className = 'product-details-overlay'

  const modal = document.createElement('div')
  modal.className = 'product-details-modal'

  const matCare = (product.materialCare && product.materialCare.length) ? product.materialCare.map(c=>`<div>${c}</div>`).join('') : ''
  const specs = product.specifications || {}
  const specRows = Object.keys(specs).map(k => `<div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${specs[k]}</div></div>`).join('')

  modal.innerHTML = `
    <div class="modal-header">
      <h2 id="edit-modal-title-${product.id}-${itemIndex}">Edit: ${product.name}</h2>
      <button class="modal-close" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <div class="product-modal-top" style="display:flex;gap:1rem;align-items:flex-start">
        <div style="flex:0 0 160px"><img src="${product.resolvedImage || product.image}" alt="${product.name}" style="width:100%;border-radius:6px;object-fit:cover"/></div>
        <div style="flex:1">
          <p class="product-detail-price">${formatINR(product.price)}</p>
          <p class="spec-sub">${product.description}</p>
          <h4>Size & Fit</h4>
          <div class="spec-text">${product.sizeFit || ''}</div>

          <div class="modal-size-row">
            <div id="editModalSizeOptions" style="display:flex;gap:0.5rem;align-items:center;position:relative"></div>
            <div class="modal-quantity">
              <label style="font-weight:600; color:var(--color-text-secondary);">Qty</label>
              <input id="editModalQty" type="number" value="${initialQty}" min="1">
            </div>
          </div>

          <h4 style="margin-top:0.5rem">Material & Care</h4>
          <div class="spec-text">${matCare}</div>
        </div>
      </div>
      <div style="margin-top:1rem">
        <h4>Specifications</h4>
        <div class="specs-grid">${specRows}</div>
      </div>
    </div>
    <div class="modal-footer" style="text-align:right;margin-top:1rem">
      <button id="editModalSave" class="btn btn-primary">Save</button>
      <button id="editModalCancel" class="btn btn-secondary">Cancel</button>
    </div>
  `

  overlay.appendChild(modal)
  document.body.appendChild(overlay)

  // Accessibility: mark dialog and make background inert, trap focus
  try {
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-labelledby', `edit-modal-title-${product.id}-${itemIndex}`)
  } catch (e) {}

  setBackgroundInert(overlay, true)
  const opener = document.activeElement
  let releaseTrap = null
  function closeModal() {
    try { if (typeof releaseTrap === 'function') releaseTrap() } catch (e) {}
    try { setBackgroundInert(overlay, false) } catch (e) {}
    overlay.remove()
    // Restore any profile dropdown that was open
    const profileDropdown = document.getElementById('profileDropdown')
    if (profileDropdown && profileDropdown.classList.contains('active')) {
      profileDropdown.style.zIndex = '9999'
    }
  }
  try { releaseTrap = trapFocus(modal, { onClose: closeModal, restoreFocusTo: opener }) } catch (e) {}
  try { modal.querySelector('.modal-close').focus() } catch(e) {}
  modal.querySelector('.modal-close')?.addEventListener('click', () => closeModal())
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal() })

  // build size options
  const modalSizeOptions = modal.querySelector('#editModalSizeOptions')
  let modalSelectedSize = null
  const modalQtyInput = modal.querySelector('#editModalQty')
  if (product.sizes && product.sizes.length) {
    modalSizeOptions.innerHTML = product.sizes.map(s => {
      const disabled = s.stock <= 0
      const zeroClass = s.stock <= 0 ? ' zero' : ''
      const badge = `<span class="modal-badge${zeroClass}">${s.stock} left</span>`
      return `<div class="size-option ${disabled ? 'disabled' : ''}" data-size="${s.label}" data-stock="${s.stock}" tabindex="0" role="button" aria-label="Size ${s.label}, ${s.stock} left${s.stock <= 0 ? ', out of stock' : ''}" aria-disabled="${disabled ? 'true' : 'false'}">${s.label}${badge}</div>`
    }).join('')

    const modalOptionEls = modalSizeOptions.querySelectorAll('.size-option')
    modalOptionEls.forEach(el => {
      if (el.classList.contains('disabled')) return
      // preselect if matches currentSize
      if (String(el.dataset.size) === String(currentSize)) {
        el.classList.add('selected')
        modalSelectedSize = el.dataset.size
        const stock = parseInt(el.dataset.stock) || Infinity
        if (modalQtyInput) {
          modalQtyInput.max = stock
          if (parseInt(modalQtyInput.value) > stock) modalQtyInput.value = stock
        }
      }
      el.addEventListener('click', () => {
        modalOptionEls.forEach(o => o.classList.remove('selected'))
        el.classList.add('selected')
        modalSelectedSize = el.dataset.size
        const stock = parseInt(el.dataset.stock) || Infinity
        if (modalQtyInput) {
          modalQtyInput.max = stock
          if (parseInt(modalQtyInput.value) > stock) modalQtyInput.value = stock
        }
      })
      el.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click() } })
    })
  } else {
    modalSizeOptions.innerHTML = '<div style="color:var(--color-text-secondary)">One size available</div>'
  }

  // Save handler: update cart item size/qty, merge if needed
  modal.querySelector('#editModalSave')?.addEventListener('click', () => {
    const qty = Math.max(1, parseInt(modalQtyInput.value) || 1)
    if (product.sizes && product.sizes.length && !modalSelectedSize) {
      alert('Please select a size before saving.')
      return
    }

    // check stock for selected size
    let available = Infinity
    if (modalSelectedSize && product.sizes) {
      const s = product.sizes.find(x => String(x.label) === String(modalSelectedSize))
      if (s) available = s.stock
      else available = 0
    }
    let finalQty = qty
    if (available !== Infinity && finalQty > available) {
      finalQty = available
      showNotification(`Only ${available} available for size ${modalSelectedSize}`)
    }

    // find if another cart line already has the target size
    const existingIdx = cart.findIndex((it, idx) => idx !== itemIndex && it.id === productId && ((it.size || '') === (modalSelectedSize || '')))
    if (existingIdx > -1) {
      // merge into existing line
      const existing = cart[existingIdx]
      const combined = (existing.quantity || 0) + finalQty
      existing.quantity = (available !== Infinity) ? Math.min(combined, available) : combined
      // remove original item
      cart.splice(itemIndex, 1)
    } else {
      // update the existing item
      if (cartItem) {
        cartItem.size = modalSelectedSize || null
        cartItem.quantity = finalQty
      }
    }

    saveCart(cart)
    renderCartPage()
    overlay.remove()
    showNotification('Cart updated')
  })

  modal.querySelector('#editModalCancel')?.addEventListener('click', () => overlay.remove())
}
// ============================================
// CART MANAGEMENT
// ============================================

function getCart() {
  return JSON.parse(localStorage.getItem("fitnestCart")) || []
}

function saveCart(cart) {
  localStorage.setItem("fitnestCart", JSON.stringify(cart))
  updateCartCount()
}

function addToCart(productId, quantity = 1, size = null) {
  const product = products.find((p) => p.id === productId)
  if (!product) return
  const cart = getCart()
  // find size stock if size provided
  let available = Infinity
  if (size && product.sizes && Array.isArray(product.sizes)) {
    const s = product.sizes.find((x) => String(x.label) === String(size))
    if (s) available = s.stock
    else available = 0
  }

  // Try to match existing item by id and size (so different sizes are separate line items)
  const existingItem = cart.find((item) => item.id === productId && (item.size || null) === (size || null))

  if (available !== Infinity && available <= 0) {
    showNotification(`Size ${size} is out of stock`)
    return
  }

  if (existingItem) {
    const desired = existingItem.quantity + quantity
    if (available !== Infinity && desired > available) {
      existingItem.quantity = available
      showNotification(`Only ${available} available for size ${size}`)
    } else {
      existingItem.quantity = desired
    }
  } else {
    let qtyToAdd = quantity
    if (available !== Infinity && quantity > available) {
      qtyToAdd = available
      showNotification(`Only ${available} available for size ${size}`)
    }
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.resolvedImage || product.image,
      quantity: qtyToAdd,
      size: size || null,
    })
  }

  saveCart(cart)
  showNotification("Added to cart!")
}

function removeFromCart(productId, size = null) {
  let cart = getCart()
  cart = cart.filter((item) => !(item.id === productId && ((item.size || null) === (size || null))))
  saveCart(cart)
}

function updateCartItemQuantity(productId, quantity, size = null) {
  const cart = getCart()
  const item = cart.find((it) => it.id === productId && ((it.size || null) === (size || null)))
  if (item) {
    // find product and size stock
    const product = products.find((p) => p.id === productId)
    let maxStock = Infinity
    if (product && product.sizes && size) {
      const s = product.sizes.find((x) => String(x.label) === String(size))
      if (s) maxStock = s.stock
    }

    const newQty = Math.max(1, Math.min(quantity, isFinite(maxStock) ? maxStock : quantity))
    if (newQty !== quantity) {
      showNotification(`Only ${maxStock} available for size ${size}`)
    }
    item.quantity = newQty
    saveCart(cart)
  }
}

function updateCartCount() {
  const cart = getCart()
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCounts = document.querySelectorAll("#cartCount")
  cartCounts.forEach((el) => {
    el.textContent = count
  })
}

// ============================================
// USER MANAGEMENT
// ============================================

function getCurrentUser() {
  try {
    const data = localStorage.getItem('fitnestUser')
    return data ? JSON.parse(data) : null
  } catch (e) {
    return null
  }
}

function setCurrentUser(userData) {
  if (!userData) {
    localStorage.removeItem('fitnestUser')
    return
  }
  localStorage.setItem('fitnestUser', JSON.stringify(userData))
  updateAuthUI()
}

function updateAuthUI() {
  const user = getCurrentUser()
  const loginLinks = document.querySelectorAll('.login-link')
  const profileMenus = document.querySelectorAll('.profile-menu')
  const avatars = document.querySelectorAll('.profile-avatar')
  
  loginLinks.forEach(link => {
    link.style.display = user ? 'none' : 'inline-flex'
  })
  
  profileMenus.forEach(menu => {
    menu.style.display = user ? 'block' : 'none'
  })
  
  // Set avatar src to the site default (avatar uploads removed)
  avatars.forEach(img => {
    const isNextJs = window.location.pathname.startsWith('/_next') || window.location.pathname.startsWith('/products/') || window.location.pathname === '/'
    try {
      img.src = isNextJs ? '/profile-avatar.svg' : 'public/profile-avatar.svg'
    } catch (e) {}
  })
}

// Global reference to the dropdown portal element
let activeDropdownPortal = null;
let dropdownObserver = null;

function ensureDropdownVisible(dropdownEl) {
  if (!dropdownEl) return;
  
  // Force important display and z-index styles
  dropdownEl.style.setProperty('display', 'block', 'important');
  dropdownEl.style.setProperty('z-index', '2147483647', 'important'); // Max safe integer
  dropdownEl.style.setProperty('position', 'fixed', 'important');
  dropdownEl.style.setProperty('opacity', '1', 'important');
  dropdownEl.style.setProperty('visibility', 'visible', 'important');
  dropdownEl.style.setProperty('pointer-events', 'auto', 'important');
  
  // Ensure no other styles can hide it
  dropdownEl.style.removeProperty('transform');
  dropdownEl.style.removeProperty('clip');
  dropdownEl.style.removeProperty('clip-path');
}

function showProfileDropdown(show = true) {
  // Clean up any existing portal first
  if (activeDropdownPortal) {
    document.body.removeChild(activeDropdownPortal);
    activeDropdownPortal = null;
  }
  if (dropdownObserver) {
    dropdownObserver.disconnect();
    dropdownObserver = null;
  }

  const profileBtn = document.getElementById('profileButton');
  if (!profileBtn) return;

  if (!show) return;

  // Create a portal container that will hold our dropdown
  const portal = document.createElement('div');
  portal.setAttribute('data-portal', 'profile-dropdown');
  portal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2147483647;'; // Max safe z-index
  document.body.appendChild(portal);
  
  // Create the dropdown inside the portal
  const dropdown = document.createElement('div');
  dropdown.id = 'profileDropdownPortal';
  dropdown.className = 'profile-dropdown active';
  dropdown.innerHTML = `
    <a href="profile.html">My Profile</a>
    <a href="orders.html">My Orders</a>
    <button id="logoutButton" type="button">Logout</button>
  `;

  // Style the dropdown
  dropdown.style.cssText = `
    position: fixed !important;
    display: block !important;
    z-index: 2147483647 !important;
    background: white !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
    border: 1px solid #e5e5e5 !important;
    border-radius: 4px !important;
    padding: 0.5rem !important;
    min-width: 180px !important;
    pointer-events: auto !important;
  `;

  // Position the dropdown under the button
  const rect = profileBtn.getBoundingClientRect();
  const top = rect.bottom + 8;
  const right = Math.max(8, window.innerWidth - rect.right);
  
  dropdown.style.setProperty('top', top + 'px', 'important');
  dropdown.style.setProperty('right', right + 'px', 'important');

  // Add the dropdown to the portal
  portal.appendChild(dropdown);
  activeDropdownPortal = portal;

  // Wire up event handlers
  const logoutBtn = dropdown.querySelector('#logoutButton');
  if (logoutBtn) {
    logoutBtn.onclick = handleLogout;
  }

  // Style dropdown items
  dropdown.querySelectorAll('a, button').forEach(item => {
    item.style.cssText = `
      display: block !important;
      width: 100% !important;
      padding: 0.5rem 1rem !important;
      text-align: left !important;
      background: none !important;
      border: none !important;
      color: inherit !important;
      font: inherit !important;
      cursor: pointer !important;
      border-radius: 4px !important;
    `;
  });

  // Create mutation observer to ensure dropdown stays visible
  dropdownObserver = new MutationObserver((mutations) => {
    ensureDropdownVisible(dropdown);
  });
  
  dropdownObserver.observe(dropdown, {
    attributes: true,
    attributeFilter: ['style', 'class']
  });

  // Handle clicks outside
  const closeHandler = (e) => {
    if (!dropdown.contains(e.target) && !profileBtn.contains(e.target)) {
      if (activeDropdownPortal) {
        document.body.removeChild(activeDropdownPortal);
        activeDropdownPortal = null;
      }
      if (dropdownObserver) {
        dropdownObserver.disconnect();
        dropdownObserver = null;
      }
      document.removeEventListener('click', closeHandler);
    }
  };

  // Handle scroll/resize to reposition
  const updatePosition = () => {
    if (!activeDropdownPortal) return;
    const newRect = profileBtn.getBoundingClientRect();
    const newTop = newRect.bottom + 8;
    const newRight = Math.max(8, window.innerWidth - newRect.right);
    dropdown.style.setProperty('top', newTop + 'px', 'important');
    dropdown.style.setProperty('right', newRight + 'px', 'important');
  };

  window.addEventListener('scroll', updatePosition, true);
  window.addEventListener('resize', updatePosition);

  // Delay click handler to prevent immediate closure
  setTimeout(() => {
    document.addEventListener('click', closeHandler);
    ensureDropdownVisible(dropdown);
  }, 0);
}

function handleLogin(e) {
  e.preventDefault()
  const email = document.getElementById('loginEmail').value
  const password = document.getElementById('loginPassword').value
  
  const apiBase = window.FITNEST_API_URL || 'http://localhost:8080'
  const url = apiBase + '/api/users/login'
  
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(r => {
    // Try to parse JSON even for error status codes
    return r.json().then(data => {
      return { ok: r.ok, status: r.status, data: data }
    }).catch(() => {
      // If JSON parsing fails, it's likely a connection error
      throw new Error('Failed to connect to backend')
    })
  })
  .then(result => {
    if (result.ok && result.data.status === 'ok') {
      const safeUser = { id: result.data.id, email: result.data.email, name: result.data.name }
      setCurrentUser(safeUser)
      showNotification('Welcome back!')
      try { sendEvent('user_logged_in', 'user-' + safeUser.id, { id: safeUser.id, email: safeUser.email }) } catch (e) {}
      window.location.href = 'profile.html'
    } else {
      // Backend responded but login failed (invalid credentials, etc.)
      showNotification(result.data.message || 'Invalid email or password')
    }
  })
  .catch(err => {
    console.error('Login error:', err)
    // Only show connection error if it's actually a connection issue
    if (err.message && err.message.includes('Failed to connect')) {
      showNotification('Failed to connect. Make sure backend is running on http://localhost:8080')
    } else if (err.message && err.message.includes('fetch')) {
      showNotification('Failed to connect. Make sure backend is running on http://localhost:8080')
    } else {
      showNotification('Login failed: ' + (err.message || 'Unknown error'))
    }
  })
}

function handleRegister(e) {
  e.preventDefault()
  const name = document.getElementById('registerName').value
  const email = document.getElementById('registerEmail').value
  const password = document.getElementById('registerPassword').value
  const confirm = document.getElementById('registerConfirm').value
  
  if (password !== confirm) {
    showNotification('Passwords do not match')
    return
  }
  
  const apiBase = window.FITNEST_API_URL || 'http://localhost:8080'
  const url = apiBase + '/api/users/register'
  
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
  .then(r => {
    // Try to parse JSON even for error status codes
    return r.json().then(data => {
      return { ok: r.ok, status: r.status, data: data }
    }).catch(() => {
      // If JSON parsing fails, it's likely a connection error
      throw new Error('Failed to connect to backend')
    })
  })
  .then(result => {
    if (result.ok && result.data.status === 'ok') {
      const safeUser = { id: result.data.id, email: result.data.email, name: result.data.name }
      setCurrentUser(safeUser)
      showNotification('Account created successfully!')
      try { sendEvent('user_registered', 'user-' + safeUser.id, { id: safeUser.id, email: safeUser.email, name: safeUser.name }) } catch (e) {}
      window.location.href = 'profile.html'
    } else {
      // Backend responded but registration failed
      showNotification(result.data.message || 'Registration failed')
    }
  })
  .catch(err => {
    console.error('Registration error:', err)
    // Only show connection error if it's actually a connection issue
    if (err.message && err.message.includes('Failed to connect')) {
      showNotification('Failed to connect. Make sure backend is running on http://localhost:8080')
    } else if (err.message && err.message.includes('fetch')) {
      showNotification('Failed to connect. Make sure backend is running on http://localhost:8080')
    } else {
      showNotification('Registration failed: ' + (err.message || 'Unknown error'))
    }
  })
}

function handleLogout() {
  setCurrentUser(null)
  showNotification('Logged out successfully')
  window.location.href = 'index.html'
}

function updateProfile(e) {
  e.preventDefault()
  const user = getCurrentUser()
  if (!user) return
  
  const formData = {
    name: document.getElementById('fullName').value,
    phone: document.getElementById('phone').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    pincode: document.getElementById('pincode').value
  }
  
  // Update password if provided
  const currentPassword = document.getElementById('currentPassword').value
  const newPassword = document.getElementById('newPassword').value
  const confirmPassword = document.getElementById('confirmPassword').value
  
  if (currentPassword || newPassword || confirmPassword) {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showNotification('Please fill all password fields to change password')
      return
    }
    if (newPassword !== confirmPassword) {
      showNotification('New passwords do not match')
      return
    }
    
    // Verify current password
    const users = JSON.parse(localStorage.getItem('fitnestUsers') || '[]')
    const userRecord = users.find(u => u.id === user.id)
    if (!userRecord || userRecord.password !== currentPassword) {
      showNotification('Current password is incorrect')
      return
    }
    
    // Update password in users array
    userRecord.password = newPassword
    localStorage.setItem('fitnestUsers', JSON.stringify(users))
  }
  
  // Update user data
  const updatedUser = { ...user, ...formData }
  setCurrentUser(updatedUser)
  
  // Update in users array
  const users = JSON.parse(localStorage.getItem('fitnestUsers') || '[]')
  const index = users.findIndex(u => u.id === user.id)
  if (index !== -1) {
    users[index] = { ...users[index], ...formData }
    localStorage.setItem('fitnestUsers', JSON.stringify(users))
  }
  
  showNotification('Profile updated successfully')
  try { sendEvent('profile_updated', 'user-' + updatedUser.id, updatedUser) } catch (e) {}
}

// Profile avatar change removed — photo uploads are disabled in this build

// Wire up profile UI if on profile page
function initializeProfile() {
  const user = getCurrentUser()
  if (!user) {
    window.location.href = 'login.html'
    return
  }
  
  const form = document.getElementById('profileForm')
  if (!form) return
  
  // Fill form with user data
  document.getElementById('fullName').value = user.name || ''
  document.getElementById('email').value = user.email || ''
  document.getElementById('phone').value = user.phone || ''
  document.getElementById('street').value = user.street || ''
  document.getElementById('city').value = user.city || ''
  document.getElementById('state').value = user.state || ''
  document.getElementById('pincode').value = user.pincode || ''
  
  // Ensure the currentAvatar element shows the site-default avatar (uploads are disabled)
  const currentAvatarEl = document.getElementById('currentAvatar')
  if (currentAvatarEl) {
    const isNextJs = window.location.pathname.startsWith('/_next') || window.location.pathname.startsWith('/products/') || window.location.pathname === '/'
    currentAvatarEl.src = isNextJs ? '/profile-avatar.svg' : 'public/profile-avatar.svg'
  }
  
  // Avatar upload disabled — no change photo controls on this page
  
  // Wire up form submission
  form.onsubmit = updateProfile
}

// Wire up profile button click
function initializeProfileMenu() {
  const profileBtn = document.getElementById('profileButton')
  const logoutBtn = document.getElementById('logoutButton')
  
  if (profileBtn) {
    profileBtn.onclick = () => showProfileDropdown()
  }
  
  if (logoutBtn) {
    logoutBtn.onclick = handleLogout
  }
}

// ============================================
// NOTIFICATION
// ============================================

function showNotification(message) {
  const notification = document.createElement("div")
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2a2a2a;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `
  document.body.appendChild(notification)
  setTimeout(() => notification.remove(), 3000)
}

// ============================================
// PAGE INITIALIZATION
// ============================================

async function initializePage() {
  // Initialize auth state and UI
  updateAuthUI()
  initializeProfileMenu()
  initializeSearch()
  
  // Load persisted product stocks (if any) so UI reflects current inventory
  loadProductStocks()

  // Resolve images (so renders use accessible URLs)
  await resolveAllImages()
  updateCartCount()

  // Home page
  if (document.getElementById("featuredProducts")) {
    renderFeaturedProducts()
  }

  // Products page
  if (document.getElementById("productsGrid")) {
    renderProductsPage()
  }

  // Product detail page
  if (document.getElementById("productDetail")) {
    renderProductDetail()
  }

  // Profile page
  if (document.getElementById('profileForm')) {
    try { initializeProfile() } catch (e) {}
  }

  // Cart page
  if (document.getElementById("cartItems")) {
    renderCartPage()
  }

  // Orders page
  if (document.getElementById('ordersList')) {
    try { renderOrdersPage() } catch (e) {}
  }

    // Auth forms
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  const registerForm = document.getElementById("registerForm")
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister)
  }

  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm)
  }

    // wire up Proceed to Checkout button (if present)
    try {
        const checkoutBtn = document.getElementById('checkoutBtn')
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', (e) => {
                e.preventDefault()
                const cart = JSON.parse(localStorage.getItem('fitnestCart')) || []
                if (!cart.length) {
                    alert('Your cart is empty. Please add items before checkout.')
                    return
                }
                // navigate to checkout page
                window.location.href = 'checkout.html'
            })
        }
    } catch (e) {
        // fail silently if DOM not ready or not present
        console.warn('checkout button wiring failed', e)
    }
}

// (site search removed)

// -------------------------
// Product stock persistence
// -------------------------
function getStoredProductStocks() {
  try {
    const raw = localStorage.getItem('fitnestProductStocks')
    return raw ? JSON.parse(raw) : {}
  } catch (e) { return {} }
}

function saveProductStocks() {
  const map = {}
  products.forEach(p => {
    if (p.sizes && Array.isArray(p.sizes)) {
      map[p.id] = {}
      p.sizes.forEach(s => { map[p.id][s.label] = s.stock })
    }
  })
  localStorage.setItem('fitnestProductStocks', JSON.stringify(map))
}

function loadProductStocks() {
  const stored = getStoredProductStocks()
  Object.keys(stored).forEach(pid => {
    const p = products.find(x => String(x.id) === String(pid))
    if (!p || !p.sizes) return
    Object.keys(stored[pid]).forEach(lbl => {
      const s = p.sizes.find(x => String(x.label) === String(lbl))
      if (s) s.stock = Number(stored[pid][lbl])
    })
  })
}

// Process an order and decrement stocks. Will only process each orderId once.
function processOrder(cart = [], orderId = null) {
  if (!cart || !cart.length) return
  try {
    const processedRaw = localStorage.getItem('fitnestProcessedOrders')
    const processed = processedRaw ? JSON.parse(processedRaw) : []
    if (orderId && processed.includes(orderId)) return // already processed

    // decrement stocks
    cart.forEach(item => {
      const p = products.find(x => x.id === item.id)
      if (!p || !p.sizes) return
      const s = p.sizes.find(x => String(x.label) === String(item.size))
      if (!s) return
      s.stock = Math.max(0, (s.stock || 0) - (item.quantity || 0))
    })

    // persist
    saveProductStocks()

    if (orderId) {
      processed.push(orderId)
      localStorage.setItem('fitnestProcessedOrders', JSON.stringify(processed))
    }
    // notify other windows/tabs and listeners that stocks changed
    try {
      // BroadcastChannel for same-origin tabs (modern browsers)
      if ('BroadcastChannel' in window) {
        const bc = new BroadcastChannel('fitnest-channel')
        bc.postMessage({ type: 'stocks-updated', orderId: orderId || null, timestamp: Date.now() })
        bc.close()
      }
      // also set a timestamp in localStorage so older browsers/tabs get a storage event
      localStorage.setItem('fitnestStocksUpdatedAt', Date.now().toString())
    } catch (e) {
      // ignore
    }
  } catch (e) {
    console.warn('processOrder failed', e)
  }
}

// Listen for stock update broadcasts and storage events to refresh UI immediately
function _handleExternalStockUpdate(msg) {
  try {
    // reload persisted stocks into products array
    loadProductStocks()
    // re-render product pages if currently visible
    if (document.getElementById('productDetail')) {
      // if product detail is visible, re-render it so badges/stock update
      try { renderProductDetail() } catch (e) {}
    }
    if (document.getElementById('productsGrid')) {
      try { renderProductsPage() } catch (e) {}
    }
    if (document.getElementById('featuredProducts')) {
      try { renderFeaturedProducts() } catch (e) {}
    }
    // update cart summary UI where relevant
    try { updateCartCount(); updateCartSummary(); } catch (e) {}
  } catch (e) {
    console.warn('Failed to handle external stock update', e)
  }
}

// BroadcastChannel listener
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    const bc = new BroadcastChannel('fitnest-channel')
    bc.onmessage = (ev) => {
      if (ev && ev.data && ev.data.type === 'stocks-updated') {
        _handleExternalStockUpdate(ev.data)
      }
    }
  } catch (e) {
    // ignore
  }
}

// Storage event listener for cross-tab notifications (fires in other tabs)
window.addEventListener('storage', (e) => {
  if (!e) return
  if (e.key === 'fitnestStocksUpdatedAt') {
    _handleExternalStockUpdate({ source: 'storage', ts: e.newValue })
  }
})

// expose for other pages
window.processOrder = processOrder

// ============================================
// ORDERS STORAGE + PAGE
// ============================================
function getStoredOrders() {
  try { return JSON.parse(localStorage.getItem('fitnestOrders')) || [] } catch (e) { return [] }
}

function saveStoredOrders(list) {
  try { localStorage.setItem('fitnestOrders', JSON.stringify(list)) } catch (e) {}
}

function addOrder(order) {
  const orders = getStoredOrders()
  // idempotent by orderId
  if (order && order.orderId && !orders.some(o => o.orderId === order.orderId)) {
    orders.push(order)
    saveStoredOrders(orders)
  }
}

function renderOrdersPage() {
  const container = document.getElementById('ordersList')
  const user = getCurrentUser()
  const allOrders = getStoredOrders()

  const tfSelect = document.getElementById('ordersTimeframe')
  const searchInput = document.getElementById('ordersSearch')
  const searchBtn = document.getElementById('ordersSearchBtn')

  function render() {
    let visible = user ? allOrders.filter(o => String(o.userId || '') === String(user.id)) : allOrders
    const days = parseInt(tfSelect?.value || '90')
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
    visible = visible.filter(o => (o.placedAt || 0) >= cutoff)
    const q = (searchInput?.value || '').trim().toLowerCase()
    if (q) {
      visible = visible.filter(o => String(o.orderId).toLowerCase().includes(q) || (o.cart || []).some(i => String(i.name).toLowerCase().includes(q)))
    }

    if (!visible.length) { container.innerHTML = '<p>No orders found.</p>'; return }

    container.innerHTML = visible.map(o => {
      const when = new Date(o.placedAt || Date.now()).toLocaleString()
      const total = formatINR(o.total || 0)
      const first = (o.cart || [])[0] || {}
      const thumb = first.image || '/public/placeholder.jpg'
      const title = (o.cart || []).map(i => i.name).join(', ')
      const shipTo = o.shipping && o.shipping.fullName ? o.shipping.fullName : '—'
      return `
        <div class="order-card">
          <div class="order-header">
            <div class="meta">
              <div class="kv"><strong>ORDER PLACED</strong><span>${when}</span></div>
              <div class="kv"><strong>TOTAL</strong><span>${total}</span></div>
              <div class="kv"><strong>SHIP TO</strong><span>${shipTo}</span></div>
            </div>
            <div class="kv"><strong>ORDER #</strong><span>${o.orderId}</span></div>
          </div>
          <div class="order-body">
            <img class="order-thumb" src="${thumb}" alt="" />
            <div class="order-info">
              <div class="order-title">${title}</div>
              <div class="order-sub">${(o.cart || []).length} item(s)</div>
            </div>
            <div class="order-actions">
              <button class="btn btn-primary" data-act="buy-again" data-first='${JSON.stringify(first).replace(/'/g, '&#39;')}'>Buy it again</button>
              <a class="btn btn-secondary" href="order-success.html">View details</a>
            </div>
          </div>
        </div>`
    }).join('')

    container.querySelectorAll('button[data-act="buy-again"]').forEach(btn => {
      btn.addEventListener('click', () => {
        try { const item = JSON.parse(btn.getAttribute('data-first') || '{}'); if (item && item.id) addToCart(item.id, item.quantity || 1, item.size || null) } catch (e) {}
      })
    })
  }

  tfSelect && tfSelect.addEventListener('change', render)
  searchBtn && searchBtn.addEventListener('click', render)
  searchInput && searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') { e.preventDefault(); render() } })
  render()
}

// expose for order-success to call
window.addOrder = addOrder

// ============================================
// FEATURED PRODUCTS (HOME)
// ============================================

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProducts")
  const featured = products.slice(0, 4)

  container.innerHTML = featured.map((product) => createProductCard(product)).join("")
}

// ============================================
// PRODUCTS PAGE
// ============================================

function renderProductsPage() {
  const container = document.getElementById("productsGrid")
  const filterButtons = document.querySelectorAll(".filter-btn")
  let currentCategory = "all"
  // Read optional search term from URL
  const urlParams = new URLSearchParams(window.location.search)
  let searchTerm = (urlParams.get("search") || "").trim().toLowerCase()

  function render(category = "all", term = "") {
    let list = category === "all" ? products : products.filter((p) => p.category === category)
    if (term) {
      list = list.filter((p) =>
        String(p.name).toLowerCase().includes(term) || String(p.category).toLowerCase().includes(term)
      )
    }
    container.innerHTML = list.map((product) => createProductCard(product)).join("")
  }

  render(currentCategory, searchTerm)

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      currentCategory = btn.dataset.category
      render(currentCategory)
    })
  })

  // Get category from URL
  const category = urlParams.get("category")
  if (category) {
    const btn = document.querySelector(`[data-category="${category}"]`)
    if (btn) btn.click()
  }

  // Hook search input on products page too (if present)
  const searchInput = document.getElementById('siteSearchInput')
  if (searchInput && searchTerm) {
    try { searchInput.value = searchTerm } catch (e) {}
  }
}

// ============================================
// GLOBAL SEARCH (header)
// ============================================
function handleContactForm(e) {
  e.preventDefault()
  const name = document.getElementById('contactName')?.value || ''
  const email = document.getElementById('contactEmail')?.value || ''
  const message = document.getElementById('contactMessage')?.value || ''
  if (!name || !email || !message) {
    showNotification('Please fill all fields')
    return
  }
  const apiBase = window.FITNEST_API_URL || 'http://localhost:8080'
  const url = apiBase + '/api/contact'
  
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  .then(r => {
    if (!r.ok) throw new Error('Server error: ' + r.status)
    return r.json()
  })
  .then(data => {
    if (data.status === 'ok') {
      showNotification('Message sent!')
      try { document.getElementById('contactForm').reset() } catch (e) {}
    } else {
      showNotification(data.message || 'Failed to send message')
    }
  })
  .catch(err => {
    console.error('Contact form error:', err)
    showNotification('Failed to send. Make sure backend is running on http://localhost:8080')
  })
}
function initializeSearch() {
  const form = document.getElementById('siteSearchForm')
  const input = document.getElementById('siteSearchInput')
  if (!form || !input) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const term = (input.value || '').trim()
    // Decide target path based on current location (payment/* is nested)
    let target = 'products.html'
    try {
      if (window.location.pathname.indexOf('/payment/') !== -1) target = '../products.html'
    } catch (e) {}
    const url = target + (term ? ('?search=' + encodeURIComponent(term)) : '')
    window.location.href = url
  })
}

// ============================================
// BACKEND EVENT SENDER (Google Sheets bridge)
// ============================================
function sendEvent(type, key, data) {
  const payload = { type, key, data }
  // Resolve endpoint priority:
  // 1) window.FITNEST_SHEETS_WEBHOOK (e.g., Google Apps Script Web App URL)
  // 2) localStorage key 'fitnestSheetsWebhook'
  // 3) Local Java backend fallback http://localhost:8080/api/events
  let endpoint = null
  try { if (window.FITNEST_SHEETS_WEBHOOK) endpoint = String(window.FITNEST_SHEETS_WEBHOOK) } catch (e) {}
  if (!endpoint) {
    try { const ls = localStorage.getItem('fitnestSheetsWebhook'); if (ls) endpoint = ls } catch (e) {}
  }
  if (!endpoint) {
    endpoint = (window.location.origin && window.location.origin.startsWith('http'))
      ? window.location.origin.replace(/:\\d+$/, ':8080') + '/api/events'
      : 'http://localhost:8080/api/events'
  }
  // Use no-cors to avoid preflight (Apps Script web apps don't handle OPTIONS)
  try {
    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      // Send as plain text to remain a simple request
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    }).catch(() => {})
  } catch (e) {}
}

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = Number.parseInt(urlParams.get("id"))
  const product = products.find((p) => p.id === productId)

  if (!product) {
    document.getElementById("productDetail").innerHTML = "<p>Product not found</p>"
    return
  }

  const container = document.getElementById("productDetail")
  container.innerHTML = `
        <div class="product-detail-image">
      <img src="${product.resolvedImage || product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <p class="product-detail-category">${product.category}</p>
            <h1>${product.name}</h1>
            <p class="product-detail-price">${formatINR(product.price)}</p>
      <p class="product-detail-description">${product.description}</p>
            
            <!-- Size selector -->
            <div class="product-sizes" style="margin-bottom:1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <label style="font-weight:600; color:var(--color-text-secondary);">Select Size</label>
              </div>
              <div class="size-options" id="sizeOptions">
                <!-- sizes rendered by JS -->
              </div>
            </div>
            <div style="margin-bottom: 2rem;">
                <label style="display: block; margin-bottom: 0.5rem;">Quantity</label>
                <div class="quantity-control" style="width: fit-content; margin-bottom: 2rem;">
                    <button type="button" onclick="this.nextElementSibling.value = Math.max(1, parseInt(this.nextElementSibling.value) - 1)">−</button>
                    <input type="number" value="1" min="1" id="detailQuantity" style="width: 50px;">
                    <button type="button" onclick="this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1">+</button>
                </div>
            </div>
            <button class="btn btn-primary" id="detailAddBtn">Add to Cart</button>
        </div>
    `

  // Product details block (Size & Fit, Material & Care, Specifications, Complete The Look)
  const detailsEl = document.createElement('div')
  detailsEl.className = 'product-specs'
  detailsEl.id = 'productDetails'
  const matCare = (product.materialCare && product.materialCare.length) ? product.materialCare.map(c=>`<div>${c}</div>`).join('') : ''
  const specs = product.specifications || {}
  const specRows = Object.keys(specs).map(k => `<div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${specs[k]}</div></div>`).join('')
  detailsEl.innerHTML = `
    <h2>Product Details</h2>
    <p class="spec-sub">${product.description}</p>
    <div class="spec-columns">
      <div class="spec-left">
        <h3>Size & Fit</h3>
        <div class="spec-text">${product.sizeFit || ''}</div>
        <h3 style="margin-top:1rem">Material & Care</h3>
        <div class="spec-text">${matCare}</div>
      </div>
      <div class="spec-right">
        <h3>Specifications</h3>
        <div class="specs-grid">${specRows}</div>
      </div>
    </div>
    <h3 style="margin-top:1.25rem">Complete The Look</h3>
    <p class="spec-text">${product.completeLook || ''}</p>
  `

  // append after product detail block
  container.appendChild(detailsEl)

  // Render size options
  const sizeOptionsEl = document.getElementById('sizeOptions')
  let selectedSize = null
  if (product.sizes && product.sizes.length) {
    sizeOptionsEl.innerHTML = product.sizes
      .map((s, idx) => {
        const disabled = s.stock <= 0
  const zeroClass = s.stock <= 0 ? ' zero' : ''
  const badge = `<span class="size-badge${zeroClass}">${s.stock} left</span>`
        return `
          <div class="size-option ${disabled ? 'disabled' : ''}" data-size="${s.label}" data-stock="${s.stock}" tabindex="0" role="button" aria-pressed="false" aria-label="Size ${s.label}, ${s.stock} left${s.stock <= 0 ? ', out of stock' : ''}" aria-disabled="${disabled ? 'true' : 'false'}">
            <span class="size-label">${s.label}</span>
            ${badge}
          </div>
        `
      })
      .join('')

    // add click handlers
    const optionEls = sizeOptionsEl.querySelectorAll('.size-option')
    optionEls.forEach((el) => {
      if (el.classList.contains('disabled')) return
      el.addEventListener('click', () => {
        optionEls.forEach((o) => o.classList.remove('selected'))
        el.classList.add('selected')
        el.setAttribute('aria-pressed','true')
        selectedSize = el.dataset.size
        // enforce max quantity based on stock
        const qtyInput = document.getElementById('detailQuantity')
        const stock = parseInt(el.dataset.stock) || Infinity
        if (qtyInput) {
          qtyInput.max = stock
          if (parseInt(qtyInput.value) > stock) qtyInput.value = stock
        }
      })
      // keyboard support
      el.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault(); el.click()
        }
      })
    })
  } else {
    sizeOptionsEl.innerHTML = '<div style="color:var(--color-text-muted)">One size available</div>'
  }

  // size chart removed: no modal or chart link displayed

  // wire Add to Cart to include selected size
  const addBtn = document.getElementById('detailAddBtn')
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty = Math.max(1, parseInt(document.getElementById('detailQuantity').value) || 1)
      // if product has sizes, require selection
      if (product.sizes && product.sizes.length && !selectedSize) {
        alert('Please select a size before adding to cart.')
        return
      }
      addToCart(product.id, qty, selectedSize)
    })
  }

  // Render related products
  const relatedContainer = document.getElementById("relatedProducts")
  const related = products.filter((p) => p.category === product.category && p.id !== product.id)
  relatedContainer.innerHTML = related.map((p) => createProductCard(p)).join("")
}

// ============================================
// CART PAGE
// ============================================

function renderCartPage() {
  const cart = getCart()
  const container = document.getElementById("cartItems")
  const emptyState = document.getElementById("emptyCart")

  if (cart.length === 0) {
    container.style.display = "none"
    emptyState.style.display = "block"
    document.querySelector(".cart-summary").style.display = "none"
    return
  }

  container.style.display = "flex"
  emptyState.style.display = "none"
  document.querySelector(".cart-summary").style.display = "block"

  container.innerHTML = cart
    .map(
      (item, idx) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-price-row">${formatINR(item.price)}</p>
                ${((item.size) || (products.find(p => p.id === item.id) && products.find(p => p.id === item.id).sizes && products.find(p => p.id === item.id).sizes.length)) ? `<p class="cart-size">Size: <strong>${item.size || '(not selected)'}</strong> <button class="btn btn-link" style="padding:0 0.4rem; font-size:0.9rem; vertical-align:middle" onclick="event.stopPropagation(); editCartItem(${item.id}, '${item.size || ''}', ${idx})">Change</button></p>` : ''}
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1}, '${item.size || ''}')">−</button>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, parseInt(this.value), '${item.size || ''}')">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1}, '${item.size || ''}')">+</button>
                </div>
            </div>
            <div class="cart-item-price">${formatINR(item.price * item.quantity)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size || ''}'); renderCartPage();">Remove</button>
        </div>
    `,
    )
    .join("")

  updateCartSummary()
}

function updateQuantity(productId, quantity, size = null) {
  if (quantity > 0) {
    updateCartItemQuantity(productId, quantity, size)
    renderCartPage()
  }
}

function updateCartSummary() {
  const cart = getCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  document.getElementById("subtotal").textContent = formatINR(subtotal)
  document.getElementById("shipping").textContent = formatINR(shipping)
  document.getElementById("total").textContent = formatINR(total)
}

// ============================================
// PRODUCT CARD COMPONENT
// ============================================

function createProductCard(product) {
  // If the product has size options, prefer opening the modal so user can pick size first.
  const addAction = (product.sizes && Array.isArray(product.sizes) && product.sizes.length)
    ? `showProductDetailsModal(${product.id})`
    : `addToCart(${product.id})`

  return `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <div class="product-image">
        <img src="${product.resolvedImage || product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${formatINR(product.price)}</p>
                <div style="display:flex;gap:0.5rem;align-items:center">
                  <button class="btn btn-primary" onclick="event.stopPropagation(); ${addAction}">Add to Cart</button>
                  <button class="btn btn-link" onclick="event.stopPropagation(); showProductDetailsModal(${product.id})">View full details</button>
                </div>
            </div>
        </div>
    `
}

// Render a modal with full product details (used on product listings and anywhere)
function showProductDetailsModal(productId) {
  const product = products.find(p => p.id === productId)
  if (!product) return

  // Ensure any open profile dropdown stays visible
  const profileDropdown = document.getElementById('profileDropdown')
  if (profileDropdown && profileDropdown.classList.contains('active')) {
    profileDropdown.style.zIndex = '9999'
  }

  // create overlay
  const overlay = document.createElement('div')
  overlay.className = 'product-details-overlay'

  const modal = document.createElement('div')
  modal.className = 'product-details-modal'

  const matCare = (product.materialCare && product.materialCare.length) ? product.materialCare.map(c=>`<div>${c}</div>`).join('') : ''
  const specs = product.specifications || {}
  const specRows = Object.keys(specs).map(k => `<div class="spec-item"><div class="spec-key">${k}</div><div class="spec-val">${specs[k]}</div></div>`).join('')

  modal.innerHTML = `
    <div class="modal-header">
      <h2 id="modal-title-${product.id}">${product.name}</h2>
      <button class="modal-close" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      <div class="product-modal-top" style="display:flex;gap:1rem;align-items:flex-start">
        <div style="flex:0 0 220px"><img src="${product.resolvedImage || product.image}" alt="${product.name}" style="width:100%;border-radius:6px;object-fit:cover"/></div>
        <div style="flex:1">
          <p class="product-detail-price">${formatINR(product.price)}</p>
          <p class="spec-sub">${product.description}</p>
          <h4>Size & Fit</h4>
          <div class="spec-text">${product.sizeFit || ''}</div>

          <!-- Modal size selector and quantity -->
          <div class="modal-size-row">
            <div id="modalSizeOptions" style="display:flex;gap:0.5rem;align-items:center"></div>
            <div class="modal-quantity">
              <label style="font-weight:600; color:var(--color-text-secondary);">Qty</label>
              <input id="modalQty" type="number" value="1" min="1">
            </div>
          </div>

          <h4 style="margin-top:0.5rem">Material & Care</h4>
          <div class="spec-text">${matCare}</div>
        </div>
      </div>
      <div style="margin-top:1rem">
        <h4>Specifications</h4>
        <div class="specs-grid">${specRows}</div>
      </div>
      <div style="margin-top:1rem">
        <h4>Complete The Look</h4>
        <p class="spec-text">${product.completeLook || ''}</p>
      </div>
    </div>
    <div class="modal-footer" style="text-align:right;margin-top:1rem">
      <button id="modalAddBtn" class="btn btn-primary">Add to Cart</button>
      <a class="btn btn-link" href="product.html?id=${product.id}#productDetails">Open product page</a>
    </div>
  `

  overlay.appendChild(modal)
  document.body.appendChild(overlay)

  // Accessibility: mark dialog and make background inert, trap focus
  try {
    modal.setAttribute('role', 'dialog')
    modal.setAttribute('aria-modal', 'true')
    modal.setAttribute('aria-labelledby', `modal-title-${product.id}`)
  } catch (e) {}

  // make background inert for assistive tech
  setBackgroundInert(overlay, true)

  // capture opener to restore focus later
  const opener = document.activeElement

  // close helper ensures release of trap and restores background
  let releaseTrap = null
  function closeModal() {
    try { if (typeof releaseTrap === 'function') releaseTrap() } catch (e) {}
    try { setBackgroundInert(overlay, false) } catch (e) {}
    overlay.remove()
  }

  // trap focus inside the modal (Escape will call closeModal via trap)
  try { releaseTrap = trapFocus(modal, { onClose: closeModal, restoreFocusTo: opener }) } catch (e) {}

  // animate in (already handled via CSS keyframes)
  try { modal.querySelector('.modal-close').focus() } catch(e) {}

  // close handling
  modal.querySelector('.modal-close')?.addEventListener('click', () => closeModal())
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal() })

  // build modal size options and wire quantity/size behavior
  const modalSizeOptions = modal.querySelector('#modalSizeOptions')
  let modalSelectedSize = null
  const modalQtyInput = modal.querySelector('#modalQty')
  if (product.sizes && product.sizes.length) {
    modalSizeOptions.innerHTML = product.sizes.map(s => {
      const disabled = s.stock <= 0
      const zeroClass = s.stock <= 0 ? ' zero' : ''
      const badge = `<span class="modal-badge${zeroClass}">${s.stock} left</span>`
      return `<div class="size-option ${disabled ? 'disabled' : ''}" data-size="${s.label}" data-stock="${s.stock}" tabindex="0" role="button" aria-label="Size ${s.label}, ${s.stock} left${s.stock <= 0 ? ', out of stock' : ''}" aria-disabled="${disabled ? 'true' : 'false'}">${s.label}${badge}</div>`
    }).join('')

    const modalOptionEls = modalSizeOptions.querySelectorAll('.size-option')
    modalOptionEls.forEach(el => {
      if (el.classList.contains('disabled')) return
      el.addEventListener('click', () => {
        modalOptionEls.forEach(o => o.classList.remove('selected'))
        el.classList.add('selected')
        modalSelectedSize = el.dataset.size
        const stock = parseInt(el.dataset.stock) || Infinity
        if (modalQtyInput) {
          modalQtyInput.max = stock
          if (parseInt(modalQtyInput.value) > stock) modalQtyInput.value = stock
        }
      })
      el.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click() } })
    })
  } else {
    modalSizeOptions.innerHTML = '<div style="color:var(--color-text-secondary)">One size available</div>'
  }

  // wire Add to Cart from modal (respect selected size and qty)
  const modalAdd = modal.querySelector('#modalAddBtn')
  if (modalAdd) {
    modalAdd.addEventListener('click', () => {
      const qty = Math.max(1, parseInt(modalQtyInput.value) || 1)
      if (product.sizes && product.sizes.length && !modalSelectedSize) {
        alert('Please select a size before adding to cart.')
        return
      }
      addToCart(product.id, qty, modalSelectedSize)
      overlay.remove()
    })
  }
}

// (Auth forms are handled above with full user management logic)

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", initializePage)

