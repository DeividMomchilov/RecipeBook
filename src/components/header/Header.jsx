import { motion } from "framer-motion";

export default function Header() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-lg sticky-top"
      style={{ borderBottom: "4px solid #ffc107" }} 
    >
      <div className="container d-flex justify-content-center justify-content-sm-start">
        
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

          <h1 className="fs-3 fw-bolder text-warning mb-0" style={{ letterSpacing: "1px" }}>
            Вкусни Рецепти
          </h1>
        </motion.a>

      </div>
    </nav>
  );
}