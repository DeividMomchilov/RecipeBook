import Header from "../../components/header/Header";

const videos = [
  {
    src: "/a-taste-of-bulgaria-a-culinary-journey.mp4",
    title: "Рецепта за таратор",
    badge: "🤖 AI видео • Таратор",
  },
  {
    src: "/restaurant-kitchen-scene.mp4",
    title: "Нужни колинарни средства",
    badge: "🤖 AI видео • Кулинарство",
  },
];

export default function Gallery() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="container my-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-4 mb-5 text-white bg-primary bg-gradient">
              <div className="card-body p-5 text-center">
                <h1 className="display-4 fw-bold">🎥 Кулинарна AI Галерия</h1>
                <p className="lead opacity-75 mb-0">
                  Уникално съдържание, генерирано изцяло с изкуствен интелект.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {videos.map((v, i) => (
                <div key={i} className="col-12 col-md-6 col-xl-4">
                  <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
                    <div className="ratio ratio-16x9 bg-dark">
                      <video
                        className="w-100 h-100"
                        src={v.src}
                        controls
                        preload="metadata"
                        playsInline
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title fw-bold text-dark mb-2">
                        {v.title}
                      </h5>

                      <span className="badge bg-info text-dark">{v.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* По желание: кратък блок “процеси” за защита */}
            <div className="alert alert-secondary border-0 shadow-sm rounded-4 mt-4 mb-0">
              <strong>AI процеси (пример):</strong> Text-to-Speech, Auto Subtitles (Speech-to-Text),
              Script → Video (генеративни кадри).
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <div className="container">
          <small>&copy; 2024 Курсов проект | React + Bootstrap</small>
        </div>
      </footer>
    </div>
  );
}
