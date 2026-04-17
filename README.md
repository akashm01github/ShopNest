# 🛒 ShopNest  — E-Commerce Web App

A modern, fully responsive e-commerce application built with React and Redux Toolkit. It features role-based access control, a shopping cart, and a clean UI powered by Tailwind CSS.

---

## 📸 Screenshots

### 🏠 Home Page (Guest View)
> When a user is **not logged in**, only the Home page is visible with a **Sign In** option.

![Home Page Guest View](./screenshots/home-guest.png)

---

### 🔐 After Login — Add to Cart
> Once logged in, users can **browse products** and **add items to their cart**.

![After Login Cart](./screenshots/after-login-cart.png)

---

### 🛡️ Admin Panel — Manage Products
> The **Admin** role has exclusive access to **add, edit, and delete products**.

![Admin Panel](./screenshots/admin-panel.png)

---

### 🛒 Cart Page
> Users can **view, update quantities, and remove items** from their cart before checkout.

![Cart Page](./screenshots/cart-page.png)

---

## 🛠️ Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react" alt="React" title="React" />
  <img src="https://skillicons.dev/icons?i=redux" alt="Redux Toolkit" title="Redux Toolkit" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" title="Tailwind CSS" />
  <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" title="JavaScript" />
  <img src="https://skillicons.dev/icons?i=vite" alt="Vite" title="Vite" />
  <img src="https://skillicons.dev/icons?i=nodejs" alt="JSON Server" title="JSON Server (Mock API)" />
  <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code" title="VS Code" />
  <img src="https://skillicons.dev/icons?i=git" alt="Git" title="Git" />
</p>

| Technology | Purpose |
|---|---|
| **React** | UI library for building components |
| **Redux Toolkit** | State management (auth, cart, products) |
| **Tailwind CSS** | Utility-first styling |
| **JSON Server** | Mock REST API / backend |
| **Vite** | Fast development build tool |

---

## ✨ Features

- 🔒 **Guest Access** — Only the Home page is accessible without login
- 🔐 **Authentication** — Sign In / Sign Out with protected routes
- 🛒 **Shopping Cart** — Add, remove, and manage cart items
- 👑 **Admin Role** — Admins can create, update, and delete products
- 📦 **Cart Page** — Dedicated page to review items before checkout
- 📱 **Responsive Design** — Works on all screen sizes

---

## 👥 User Roles

| Role | Permissions |
|---|---|
| **Guest** | View Home page, Sign In |
| **User** | Browse products, Add to cart, View cart |
| **Admin** | All user permissions + Add / Edit / Delete products |

---

## 📁 Project Structure

```
src/
├── assets/                        # Images, icons, static files
├── components/
│   └── Nav.jsx                    # Navbar component
├── pages/
│   ├── admin/                     # Admin panel pages
│   ├── Cart.jsx                   # Cart page
│   ├── Home.jsx                   # Home / landing page
│   ├── Login.jsx                  # Login page
│   ├── Products.jsx               # Products listing page
│   └── Register.jsx               # Register / Sign Up page
├── routes/
│   ├── AuthWrapper.jsx            # Protects routes based on auth state
│   └── MainRoutes.jsx             # All app routes defined here
├── store/
│   ├── actions/
│   │   ├── cartActions.js         # Cart-related Redux actions
│   │   ├── productActions.js      # Product-related Redux actions
│   │   └── userActions.js         # User / auth Redux actions
│   ├── reducers/                  # Redux reducers
│   └── store.js                  # Redux store configuration
├── App.jsx                        # Root component
├── index.css                      # Global styles
├── main.jsx                       # React entry point
└── PageNotFound.jsx               # 404 page
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/akashm01github/ShopNest.git

# 2. Navigate to project directory
cd ShopNest

# 3. Install dependencies
npm install
```

### Run the App

```bash
# Start JSON Server (mock API) on port 3000
npx json-server --watch db.json --port 3000

# Start the React development server
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗄️ JSON Server (Mock API)

The `db.json` file acts as the database. Sample structure:

```json
{
  "users": [
    { "id": 1, "name": "hopkins", "email": "william@gmail.com", "cart":[], "password": "1234", "isAdmin": true },
    { "id": 2, "name": "John", "email": "john@shop.com", "cart":[],"password":"user123","isAdmin": false 
     
     }
  ],
  "products": [
    { "id": 1, "name": "Product Name", "price": 29.99, "image": "url", "category": "Electronics" }
  ]
}
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch — `git checkout -b feature/amazing-feature`
3. Commit your changes — `git commit -m 'Add amazing feature'`
4. Push to the branch — `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

> Made with ❤️ by **[Akash Mukherjee](https://github.com/akashm01github)**

