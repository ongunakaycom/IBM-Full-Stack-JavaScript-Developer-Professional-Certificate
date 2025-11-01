# 🎁 GiftLink - Full-Stack JavaScript Capstone Project

A full-stack web application built with React and Node.js, showcasing a gift marketplace with authentication, search, and user profiles. This project emphasizes modern DevOps practices, CI/CD pipelines, MongoDB integration, and responsive design. Part of the IBM Full-Stack JavaScript Developer Professional Certificate.

---

## 📸 Preview

![GiftLink Screenshot](giftlink-frontend/public/static/background-gifts.jpg)  
> Modern, responsive UI powered by React, Chakra UI, and custom CSS.

---

## 🚀 Tech Stack

| Category          | Technology                                   |
|------------------|-----------------------------------------------|
| Frontend         | React, React Router, CSS                     |
| Backend          | Node.js, Express                             |
| Database         | MongoDB                                      |
| Authentication   | JWT, bcrypt                                  |
| State/Context    | React Context API                             |
| Forms & Validation | Formik, Yup                                |
| Icons            | Font Awesome, React Icons                     |
| DevOps/CI        | GitHub Actions                               |
| Containerization | Docker                                       |
| Build Tools      | npm, react-scripts                           |

---

## 📂 Project Structure

```text
f:/HDD/github/IBM-Full-Stack-JavaScript-Developer-Professional-Certificate/
├── giftlink-backend/
│   ├── app.js                # Express app entry point
│   ├── logger.js             # Logger configuration
│   ├── models/               # Database models
│   │   └── db.js
│   ├── package.json          # Backend dependencies & scripts
│   ├── routes/               # API routes
│   │   ├── AuthRoutes.js
│   │   ├── giftRoutes.js
│   │   └── searchRoutes.js
│   └── util/
│       └── import-mongo/     # MongoDB import utilities
│           ├── gifts.json
│           ├── index.js
│           └── package.json
├── giftlink-frontend/
│   ├── package.json
│   ├── public/               # Static assets & HTML
│   │   ├── images/
│   │   ├── index.html
│   │   └── static/
│   └── src/                  # React source code
│       ├── components/       # UI components
│       ├── context/          # Auth context
│       ├── App.js
│       └── index.js
├── LICENSE
└── README.md
````

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ongunakaycom/IBM-Full-Stack-JavaScript-Developer-Professional-Certificate.git
cd IBM-Full-Stack-JavaScript-Developer-Professional-Certificate/giftlink-backend

# Install backend dependencies
npm install

# Start backend server
npm start
```

```bash
# Frontend setup
cd ../giftlink-frontend
npm install
npm start
```

> Backend runs on `http://localhost:5000` and frontend on `http://localhost:3000` by default.

---

## 🧪 Run Tests

```bash
# Run backend tests
cd giftlink-backend
npm test

# Run frontend tests
cd giftlink-frontend
npm test
```

---

## 🏗️ Build for Production

```bash
# Frontend production build
cd giftlink-frontend
npm run build
```

---

## ⚙️ GitHub Actions (CI/CD)

The project uses **GitHub Actions** to:

* ✅ Run lint checks and tests on pull requests
* 🚀 Deploy to hosting platforms like Netlify, Vercel, or GitHub Pages
* 🔍 Ensure code quality with automated builds

> Sample workflow file: `.github/workflows/deploy.yml`

```yaml
name: Full-Stack CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
```

---

## 🔐 Features

* User registration and login with JWT authentication
* Add, search, and view gifts
* User profile management
* RESTful API design with Express.js
* MongoDB database integration
* Responsive frontend built with React
* CI/CD workflow with GitHub Actions

---

## 🤝 Contributions

PRs and feedback are welcome! Feel free to fork, contribute, or improve upon this learning project.

---

## About Me

I'm Ongun Akay, a Senior Full-Stack Developer with expertise in JavaScript, React, Node.js, and modern DevOps practices.

* 🌱 Currently focusing on full-stack JavaScript development and advanced React patterns
* 💼 LinkedIn: [linkedin.com/in/ongunakay](https://linkedin.com/in/ongunakay)
* 🧑‍💻 GitHub: [github.com/ongunakaycom](https://github.com/ongunakaycom)
* 📬 Email: [info@ongunakay.com](mailto:info@ongunakay.com)

```