# 🚀 Nexus ERP & E-Commerce System

![Project Banner](https://via.placeholder.com/1200x400?text=Nexus+ERP+System+Preview) 
*(Replace this link with a real screenshot of your project)*

A robust, scalable **Full Stack E-Commerce and ERP solution**. This project demonstrates a modular RESTful API built with **Node.js & SQL**, integrated with a modern, responsive frontend using **Next.js & Tailwind CSS**.

The system handles complex business logic including role-based authentication, product inventory management, category hierarchy, and order processing.

---

## 🛠️ Tech Stack

### **Backend**
* ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) **Node.js** - Server-side runtime.
* ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) **Express.js** - Web framework for API routing.
* ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) **MySQL** - Relational Database (Raw SQL Queries).
* **JWT** - Secure Authentication & Authorization.
* **Bcrypt** - Password Hashing.

### **Frontend**
* ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) **Next.js 14** - React Framework (App Router).
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Modern styling.
* **Lucide React** - Beautiful icons.
* **React Hot Toast** - Notifications & Alerts.

---

## ✨ Key Features

### 🔐 Security & Authentication
* **User Registration & Login:** Secure JWT-based authentication.
* **Role-Based Access Control (RBAC):** Distinct panels for **Admins** and **Users**.
* **Protected Routes:** Middleware to secure sensitive endpoints.

### 📦 Product & Inventory Management
* **CRUD Operations:** Create, Read, Update, and Delete products (Admin only).
* **Soft Delete System:** Data integrity is preserved using `is_deleted` flags instead of permanent deletion.
* **Stock Tracking:** Real-time monitoring of stock quantities and SKU management.
* **Search & Filtering:** Dynamic product filtering by category and search queries.

### 📂 Category Management
* **Dynamic Categories:** Create and manage product categories.
* **Validation:** Prevents deletion of categories linked to active products (Foreign Key integrity).

### 🛒 Order System
* **Shopping Cart:** Persistent cart management on the frontend.
* **Order Processing:** Seamless conversion of cart items into database orders.
* **Order History:** Users can view their past orders and statuses.

### 📊 Admin Dashboard
* **Overview:** Visualize products, users, and orders in one place.
* **User Management:** Promote users to Admins or delete accounts.
* **Interactive UI:** Modals for editing and confirmation popups for critical actions.

---

## 🗄️ Database Schema

The project uses a relational **SQL** database with the following structure:

* **Users:** Stores user info, hashed passwords, and roles (`User`/`Admin`).
* **Products:** Stores product details, pricing, stock, and `category_id`.
* **Categories:** Manages product classification.
* **Orders:** Tracks order totals, dates, and user ownership.
* **OrderDetails:** Links products to orders with specific quantities.

---

## 🚀 API Endpoints

### **Authentication**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Register a new user |
| `POST` | `/auth/login` | Login and receive JWT |

### **Products**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/product` | Get all available products |
| `POST` | `/product/create` | Add new product (Admin) |
| `PUT` | `/product/update` | Update product details (Admin) |
| `DELETE` | `/product/delete` | Soft delete product (Admin) |

### **Categories**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/category/all` | Get all categories |
| `POST` | `/category/create` | Create new category (Admin) |
| `PUT` | `/category/update` | Update category (Admin) |

### **Orders**
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/order/create` | Place a new order |
| `GET` | `/order` | Get user order history |

---

## 💻 Installation & Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/nexus-erp.git](https://github.com/your-username/nexus-erp.git)
    cd nexus-erp
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    npm install
    # Setup your .env file with DB_HOST, DB_USER, DB_PASS, DB_NAME
    npm start
    ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

4.  **Database Import**
    * Import the provided `database.sql` file into your MySQL server to set up the tables and constraints.

---

## 📸 Screenshots

*(Add screenshots of your Dashboard, Shop Page, and Cart here)*

| Shop Page | Admin Dashboard |
| :---: | :---: |
| ![Shop](https://via.placeholder.com/400x200) | ![Dashboard](https://via.placeholder.com/400x200) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

**Ahmed** - [LinkedIn Profile](https://www.linkedin.com/in/your-profile)
