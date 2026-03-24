# 👨‍🍳 RecipeBook (Вкусни Рецепти)

A modern, fast, and interactive Single Page Application (SPA) built with React that showcases traditional Bulgarian recipes. This project demonstrates modern frontend development practices, including custom hooks, routing, state management (with `localStorage`), and advanced UI animations.

![RecipeBook Preview](public/cookbook.png) ## ✨ Features

- 🌗 **Dark/Light Mode**: Full theme support utilizing Bootstrap 5.3's `data-bs-theme`, with user preference saved in `localStorage`.
- ❤️ **Favorites System**: Users can save their favorite recipes. The state persists across sessions using a custom `useFavorites` hook.
- 🔀 **Dynamic Routing**: Built with `react-router-dom` for seamless navigation between the Home page and dedicated Recipe Details pages (`/recipe/:id`).
- 🎥 **Integrated Video Player**: Watch YouTube recipe tutorials directly within a sleek, animated modal on the home page.
- 🖨️ **Print-Ready Pages**: The Recipe Details page features a custom `@media print` CSS layout, stripping away unnecessary UI elements for perfect physical printing.
- ✨ **Smooth Animations**: Powered by `framer-motion` for fluid page transitions, layout changes, and hover effects.
- 🍞 **Toast Notifications**: Real-time user feedback when adding or removing favorites using `react-toastify`.
- 🔍 **Advanced Search & Filtering**: Instantly search through titles, descriptions, ingredients, and preparation steps, or filter by category. Includes pagination.
- 📱 **Fully Responsive**: Mobile-first design using Bootstrap Grid.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) (Bootstrapped with [Vite](https://vitejs.dev/))
- **Styling & UI**: [Bootstrap 5.3](https://getbootstrap.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## 📂 Project Structure

The codebase is organized following React best practices (Separation of Concerns):

```text
src/
├── components/          # Reusable UI components
│   ├── footer/          # App footer
│   ├── header/          # Navigation and theme toggle
│   ├── home/            # Main dashboard, search, and sidebar
│   ├── receipe/         # Recipe card component
│   └── recipe-details/  # Dedicated page for a single recipe
├── constants/           # Static assets (e.g., category icons)
├── data/                # Hardcoded recipe data and video links
├── hooks/               # Custom React hooks
│   ├── useFavorites.js  # Logic for localStorage favorites
│   └── useRecipes.js    # Logic for filtering, searching, and pagination
├── App.jsx              # Main router and ToastContainer setup
└── main.jsx             # React entry point
```
```bash
git clone [https://github.com/your-username/recipebook.git](https://github.com/your-username/recipebook.git)
cd recipebook
npm install
npm run dev
