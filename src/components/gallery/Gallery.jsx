import Header from "../../components/header/Header";
import { videos } from "../../data/videoData";

export default function Gallery() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="container my-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-4 mb-5 text-white bg-primary bg-gradient">
              <div className="card-body p-5 text-center">
                <h1 className="display-4 fw-bold">🎥 Кулинарна Галерия</h1>
                <p className="lead opacity-75 mb-0">
                  Уникално съдържание, генерирано с изкуствен и естествен интелект.
                </p>
              </div>
            </div>

            <div className="row g-4">
  {videos.map((v, i) => {
    const embedSrc =
      v.type === "youtube" ? `https://www.youtube.com/embed/${v.youtubeId}` : null;
    const watchUrl =
      v.type === "youtube" ? `https://www.youtube.com/watch?v=${v.youtubeId}` : null;

    return (
      <div key={i} className="col-12 col-md-6 col-xl-4">
        <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
          <div className="ratio ratio-16x9 bg-dark">
            {v.type === "youtube" ? (
              <iframe
                src={embedSrc}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <video
                className="w-100 h-100"
                src={v.src}
                controls
                preload="metadata"
                playsInline
              />
            )}
          </div>

          <div className="card-body">
            <h5 className="card-title fw-bold text-dark mb-2">{v.title}</h5>

            <div className="d-flex align-items-center justify-content-between gap-2">
              <span className={`badge ${v.badgeClass}`}>{v.badge}</span>

              {v.type === "youtube" && (
                <a
                  className="btn btn-sm btn-outline-secondary"
                  href={watchUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Отвори в YouTube
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <small>&copy; 2026 Курсов проект | React + Bootstrap</small>
        </div>
      </footer>
    </div>
  );
}
