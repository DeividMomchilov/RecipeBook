import { motion } from "framer-motion";
import { Link } from "react-router"; 

export default function Recipe(props) {
  const { 
    id, img, title, desc, cat, 
    videoLink, onPlayVideo, isFavorite, onToggleFavorite 
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
      <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden recipe-card bg-body">
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
          <h5 className="card-title fw-bold text-body">{title}</h5>
          <p className="card-text text-muted small mb-3 flex-grow-1">{desc}</p>

          <Link 
            to={`/recipe/${id}`} 
            className="btn btn-warning btn-sm w-100 fw-bold mb-2 shadow-sm"
          >
            📖 Виж цялата рецепта
          </Link>

          {videoLink && (
            <button 
              onClick={() => onPlayVideo(videoLink)}
              className="btn btn-outline-danger btn-sm w-100 fw-bold shadow-sm"
            >
              ▶️ Гледай видео
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}