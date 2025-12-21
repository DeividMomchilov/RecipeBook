import { useMemo, useState } from "react";
import Header from '../../components/header/Header';
import { recipesData } from "../../data/recipesData";
  
const categoryIcons = {
  Всички: "📋",
  Салати: "🥗",
  Основни: "🍲",
  Тестени: "🥧",
  Супи: "🥣",
  Десерти: "🍰",
  Скара: "🔥",
  Разядки: "🫙",
  Закуски: "🍳",
  Мезета: "🥓",
};

export default function Home() {
  const [filter, setFilter] = useState("Всички");

  // ✅ държим отворено/затворено по id
  const [openRecipeById, setOpenRecipeById] = useState({});

  const toggleRecipe = (id) => {
    setOpenRecipeById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRecipes =
    filter === "Всички" ? recipesData : recipesData.filter((r) => r.cat === filter);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(recipesData.map((r) => r.cat)));
    return ["Всички", ...unique];
  }, []);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header />

      <div className="container my-5 flex-grow-1">
        <div className="row g-4">
          <aside className="col-xl-3 d-none d-xl-block">
            <div className="card shadow border-0 rounded-4 position-sticky" style={{ top: "100px" }}>
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
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryIcons[cat] ?? "🍽️"} {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="row g-4">
              {filteredRecipes.map((recipe) => {
                const isOpen = !!openRecipeById[recipe.id];

                return (
                  <div key={recipe.id} className="col-md-6">
                    <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden recipe-card">
                      <div className="position-relative">
                        <img
                          src={recipe.img}
                          className="card-img-top object-fit-cover"
                          alt={recipe.title}
                          style={{ height: "200px" }}
                        />
                        <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2 shadow-sm">
                          {recipe.cat}
                        </span>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title fw-bold">{recipe.title}</h5>
                        <p className="card-text text-muted small mb-3">{recipe.desc}</p>

                        <button
                          className="btn btn-outline-warning btn-sm w-100 fw-bold"
                          onClick={() => toggleRecipe(recipe.id)}
                          type="button"
                        >
                          {isOpen ? "Скрий рецепта" : "Рецепта"}
                        </button>

                        {/* ✅ Показване на рецептата под бутона */}
                        {isOpen && recipe.recipe && (
                          <div className="mt-3 p-3 bg-white rounded-3 border">
                            <div className="mb-2 fw-bold">🧾 Съставки:</div>
                            <ul className="small mb-3">
                              {recipe.recipe.ingredients.map((x, idx) => (
                                <li key={idx}>{x}</li>
                              ))}
                            </ul>

                            <div className="mb-2 fw-bold">👨‍🍳 Стъпки:</div>
                            <ol className="small mb-0">
                              {recipe.recipe.steps.map((s, idx) => (
                                <li key={idx}>{s}</li>
                              ))}
                            </ol>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredRecipes.length === 0 && (
                <div className="alert alert-warning text-center">
                  Няма намерени рецепти в тази категория.
                </div>
              )}
            </div>
          </main>

          <aside className="col-xl-3 d-none d-xl-block">
            <div className="position-sticky" style={{ top: "100px" }}>
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

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <p className="mb-0 small">&copy; 2024 Курсов проект "Уеб Програмиране"</p>
        </div>
      </footer>
    </div>
  );
}