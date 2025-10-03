# 🎓 University ERP - Node.js + Express + Sequelize + MySQL

A University ERP system built with **Node.js, Express, Sequelize (MySQL)**.  
It supports **students, faculty, courses, exams, fee payments, authentication & RBAC**.

---

## 🚀 Features
- **Authentication** (JWT-based login for students & faculty)
- **Role-based Access Control (RBAC)**
  - Faculty → manage students, courses, exams, results
  - Students → enroll in courses, pay fees, view results
- **Payments** → Simulated payment gateway
- **Exams & Results** → Results are locked until fees are paid
- **Sequelize ORM** → MySQL models with associations
- **REST APIs** with Postman Collection

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express
- **Database**: MySQL + Sequelize ORM
- **Auth**: JWT + bcrypt
- **Tools**: Postman (API testing), dotenv

---

## 📂 Project Structure
university-erp/
│── controllers/ # All controllers
│ ├── authController.js
│ ├── studentController.js
│ ├── courseController.js
│ ├── examController.js
│ ├── paymentController.js
│
│── routes/ # API routes
│ ├── authRoutes.js
│ ├── studentRoutes.js
│ ├── courseRoutes.js
│ ├── examRoutes.js
│ ├── paymentRoutes.js
│
│── models/ # Sequelize models
│ ├── index.js
│ ├── User.js
│ ├── Student.js
│ ├── Faculty.js
│ ├── Course.js
│ ├── Enrollment.js
│ ├── Exam.js
│ ├── Result.js
│ ├── FeePayment.js
│
│── middleware/
│ ├── authMiddleware.js
│
│── app.js # Main entry
│── package.json
│── .env
│── README.md

## ⚙️ Setup Instructions

### 1️⃣ Clone & Install
```bash
git clone https://github.com/yourusername/university-erp.git
cd university-erp
npm install
```
### 2️⃣ Setup Environment Variables
```
PORT =4000
DB_URL= mysql:root:password@localhost:3306/university
```
### 3️⃣ Run MySQL
```sql
Create database: CREATE DATABASE university_erp;
```
### 4️⃣ Start Server
```bash
npm start
```
### IMPORT POSTMAN COLLECTION
##### University ERP API.postman_collection.json