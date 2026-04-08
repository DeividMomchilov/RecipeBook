import { motion } from "framer-motion";

export default function RecipeSkeleton() {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden bg-body" style={{ minHeight: "380px" }}>
        <style>{`
          .skeleton-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
          }
          [data-bs-theme='dark'] .skeleton-shimmer {
            background: linear-gradient(90deg, #2c2c2c 25%, #3d3d3d 50%, #2c2c2c 75%);
            background-size: 200% 100%;
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>

        <div className="skeleton-shimmer" style={{ height: "200px", width: "100%" }}></div>

        <div className="card-body d-flex flex-column">
          <div className="skeleton-shimmer rounded mb-2" style={{ height: "24px", width: "70%" }}></div>
          
          <div className="d-flex gap-3 mb-3">
            <div className="skeleton-shimmer rounded" style={{ height: "16px", width: "50px" }}></div>
            <div className="skeleton-shimmer rounded" style={{ height: "16px", width: "80px" }}></div>
          </div>

          <div className="skeleton-shimmer rounded mb-1" style={{ height: "12px", width: "100%" }}></div>
          <div className="skeleton-shimmer rounded mb-3" style={{ height: "12px", width: "90%" }}></div>

          <div className="skeleton-shimmer rounded mt-auto" style={{ height: "35px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
}