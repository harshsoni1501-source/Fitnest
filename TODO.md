# TODO: Add Buyer/Seller Login Pages and Backend Auth

## Frontend Tasks
- [x] Create `frontend/login-buyer.html` with form for buyer login
- [x] Create `frontend/login-seller.html` with form for seller login
- [x] Update `frontend/js/app.js` to add `API_BASE`, `loginWithRole` function, and form wiring
- [x] Update `frontend/index.html` to add links to login pages in nav

## Backend Tasks
- [x] Create `backend/src/AuthController.java` with POST /api/auth/login endpoint
- [x] Update `backend/src/FitnestServer.java` to register the auth endpoint

## Testing & Verification
- [ ] Build backend with `mvn clean package`
- [ ] Run server and test login endpoints
- [ ] Verify frontend pages load and forms work
- [ ] Update README with verification steps
