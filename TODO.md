# TODO: Add Sellers Page to Fitnest Frontend with Backend Support

## Backend Changes
- [x] Check backend/db/schema.sql for existing products table
- [x] Add products table to schema.sql if missing (columns: id, name, description, price, category, image_url)
- [x] Create backend/src/ProductController.java with POST /api/products endpoint to save product data

## Frontend Changes
- [x] Update frontend/index.html: Add "Sellers" link to navigation
- [x] Update frontend/index.html: Add hidden sellers section with product form (name, description, price, category select, image file input)
- [x] Update frontend/css/style.css: Add minimal styles for sellers form
- [x] Update frontend/js/app.js: Add event listeners for nav links to show/hide sections
- [x] Update frontend/js/app.js: Add form submission handler with validation and fetch to backend

## Testing
- [x] Run backend server
- [x] Open frontend in browser, test sellers page navigation and form submission
- [x] Verify product data is saved in database
