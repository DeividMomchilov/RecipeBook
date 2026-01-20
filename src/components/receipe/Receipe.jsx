export default function Recipe(props) {
  const { id, img, title, desc, cat, recipe, isOpen, onToggle } = props;

  return (
    <div className="col-md-6">
      <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden recipe-card">
        <div className="position-relative">
          <img
            src={img}
            className="card-img-top object-fit-cover"
            alt={title}
            style={{ height: "200px" }}
          />
          <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2 shadow-sm">
            {cat}
          </span>
        </div>

        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted small mb-3">{desc}</p>

          <button
            className="btn btn-outline-warning btn-sm w-100 fw-bold"
            onClick={() => onToggle(id)}
            type="button"
          >
            {isOpen ? "Скрий рецепта" : "Рецепта"}
          </button>

          {isOpen && recipe && (
            <div className="mt-3 p-3 bg-white rounded-3 border">
              <div className="mb-2 fw-bold">🧾 Съставки:</div>
              <ul className="small mb-3">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>

              <div className="mb-2 fw-bold">👨‍🍳 Стъпки:</div>
              <ol className="small mb-0">
                {recipe.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}