import { useMemo, useState } from "react";
import Header from '../../components/header/Header';
import Footer from '../footer/Footer';
import { recipesData } from "../../data/recipesData";
import Recipe from '../receipe/Receipe';
import { categoryIcons } from '../../constants/categoryIcons';

const STICKY_TOP_OFFSET = "100px";

export default function Home() {
  const [filter, setFilter] = useState("Всички");
  const [openRecipeById, setOpenRecipeById] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const toggleRecipe = (id) => {
    setOpenRecipeById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRecipes = useMemo(() => {
    return filter === "Всички"
      ? recipesData
      : recipesData.filter((r) => r.cat === filter);
  }, [filter]);

  const searchedRecipes = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return filteredRecipes;

    return filteredRecipes.filter((r) => {
      const parts = [r.title, r.desc];

      if (r.recipe) {
        if (Array.isArray(r.recipe)) {
          parts.push(r.recipe.join(" "));
        } else if (typeof r.recipe === "string") {
          parts.push(r.recipe);
        } else if (typeof r.recipe === "object") {
          if (Array.isArray(r.recipe.ingredients)) {
            parts.push(r.recipe.ingredients.join(" "));
          }
          if (Array.isArray(r.recipe.steps)) {
            parts.push(r.recipe.steps.join(" "));
          }
        }
      }

      const haystack = parts
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [filteredRecipes, searchTerm]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(searchedRecipes.length / PAGE_SIZE));
  }, [searchedRecipes]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(recipesData.map((r) => r.cat)));
    return ["Всички", ...unique];
  }, []);

  const paginatedRecipes = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return searchedRecipes.slice(start, end);
  }, [searchedRecipes, currentPage]);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
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
                    onClick={() => {
                      setFilter(cat);
                      setCurrentPage(1);
                    }}
                  >
                    {categoryIcons[cat] ?? "🍽️"} {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="col-12 col-xl-6">
            <h2 className="mb-4 text-dark border-start border-5 border-warning ps-3">
              {filter === "Всички" ? "Всички Рецепти" : `Категория: ${filter}`}
            </h2>

            <div className="d-xl-none mb-4">
              <select
                className="form-select shadow-sm"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryIcons[cat] ?? "🍽️"} {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group mb-4 shadow-sm">
              <span className="input-group-text bg-white border-warning text-muted">
                🔍
              </span>
              <input
                type="text"
                className="form-control border-warning"
                placeholder="Търси рецепта по име, описание или съдържание..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="row g-4">
              {searchedRecipes.length === 0 && (
                <div className="col-12">
                  <div className="alert alert-warning mb-0" role="alert">
                    Не са намерени рецепти по зададените критерии.
                    Опитайте с друга ключова дума или категория.
                  </div>
                </div>
              )}

              {paginatedRecipes.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  id={recipe.id}
                  img={recipe.img}
                  title={recipe.title}
                  desc={recipe.desc}
                  cat={recipe.cat}
                  recipe={recipe.recipe}
                  isOpen={!!openRecipeById[recipe.id]}
                  onToggle={toggleRecipe}
                />
              ))}

              {searchedRecipes.length > 0 && totalPages > 1 && (
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
            </div>
          </main>

          <aside className="col-xl-3 d-none d-xl-block">
            <div className="position-sticky" style={{ top: STICKY_TOP_OFFSET }}>
              <div className="card shadow border-0 rounded-4 mb-4 bg-primary bg-opacity-10">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold">💡 Съвет на деня</h5>
                  <p className="card-text small text-dark mb-0">
                    Винаги добавяйте щипка захар към доматения сос, за да неутрализирате киселината.
                  </p>
                </div>
              </div>

              <div className="card shadow border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-white fw-bold py-3 border-bottom-0">
                  🏆 Топ Продукт
                </div>
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/Scharene%20sol%20IMG%200008.JPG?width=900"
                  className="card-img-top"
                  alt="Шарена сол"
                />

                <div className="card-body">
                  <h6 className="fw-bold">Шарена Сол</h6>
                  <p className="small text-muted mb-0">
                    Незаменимата подправка за всяка българска трапеза.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}