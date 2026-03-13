import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../footer/Footer";
import Recipe from "../receipe/Receipe";
import { categoryIcons } from "../../constants/categoryIcons";
import { useFavorites } from "../../hooks/useFavorites";
import { useRecipes } from "../../hooks/useRecipes";

const STICKY_TOP_OFFSET = "100px";

export default function Home() {
  const { favorites, toggleFavorite } = useFavorites();
  
  const {
    filter, setFilter,
    searchTerm, setSearchTerm,
    currentPage, setCurrentPage,
    totalPages, categories,
    paginatedRecipes, searchedRecipesCount,
    openRecipeById, toggleRecipe
  } = useRecipes(favorites);

  const [activeVideo, setActiveVideo] = useState(null);

  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-column position-relative">
      <Header />

      <div className="container my-5 flex-grow-1">
        <div className="row g-4">
          <aside className="col-xl-3 d-none d-xl-block">
            <div className="card shadow border-0 rounded-4 position-sticky" style={{ top: STICKY_TOP_OFFSET }}>
              <div className="card-header bg-warning text-dark fw-bold rounded-top-4 py-3">
                🍽️ Категории
              </div>
              <div className="list-group list-group-flush rounded-bottom-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`list-group-item list-group-item-action py-3 ${
                      filter === cat ? "active bg-warning text-dark border-warning fw-bold" : ""
                    }`}
                    onClick={() => setFilter(cat)}
                  >
                    {cat === "Любими" ? "❤️" : categoryIcons[cat] ?? "🍽️"} {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="col-12 col-xl-6">
            <h2 className="mb-4 text-body border-start border-5 border-warning ps-3">
              {filter === "Всички" ? "Всички Рецепти" : `Категория: ${filter}`}
            </h2>

            <div className="d-xl-none mb-4">
              <select
                className="form-select shadow-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "Любими" ? "❤️" : categoryIcons[cat] ?? "🍽️"} {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group mb-4 shadow-sm">
              <span className="input-group-text bg-body border-warning text-body">🔍</span>
              <input
                type="text"
                className="form-control border-warning"
                placeholder="Търси рецепта по име, описание или съдържание..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <motion.div layout className="row g-4">
              {searchedRecipesCount === 0 && (
                <div className="col-12">
                  <div className="alert alert-warning mb-0" role="alert">
                    Не са намерени рецепти по зададените критерии.
                  </div>
                </div>
              )}

              <AnimatePresence mode="popLayout">
                {paginatedRecipes.map((recipe) => (
                  <Recipe
                    key={recipe.id}
                    {...recipe}
                    isOpen={!!openRecipeById[recipe.id]}
                    onToggle={toggleRecipe}
                    onPlayVideo={setActiveVideo}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {searchedRecipesCount > 0 && totalPages > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                <button
                  className="btn btn-outline-warning btn-sm fw-bold"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Назад
                </button>
                <span className="badge bg-warning text-dark px-3 py-2 shadow-sm">
                  Страница {currentPage} от {totalPages}
                </span>
                <button
                  className="btn btn-outline-warning btn-sm fw-bold"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Напред
                </button>
              </div>
            )}
          </main>

          <aside className="col-xl-3 d-none d-xl-block">
            <div className="position-sticky" style={{ top: STICKY_TOP_OFFSET }}>
              
              <div className="card shadow border-0 rounded-4 mb-4 bg-primary bg-opacity-10">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">💡 Съвет на деня</h5>
                  <p className="card-text small mb-0" style={{ color: "var(--bs-body-color)" }}>
                    Винаги добавяйте щипка захар към доматения сос, за да неутрализирате киселината.
                  </p>
                </div>
              </div>

              <div className="card shadow border-0 rounded-4 mb-4 text-center overflow-hidden">
                <div className="bg-warning p-3">
                  <h6 className="fw-bold text-dark mb-0">💌 Кулинарен бюлетин</h6>
                </div>
                <div className="card-body">
                  <p className="small text-muted mb-3">
                    Получавайте най-новите рецепти и тайни от кухнята директно във вашия имейл!
                  </p>
                  <div className="input-group input-group-sm mb-2">
                    <input type="email" className="form-control" placeholder="Вашият имейл..." />
                  </div>
                  <button className="btn btn-dark btn-sm w-100 fw-bold">Абонирай се</button>
                </div>
              </div>

              <div className="card shadow border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-body fw-bold py-3 border-bottom-0">
                  ⭐ Рецепта на седмицата
                </div>
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Banitsa_and_yogurt.jpg?width=900"
                  className="card-img-top object-fit-cover"
                  alt="Баница"
                  style={{ height: "160px" }}
                />
                <div className="card-body">
                  <h6 className="fw-bold">Домашна Баница</h6>
                  <p className="small text-muted mb-3">
                    Перфектната уикенд закуска, приготвена с много любов и сирене.
                  </p>
                  <button 
                    className="btn btn-outline-warning btn-sm w-100 fw-bold"
                    onClick={() => {
                      setFilter("Всички");
                      setSearchTerm("Баница");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Виж рецептата
                  </button>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.85)", zIndex: 1050 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-dark rounded-4 p-2 position-relative w-100 mx-3 shadow-lg"
              style={{ maxWidth: "800px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn-light rounded-circle position-absolute d-flex justify-content-center align-items-center"
                style={{ top: "-15px", right: "-15px", zIndex: 1060, width: "35px", height: "35px" }}
                onClick={() => setActiveVideo(null)}
              >
                ✖
              </button>
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}