import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer 
      className="bg-dark text-white py-4 mt-auto shadow-lg"
      style={{ borderTop: "4px solid #ffc107" }} 
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        
        <div className="text-center text-md-start">
          <h5 className="text-warning fw-bold mb-1 d-flex align-items-center justify-content-center justify-content-md-start gap-2">
            <img 
              src="/cookbook.png" 
              alt="Cookbook" 
              width="24" 
              height="24" 
              className="bg-white rounded-circle p-1"
            />
            Вкусни Рецепти
          </h5>
          <p className="mb-0 small text-white-50">
            Традиция и вкус във всяка хапка.
          </p>
        </div>

        <div className="d-flex gap-3">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -2 }} 
            className="text-white-50 text-decoration-none fs-5"
            title="Българска кухня"
          >
            🇧🇬
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -2 }} 
            className="text-white-50 text-decoration-none fs-5"
            title="Към върха"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ⬆️
          </motion.a>
        </div>
        
      </div>
    </footer>
  );
}