import { useState } from "react";
import Header from '../../components/header/Header';
import { Link } from "react-router";

const recipesData = [
    {
      id: 1,
      title: "Шопска Салата",
      cat: "Салати",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Shopska_Salad.JPG?width=900",
      desc: "Класическа българска салата с пресни домати, краставици и сирене.",
    },
    {
      id: 2,
      title: "Мусака",
      cat: "Основни",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Musaka_Sofia_2012_PD_1.jpg?width=900",
      desc: "Традиционно ястие с картофи, кайма и заливка.",
    },
    {
      id: 3,
      title: "Баница",
      cat: "Тестени",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Banitsa_and_yogurt.jpg?width=900",
      desc: "Любимата закуска на всеки българин със сирене и яйца.",
    },
    {
      id: 4,
      title: "Таратор",
      cat: "Супи",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Bulgarian_Tarator.jpg?width=900",
      desc: "Студена супа с кисело мляко, краставици и орехи.",
    },
    {
      id: 5,
      title: "Пълнени чушки",
      cat: "Основни",
      img: "https://commons.wikimedia.org/wiki/Special:FilePath/Stuffed_Peppers.jpg?width=900",
      desc: "Чушки пълнени с ориз и кайма, печени на фурна.",
    },
    {
        id: 6,
        title: "Кебапчета",
        cat: "Скара",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kebapcheta.JPG?width=900",
        desc: "Класически кебапчета от кайма и подправки."
      },
      {
        id: 7,
        title: "Кюфтета",
        cat: "Скара",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kyufte.jpg?width=900",
        desc: "Сочни кюфтета от кайма, лук и подправки."
      },
      {
        id: 8,
        title: "Сарми",
        cat: "Основни",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sarmi.jpg?width=900",
        desc: "Сарми с ориз и подправки, завити в зелев/лозов лист."
      },
      {
        id: 9,
        title: "Лютеница",
        cat: "Разядки",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lutenica.jpg?width=900",
        desc: "Пикантна зеленчукова разядка от чушки и домати."
      },
      {
        id: 10,
        title: "Салата Снежанка",
        cat: "Салати",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Snezhanka_Salad.jpg?width=900",
        desc: "Салата с кисело мляко, краставици, чесън и орехи."
      },
      {
        id: 11,
        title: "Кавърма",
        cat: "Основни",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kavarma.jpeg?width=900",
        desc: "Глинено ястие с месо, лук и подправки."
      },
      {
        id: 12,
        title: "Шкембе чорба",
        cat: "Супи",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Shkembe-chorba.jpg?width=900",
        desc: "Класическа чорба със шкембе и чесън/оцет по вкус."
      },
      {
        id: 13,
        title: "Яйца по панагюрски",
        cat: "Закуски",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Panagyurishte-style_eggs.jpg?width=900",
        desc: "Поширани яйца върху кисело мляко и сирене с масло и червен пипер."
      },
      {
        id: 14,
        title: "Качамак",
        cat: "Основни",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kachamak_(polenta).jpg?width=900",
        desc: "Царевична каша, често сервирана със сирене и масло."
      },
      {
        id: 15,
        title: "Гювеч",
        cat: "Основни",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%93%D1%8E%D0%B2%D0%B5%D1%87.JPG?width=900",
        desc: "Зеленчуково/месно ястие, печено бавно в глинен съд."
      },
      {
        id: 16,
        title: "Боб чорба",
        cat: "Супи",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Bean_soup_with_tomatoes_and_red_peppers.jpeg?width=900",
        desc: "Традиционна супа с боб, домати и подправки.",
        receipe: "тук се описва каква е рецептата"
      },
      {
        id: 17,
        title: "Тиквеник",
        cat: "Тестени",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Tikvenik_%28s%C3%BCt%C5%91t%C3%B6k%C3%B6s_b%C3%A1nica%29_k%C3%A9sz%C3%BCl_.jpg?width=900",
        desc: "Сладка баница с тиква, захар и канела."
      },
      {
        id: 18,
        title: "Торта Гараш",
        cat: "Десерти",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Garash.jpg?width=900",
        desc: "Шоколадова торта с орехови блатове и ганаш."
      },
      {
        id: 19,
        title: "Луканка",
        cat: "Мезета",
        img: "https://commons.wikimedia.org/wiki/Special:FilePath/Lukanka.jpg?width=900",
        desc: "Сушен колбас, типичен за българската кухня."
      }
    ];
  
