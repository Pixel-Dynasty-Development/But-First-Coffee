# ☕ But First Coffee - Website Project

This repository contains the source code for the "But First Coffee" website, built by **Pixel Dynasty Development**. It's a lightweight, fast, and easy-to-maintain single-page application (SPA).

## ✨ Features

This project is built on a modern, multi-file vanilla JS template:

- **🧭 Dynamic SPA Routing:** Uses a vanilla JS router (`src/js/main.js`) to load pages dynamically without a full refresh.
- **🧩 Component-Based:** Reusable parts like the Header and Footer are loaded from `src/components/` for easy maintenance.
- **🎨 Styled with Tailwind CSS:** Utilizes Tailwind CSS for a utility-first styling workflow. The color scheme is easily configurable in `src/styles/main.css`.
- **📱 Fully Responsive:** Designed to look great on all devices.
- **✍️ Google Fonts Integrated:** Comes pre-loaded with the 'Inter' font family.
- **⚡ Vite Powered:** Uses Vite for a lightning-fast development server and optimized builds.

## 🚀 Getting Started

1.  **Clone the Repo:**
    ```bash
    git clone [https://github.com/Pixel-Dynasty-Development/but-first-coffee.git](https://github.com/Pixel-Dynasty-Development/but-first-coffee.git)
    cd but-first-coffee
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Dev Server:**
    ```bash
    npm run dev
    ```
    This will start a hot-reloading server, usually at `http://localhost:5173`.

## 🔧 Customization

- **Page Content:** To edit pages, modify the HTML files in `src/pages/` (e.g., `home.html`, `about.html`).
- **Add New Pages:**
  1.  Create a new file in `src/pages/` (e.g., `new-page.html`).
  2.  Add a link to `src/components/Header.html`.
  3.  Add the route to the `routes` object in `src/js/main.js`.
- **Header & Footer:** Edit the files in `src/components/`.
- **Colors & Styles:** All color variables and base styles are in `src/styles/main.css`.