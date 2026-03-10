import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("appTheme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("appTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-lg sticky-top"
      style={{ borderBottom: "4px solid #ffc107" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        
        <motion.a 
          href="/" 
          className="navbar-brand d-flex align-items-center gap-3 m-0 text-decoration-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white p-1 rounded-circle shadow-sm d-flex align-items-center justify-content-center">
            <img 
              src="/cookbook.png" 
              alt="Cookbook Logo" 
              width="45" 
              height="45" 
              className="object-fit-contain"
            />
          </div>
          <h1 className="fs-3 fw-bolder text-warning mb-0 d-none d-sm-block" style={{ letterSpacing: "1px" }}>
            Вкусни Рецепти
          </h1>
        </motion.a>

        <motion.button
          onClick={toggleTheme}
          className={`btn rounded-circle d-flex align-items-center justify-content-center shadow-sm border-0 ${
            theme === "light" ? "bg-light text-dark" : "bg-secondary text-warning"
          }`}
          style={{ width: "45px", height: "45px", fontSize: "1.2rem" }}
          whileHover={{ scale: 1.1, rotate: theme === "light" ? -15 : 15 }}
          whileTap={{ scale: 0.9 }}
          title={theme === "light" ? "Превключи на тъмна тема" : "Превключи на светла тема"}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </motion.button>

      </div>
    </nav>
  );
}