export default function Home() {
    const [filter, setFilter] = useState("Всички");

    const filteredRecipes = filter === "Всички" 
        ? recipesData 
        : recipesData.filter(r => r.cat === filter);

    const categories = ["Всички", "Салати", "Основни", "Тестени", "Супи", "Десерти"];

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <Header />

            <div className="container my-5 flex-grow-1">
                <div className="row g-4">
                    
                    <aside className="col-xl-3 d-none d-xl-block">
                        <div className="card shadow border-0 rounded-4 position-sticky" style={{ top: "100px" }}>
                            <div className="card-header bg-warning text-dark fw-bold rounded-top-4 py-3">
                                🍽️ Категории
                            </div>
                            <div className="list-group list-group-flush rounded-bottom-4">
                                {categories.map(cat => (
                                    <button 
                                        key={cat}
                                        className={`list-group-item list-group-item-action py-3 ${filter === cat ? 'active bg-warning text-dark border-warning fw-bold' : ''}`}
                                        onClick={() => setFilter(cat)}
                                    >
                                        {cat === "Всички" ? "📋" : "👉"} {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <main className="col-12 col-xl-6">
                        <h2 className="mb-4 text-dark border-start border-5 border-warning ps-3">
                            {filter === "Всички" ? "Всички Рецепти" : `Категория: ${filter}`}
                        </h2>
                        
                        <div className="d-xl-none mb-4">
                            <select className="form-select shadow-sm" value={filter} onChange={(e) => setFilter(e.target.value)}>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>

                        <div className="row g-4">
                            {filteredRecipes.map(recipe => (
                                <div key={recipe.id} className="col-md-6">
                                    <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden recipe-card">
                                        <div className="position-relative">
                                            <img src={recipe.img} className="card-img-top object-fit-cover" alt={recipe.title} style={{height: "200px"}} />
                                            <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2 shadow-sm">
                                                {recipe.cat}
                                            </span>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{recipe.title}</h5>
                                            <p className="card-text text-muted small">{recipe.desc}</p>
                                        </div>                                   
                                        <button>Рецепта</button>
                                    </div>
                                </div>
                            ))}
                            {filteredRecipes.length === 0 && (
                                <div className="alert alert-warning text-center">Няма намерени рецепти в тази категория.</div>
                            )}
                        </div>
                    </main>

                    {/* ДЯСНА КОЛОНА: Инфо (Sticky) */}
                    <aside className="col-xl-3 d-none d-xl-block">
                        <div className="position-sticky" style={{ top: "100px" }}>
                            {/* Съвет */}
                            <div className="card shadow border-0 rounded-4 mb-4 bg-primary bg-opacity-10">
                                <div className="card-body">
                                    <h5 className="card-title text-primary fw-bold">💡 Съвет на деня</h5>
                                    <p className="card-text small text-dark">
                                        Винаги добавяйте щипка захар към доматения сос, за да неутрализирате киселината.
                                    </p>
                                </div>
                            </div>

                            
                            <div className="card shadow border-0 rounded-4 overflow-hidden">
                                <div className="card-header bg-white fw-bold py-3 border-bottom-0">
                                    🏆 Топ Продукт
                                </div>
                                <img src="https://via.placeholder.com/300x200/555555/ffffff?text=Spices" className="card-img-top" alt="Spices" />
                                <div className="card-body">
                                    <h6 className="fw-bold">Шарена Сол</h6>
                                    <p className="small text-muted">Незаменимата подправка за всяка българска трапеза.</p>                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <footer className="bg-dark text-white text-center py-4 mt-auto">
                <div className="container">
                    <p className="mb-0 small">&copy; 2024 Курсов проект "Уеб Програмиране"</p>
                </div>
            </footer>
        </div>
    )
}