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

  const toggleRecipe = (id) => {
    setOpenRecipeById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredRecipes = useMemo(() => {
    return filter === "Всички" 
      ? recipesData 
      : recipesData.filter((r) => r.cat === filter);
  }, [filter]);

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
              {filteredRecipes.map((recipe) => (
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

              {filteredRecipes.length === 0 && (
                <div className="alert alert-warning text-center">
                  Няма намерени рецепти в тази категория.
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