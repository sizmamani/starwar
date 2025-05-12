# 🌌 Star Wars React App

## 📋 Requirements

Implement a **Star Wars themed React App** using data from:

- [https://swapi.dev/](https://swapi.dev/)
- or [https://swapi.py4e.com/api](https://swapi.py4e.com/api)

Guidelines:

- Timebox the development to **4–8 hours**
- Use a **pragmatic design approach** with minimal styling effort
- Clearly document any assumptions or skipped features due to time constraints
- Treat this project as a showcase of your **development style**
- Host code in a **public GitHub repository**

---

## 🚀 MVP Plan

### ⚙️ Tech Stack Decisions

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS  
  → Allows for clean, fast UI building and is **framework-agnostic** (easy to migrate to Vue, Angular, etc.)
- **Testing:**
  - Unit Testing: **Jest** (zero-config via Create React App)
  - E2E Testing (future-ready): **Cypress** or **Playwright**
- **Environment Config:** API base URL is read from `.env` → enables multi-environment deployment

---

### 🗂️ Project Structure

#### 📄 Pages

- **Dashboard**  
  A simple grid/list of available Star Wars resource types (characters, planets, starships, etc.)

- **ListingPage**  
  Displays a list of entities from the selected resource category

- **DetailPage**  
  Shows details about a selected entity

#### 🧩 Components

- **Breadcrumb**  
  Shared navigation across the app

- **Reusable UI Components**  
  Cards, Listing, etc., built with reusability in mind

---

### 🛠 Implementation Notes

- The dev API at `https://swapi.dev/` was unreliable during testing  
  → Using `.env` to store the base URL for flexibility
- Design is intentionally minimal to meet the time constraint
- Focus is on **clean architecture**, **reusability**, and **modular components**
- MVP is scoped for a **4-hour implementation window**; additional features can be added later

---

## ⚠️ Challenges

- Keeping scope small while showing core strengths
- Ensuring components are decoupled and reusable despite limited time

---

## 🧪 Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### ✅ Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it.

#### `npm test`

Launches the test runner in watch mode.  
See [Running Tests](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`

Builds the app for production to the `build` folder.  
Minifies and optimizes for best performance.

### rename `env.sample` to `.env`
