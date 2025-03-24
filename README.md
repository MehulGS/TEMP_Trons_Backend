# Appointment Booking API

This is a Node.js and Express-based backend API for an appointment booking system using MongoDB. The API includes user authentication, appointment booking, and management features.

---

## 📌 Features
- **User Authentication** (Register & Login with JWT)
- **Secure Appointment Booking** (Only logged-in users can book)
- **View Appointments** (Authenticated users can see their booked slots)
- **Cancel Appointments**
- **Protected Routes** using JWT Authentication

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**
- **JWT for Authentication**
- **Postman API Collection for Testing**

---

## 🔧 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/MehulGS/TEMP_Trons_Backend.git
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb+srv://mehulguptarw453:UCCYxO5ppCFO3ZDv@cluster0.shcnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret_key
```

### **4️⃣ Run the Server**
```sh
npm start
```
Server will run on **http://localhost:5000**.

---

## 🛠 API Routes

### 🔹 **Authentication**
| Method | Route | Description |
|--------|-------------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### 🔹 **Appointments**
| Method | Route | Description |
|--------|-------------|-------------|
| GET | `/api/appointments` | Get all booked appointments (Protected) |
| POST | `/api/appointments` | Book an appointment (Protected) |
| DELETE | `/api/appointments/:timeSlot` | Cancel an appointment (Protected) |
| PUT | `/api/appointments/:timeSlot` | Edit an appointment (Protected) |
---

## 🔬 Postman Collection
A Postman collection is included for testing.
1. **Download the `postman_collection.json` file.**
2. Open **Postman** → Click **Import** → Select the file.
3. Run requests with your environment variables set.

---

## 📜 License
This project is open-source and available under the MIT License.

---

## ✨ Author
**Mehul Gupta**
- GitHub: [MehulGS](https://github.com/MehulGS)
- LinkedIn: [Mehul Gupta](https://www.linkedin.com/in/gupta-mehul-30855a291/)

