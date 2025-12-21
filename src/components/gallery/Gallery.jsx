import Header from '../../components/header/Header';

export default function Gallery() {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header />

            <div className="container my-5 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        
                        <div className="card shadow-lg border-0 rounded-4 mb-5 text-white bg-primary bg-gradient">
                            <div className="card-body p-5 text-center">
                                <h1 className="display-4 fw-bold">🎥 Кулинарна AI Галерия</h1>
                                <p className="lead opacity-75">
                                    Уникално съдържание, генерирано изцяло с изкуствен интелект.
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">                        
                                <div className="col-md-6 col-xl-4">
                                    <div className="card h-100 border-0 shadow rounded-4 overflow-hidden">
                                        <div className="ratio ratio-16x9 bg-dark">
                                            <iframe 
                                                src=''
                                                title=''
                                                allowFullScreen 
                                                className="rounded-top-4"
                                            ></iframe>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold text-dark">TODO</h5>
                                            <span className="badge bg-info text-dark">
                                                🤖 TODO
                                            </span>
                                        </div>
                                    </div>
                                </div>               
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <small>&copy; 2024 Курсов проект | React + Bootstrap</small>
                </div>
            </footer>
        </div>
    )
}