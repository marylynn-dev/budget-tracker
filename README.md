# 💰 BudgetBuddy

**BudgetBuddy** is a full-stack budget tracking application built with **Vue 3 + Vuetify 3** on the frontend and **Node.js** on the backend.  
It helps users manage income, track expenses, set budgets, and visualize spending with interactive charts and reports.  

---

## 📂 Project Structure

```

📦 budgetbuddy
┣ 📜 README.md   ← You are here
┣ 🌿 backend     ← Node.js API (in `backend` branch)
┣ 🌿 frontend    ← Vue + Vuetify app (in `frontend` branch)

````

---

## ⚙️ Tech Stack

- **Frontend:** Vue 3, Vuetify 3, Pinia, Vue Router, Vite  
- **Backend:** Node.js, Express, MongoDB/MySQL/Postgres (depending on your setup)  
- **Tooling:** Vite, ESLint + Prettier for code quality  

---

## 💿 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/budgetbuddy.git
````

### 2️⃣ Switch to the branch you need

* For backend:

  ```bash
  git checkout backend
  ```
* For frontend:

  ```bash
  git checkout frontend
  ```

---

## ▶️ Running the Projects

### Frontend (Vue + Vuetify)

```bash
cd frontend
npm install   # or yarn / pnpm
npm run dev
```

App will be available at: **[http://localhost:3000](http://localhost:3000)**

---

### Backend (Node.js)

```bash
cd backend
npm install   # or yarn / pnpm
npm run dev
```

API will be available at: **[http://localhost:5000](http://localhost:5000)** (or your configured port)

---

## 🔧 Environment Variables

Both backend and frontend require environment variables.
Create a `.env` file in the root of each project:

### Backend `.env` example

```
PORT=5000
DATABASE_URL=your-database-connection-string
JWT_SECRET=your-secret-key
```

### Frontend `.env` example

```
VITE_API_URL=http://localhost:5000
```

---

## ✨ Features

* 📊 Track income and expenses in real-time
* 🏦 Create and manage monthly budgets
* 📅 View transaction history with filters
* 🌙 Light & Dark mode support
* 🔐 Secure authentication and role-based access
* 📈 Visualize spending trends with charts

---

## 🤝 Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📑 License

[MIT](http://opensource.org/licenses/MIT)
