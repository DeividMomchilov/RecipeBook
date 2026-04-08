import { useParams, Link } from "react-router";
import { recipesData } from "../../data/recipesData";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeItem = recipesData.find((r) => r.id === parseInt(id));

  if (!recipeItem) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
        <Header />
        <div className="container text-center my-5 flex-grow-1">
          <h2 className="text-body">Рецептата не е намерена! 😕</h2>
          <Link to="/" className="btn btn-warning mt-3 fw-bold">⬅ Назад към началото</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, img, desc, cat, recipe, videoLink, prepTime, difficulty, nutrition } = recipeItem; // Added new fields

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary recipe-page">
      <style>{`
        @media print {
          body, .recipe-page { background-color: white !important; color: black !important; }
          .shadow-lg, .shadow-sm { box-shadow: none !important; }
          .print-no-break { page-break-inside: avoid; }
          .print-border { border: 1px solid #ddd !important; }
          .d-print-none { display: none !important; }
          .print-ing-box { background-color: transparent !important; border: 2px dashed #ccc !important; }
        }
      `}</style>

      <div className="d-print-none">
        <Header />
      </div>

      <div className="container my-4 flex-grow-1">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3 d-print-none">
          <Link to="/" className="btn btn-outline-secondary fw-bold shadow-sm rounded-pill px-4">
            &larr; Към всички рецепти
          </Link>
          <div className="d-flex gap-2">
            {videoLink && (
              <a href={videoLink} target="_blank" rel="noreferrer" className="btn btn-danger shadow-sm rounded-pill px-4 fw-bold">
                ▶️ Видео
              </a>
            )}
            <button onClick={() => window.print()} className="btn btn-dark shadow-sm rounded-pill px-4 fw-bold">
              🖨️ Принтирай
            </button>
          </div>
        </div>

        <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-body print-border mb-5">
          <div className="p-4 p-md-5 text-center print-no-break">
            <span className="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill shadow-sm mb-3">
              {cat}
            </span>
            <h1 className="fw-bolder text-body display-5 mb-3">{title}</h1>
            
            <div className="d-flex justify-content-center gap-4 mb-4 text-muted fw-bold">
               <span>⏱️ {prepTime} мин.</span>
               <span>📊 {difficulty}</span>
               <span>🔥 {nutrition.calories} ккал</span>
            </div>

            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>{desc}</p>
          </div>

          <div className="print-no-break px-3 px-md-5 pb-4 text-center">
            <img src={img} alt={title} className="img-fluid w-100 rounded-4 shadow-sm object-fit-cover" style={{ maxHeight: "500px" }} />
          </div>

          <div className="row g-0 px-4 px-md-5 pb-5">
            <div className="col-lg-4 pe-lg-5 mb-5 mb-lg-0 print-no-break">
              <div className="bg-body-tertiary p-4 rounded-4 border print-ing-box shadow-sm mb-4">
                <h4 className="fw-bold mb-4 text-body d-flex align-items-center gap-2 border-bottom border-warning pb-2">
                  🛒 Съставки
                </h4>
                <ul className="list-group list-group-flush bg-transparent">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="list-group-item bg-transparent px-0 border-bottom border-secondary-subtle py-2 d-flex align-items-start gap-2 text-body">
                      <span className="text-warning">✔️</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary bg-opacity-10 p-4 rounded-4 border shadow-sm">
                <h5 className="fw-bold text-primary mb-3">🥯 Хранителна стойност (на 100гр.)</h5>
                <div className="small">
                  <div className="d-flex justify-content-between border-bottom py-1"><span>Протеини:</span> <strong>{nutrition.protein}г</strong></div>
                  <div className="d-flex justify-content-between border-bottom py-1"><span>Въглехидрати:</span> <strong>{nutrition.carbs}г</strong></div>
                  <div className="d-flex justify-content-between py-1"><span>Мазнини:</span> <strong>{nutrition.fat}г</strong></div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <h4 className="fw-bold mb-4 text-body d-inline-block pb-2">
                👨‍🍳 Начин на приготвяне
              </h4>
              <div className="d-flex flex-column gap-4 mt-2">
                {recipe.steps.map((step, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-3 print-no-break">
                    <span className="badge bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fs-5 flex-shrink-0 shadow-sm" style={{ width: "40px", height: "40px" }}>
                      {idx + 1}
                    </span>
                    <p className="mb-0 text-body pt-1" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-print-none">
        <Footer />
      </div>
    </div>
  );
}