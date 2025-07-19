# 🛒 Product API – Backend Developer Test

This project provides a simple RESTful Product API for an e-commerce platform using **Node.js** and **Express**. It integrates with [FakeStore API](https://fakestoreapi.com/products/) and allows you to retrieve and optionally manage product data locally.

---

## 🔧 Tech Stack

- **Node.js** – JavaScript runtime
- **Express** – Web framework
- **Axios** – HTTP client for fetching products
- **File System (fs)** – To save and read product data locally

---

## 📁 Folder Structure

```
backend/
├── assets/
│   └── screenshot.png  # sample screenshots
├── controllers/
│   └── productController.js  # API route Controller
├── data/
│   └── products.json       # Cached local data from FakeStore API
├── routes/
│   └── productRoutes.js    # API route handlers
├── app.js                  # Express server entry point
├── package.json
└── README.md               # You're here!
```

---

## 🚀 Getting Started

### 1. Navigate to the project folder:
```bash
cd backend
```

### 2. Initialize and install dependencies:
```bash
npm install
```

### 3. Start the server:
```bash
node app.js
```

By default, the server runs at:  
👉 `http://localhost:5000`

---

## 🌐 API Endpoints

| Method | Endpoint                  | Description                           |
|--------|---------------------------|---------------------------------------|
| GET    | `/products`               | Fetch all products                    |
| GET    | `/products/:id`           | Get a product by its ID               |
| GET    | `/products?category=...`  | Filter products by category           |
| POST   | `/products`               | Add a new product (validates input)   |

---

## 📬 Sample Postman Requests

### ➤ Get All Products

**Method:** `GET`  
**URL:** `http://localhost:5000/products`

---

### ➤ Get Product by ID

**Method:** `GET`  
**URL:** `http://localhost:5000/products/2`

---

### ➤ Filter by Category

**Method:** `GET`  
**URL:**  
```
http://localhost:5000/products?category=men's clothing
```

---

### ➤ Add New Product

**Method:** `POST`  
**URL:** `http://localhost:5000/products`  
**Headers:**
```json
{
  "Content-Type": "application/json"
}
```
**Body (raw JSON):**
```json
{
  "title": "Test product 1",
  "price": 0.01,
  "description": "test description..",
  "category": "test1",
  "image": ""
}
```

---

## ✅ Features

- Automatically fetches and stores product data on the first run (`products.json`).
- Loads data from local file on subsequent requests for better speed.
- Modular structure: easy to expand routes, validation, and data storage.

---

## 📌 Notes

- This backend was built under a **time constraint** as part of a technical hiring test.
- A production-grade version can be extended with:
  - MongoDB or PostgreSQL for persistent storage.
  - JWT authentication.
  - Pagination and sorting.
  - Unit tests and API docs.

---

## 👨‍💻 Author

Built by Vignesh Kumar R,  
Backend Developer Candidate.  
📫 [vigneshrathakrishnan007@gmail.com] | 🌐 [https://www.linkedin.com/in/vignesh-kumar-radhakrishnan-4443a416a/] | +91 8072037139

---

Thank you for reviewing!