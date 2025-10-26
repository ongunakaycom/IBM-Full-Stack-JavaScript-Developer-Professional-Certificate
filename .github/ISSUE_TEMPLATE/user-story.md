## User Story 1
**Title:** `[User Story] User Registration`  
**Label:** `new`  

**User Story:**  
As a new user, I want to register with my email and password so that I can create an account and access personalized features.  

**Acceptance Criteria:**  
- [ ] Users can enter email and password to register  
- [ ] Password is securely hashed using bcrypt  
- [ ] Registration errors are displayed (email already in use, invalid format)  

---

## User Story 2
**Title:** `[User Story] User Login`  
**Label:** `new`  

**User Story:**  
As a registered user, I want to log in using my credentials so that I can access my account securely.  

**Acceptance Criteria:**  
- [ ] Users can enter email and password to log in  
- [ ] JWT token is generated on successful login  
- [ ] Incorrect credentials show error messages  

---

## User Story 3
**Title:** `[User Story] Gift Search`  
**Label:** `backlog`  

**User Story:**  
As a user, I want to search for gifts by keywords so that I can find relevant items quickly.  

**Acceptance Criteria:**  
- [ ] Search bar is available on the main page  
- [ ] Results update dynamically based on keywords  
- [ ] No results message is displayed if nothing matches  

---

## User Story 4
**Title:** `[User Story] Gift Filtering`  
**Label:** `backlog`  

**User Story:**  
As a user, I want to filter gifts by category or price so that I can narrow down my choices.  

**Acceptance Criteria:**  
- [ ] Users can filter by category  
- [ ] Users can filter by price range  
- [ ] Filters work together with search  

---

## User Story 5
**Title:** `[User Story] View Gift Details`  
**Label:** `icebox`  

**User Story:**  
As a user, I want to view detailed information about a gift so that I can make informed purchasing decisions.  

**Acceptance Criteria:**  
- [ ] Clicking a gift opens a details page  
- [ ] Details page displays image, price, description  
- [ ] Users can navigate back to search or main page  

---

## User Story 6
**Title:** `[User Story] User Profile Management`  
**Label:** `icebox`  

**User Story:**  
As a user, I want to view and edit my profile information so that I can manage my personal data.  

**Acceptance Criteria:**  
- [ ] Users can update name, email, and password  
- [ ] Changes are saved to MongoDB  
- [ ] Validation prevents invalid input  

---

## User Story 7
**Title:** `[User Story] Refactor Backend Routes`  
**Label:** `technical debt`  

**User Story:**  
As a developer, I want to refactor backend API routes so that the codebase is cleaner and easier to maintain.  

**Acceptance Criteria:**  
- [ ] Routes are modularized by feature  
- [ ] Duplicate logic is removed  
- [ ] Unit tests pass after refactoring  

---

## User Story 8
**Title:** `[User Story] Optimize MongoDB Queries`  
**Label:** `technical debt`  

**User Story:**  
As a developer, I want to optimize MongoDB queries so that data retrieval is faster and more efficient.  

**Acceptance Criteria:**  
- [ ] Queries use proper indexing  
- [ ] Aggregation pipelines are optimized  
- [ ] Performance tests show reduced response time  
