# 🛡️ Full-Stack Authentication System

A production-ready Login and Registration boilerplate built with the **MERN** stack (Node.js, Express, React) and **NeonDB**. This project serves as a reusable foundation for implementing secure user authentication in larger applications.

## 🚀 Features
* **JWT Authentication:** Secure token-based sessions.
* **Protected Routes:** Frontend route guarding using React Router DOM.
* **Data Validation:** Strict schema validation with **Zod** (Frontend & Backend).
* **Persistence:** Persistent login sessions using `localStorage`.
* **No ORM:** High-performance, raw SQL queries using the `pg` driver for **NeonDB**.
* **Modern UI:** Fully responsive design built with **Tailwind CSS**.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **HTTP Client:** Axios
- **Routing:** React Router DOM
- **Validation:** Zod

### Backend
- **Environment:** Node.js & Express
- **Database:** NeonDB (Serverless PostgreSQL)
- **Security:** JSON Web Tokens (JWT), Bcrypt (Password Hashing)
- **Validation:** Zod
- **Middleware:** CORS, Express JSON

---

## 📂 Project Structure

```text
├── server
│   ├── config/          
│   ├── controllers/             
│   ├── middlewares/              
│   ├── models/              
│   ├── routes/          
│   ├── services/      
│   └── index.js         
├── frontend
│   ├── src/
│   │   ├── components/  # ProtectedRoute wrapper
│   │   ├── pages/       # Login, Register, Dashboard
│   │   └── App.jsx      # Route definitions
│   └── ...
└── .env                 # Environment variables (Backend)
```

---

## ⚙️ Installation & Setup

### 1. Database Setup (NeonDB)
Run the following query in your NeonDB SQL console to initialize the user table:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Backend Configuration
#### 1. Navigate to the backend directory:

```Bash
cd backend
```

#### 2. Install dependencies:
```Bash
npm install
```

#### 3. Create a .env file in the root of the /backend folder:
```Code snippet
PORT=5000
DATABASE_URL=your_neondb_connection_string
JWT_SECRET=your_super_secret_key
```

#### 4. Start the development server:
```Bash
npm run dev
```
### 3. Frontend Configuration
#### 1. Navigate to the frontend directory:
```Bash
cd frontend
```
#### 2. Install dependencies:
```Bash
npm install
```

#### 3. Start the development server:
```Bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | No |
| `POST` | `/api/auth/login` | Login & receive JWT | No |
| `GET` | `/dashboard` | Get user profile data | **Yes** |

---

## 📝 Future Improvements

- [ ] **Email Verification:** Integrate **Nodemailer** to verify user emails during registration.
- [ ] **Forgot Password Flow:** Implement secure password reset via email links.
- [ ] **Refresh Tokens:** Add rotation for refresh tokens to improve long-term session security.
- [ ] **Social Login:** Expand authentication options to include **Google** and **GitHub** OAuth.
- [ ] **Role-Based Access (RBAC):** Add user roles (e.g., Admin, User) for more granular control.

---

## 📝 License
This project is open-source and available under the MIT License.

**Since you are using NeonDB without an ORM, would you like me to provide a high-performance `db.js` connection utility using the `pg` pool?**
