import Header from "../header/Header";

const recipes = [
    { id: 1, title: "Шопска Салата", cat: "Салати", img: "https://via.placeholder.com/300x200?text=Salad", desc: "Класическа българска салата с домати и сирене." },
    { id: 2, title: "Мусака", cat: "Основни", img: "https://via.placeholder.com/300x200?text=Musaka", desc: "Традиционно ястие с картофи и кайма." },
    { id: 3, title: "Баница", cat: "Тестени", img: "https://via.placeholder.com/300x200?text=Banitsa", desc: "Любимата закуска на всеки българин." },
    { id: 4, title: "Таратор", cat: "Супи", img: "https://via.placeholder.com/300x200?text=Tarator", desc: "Студена супа с кисело мляко и краставици." },
]

export default function Home(){
    return(
        <>
            <Header/>

            <div className="min-vh-100 d-flex flex-column bg-light">
            <div className="container my-4 flex-grow-1">
            <div className="row">
          
            <aside className="col-xl-3 d-none d-xl-block">
                <div className="card shadow-sm position-sticky" style={{top: "20px"}}>
                <div className="card-header bg-white fw-bold">🍽️ Категории</div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action">Всички рецепти</a>
                    <a href="#" className="list-group-item list-group-item-action">🥗 Салати</a>
                    <a href="#" className="list-group-item list-group-item-action">🥘 Основни ястия</a>
                    <a href="#" className="list-group-item list-group-item-action">🥐 Тестени изделия</a>
                    <a href="#" className="list-group-item list-group-item-action">🍰 Десерти</a>
                </div>
                </div>
            </aside>

            <main className="col-12 col-xl-6">
                
            </main>

                <aside className="col-xl-3 d-none d-xl-block">
                    <div className="card shadow-sm mb-3 bg-warning bg-opacity-10 border-warning">
                    <div className="card-body">
                        <h5 className="card-title text-warning text-darken-3">💡 Съвет на деня</h5>
                        <p className="card-text small">Винаги добавяйте щипка захар към доматения сос, за да неутрализирате киселината.</p>
                    </div>
                    </div>

                    <div className="card shadow-sm">
                    <div className="card-header bg-white fw-bold">🏆 Топ Продукт</div>
                    <img src="https://via.placeholder.com/300x200?text=Spices" className="card-img-top" alt="Spices" />
                    <div className="card-body">
                        <h6>Шарена Сол</h6>
                        <p className="small text-muted">Незаменимата подправка за всяка българска трапеза.</p>
                        <button className="btn btn-sm btn-outline-dark w-100">Научи повече</button>
                    </div>
                    </div>
                </aside>

                </div>
            </div>

            <footer className="bg-dark text-white text-center py-3 mt-auto">
                <div className="container">
                <small>&copy; 2024 Курсов проект "Уеб Програмиране" | React + Bootstrap 5</small>
                </div>
            </footer>
         </div>
        </>
    )
}