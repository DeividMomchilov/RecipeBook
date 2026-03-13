import { motion, AnimatePresence } from "framer-motion";

export default function Recipe(props) {
  const { 
    id, img, title, desc, cat, recipe, isOpen, 
    onToggle, videoLink, onPlayVideo, isFavorite, onToggleFavorite 
  } = props;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="col-md-6"
    >
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
          
          <button
            className="position-absolute top-0 start-0 m-2 rounded-circle shadow p-2 d-flex align-items-center justify-content-center border-0 bg-body"
            onClick={() => onToggleFavorite(id)}
            style={{ width: "40px", height: "40px", zIndex: 10, opacity: 0.9 }}
            title="Добави в любими"
          >
            <span className="fs-5">{isFavorite ? "❤️" : "🤍"}</span>
          </button>
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted small mb-3 flex-grow-1">{desc}</p>

          {videoLink && (
            <button 
              onClick={() => onPlayVideo(videoLink)}
              className="btn btn-outline-danger btn-sm w-100 fw-bold mb-2"
            >
              ▶️ Гледай видео
            </button>
          )}

          <button
            className="btn btn-outline-warning btn-sm w-100 fw-bold"
            onClick={() => onToggle(id)}
            type="button"
          >
            {isOpen ? "Скрий рецепта" : "Рецепта"}
          </button>

          <AnimatePresence>
            {isOpen && recipe && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-3 p-3 bg-body-tertiary rounded-3 border">
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}