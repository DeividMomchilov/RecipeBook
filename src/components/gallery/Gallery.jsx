export default function Gallery(){
    return(
    <div className="vstack gap-4">
        <div className="card shadow-sm border-0">
            <div className="card-body p-4 text-center bg-light rounded">
            <h2 className="text-primary mb-3">🎥 Кулинарна AI Галерия</h2>
            <p className="lead">Генерирано видео съдържание за любителите на храната.</p>
            </div>
        </div>

        <div className="card">
        <div className="ratio ratio-16x9">
           <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" allowFullScreen></iframe>
        </div>
        <div className="card-body">
          <h5>🍕 Историята на Пицата</h5>
          <p className="text-muted small">Генерирано с Fliki (Text-to-Video)</p>
        </div>
      </div>
    </div>
    )
}