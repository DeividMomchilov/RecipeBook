export default function Receipe(props){
    return(
        <div key={props.id} className="col-md-6">
            <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden recipe-card">
                <div className="position-relative">
                    <img src={props.img} className="card-img-top object-fit-cover" alt={props.title} style={{height: "200px"}} />
                    <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2 shadow-sm">
                        {props.cat}
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text text-muted small">{props.desc}</p>
                </div>                                   
                <button>Рецепта</button>
            </div>
        </div>
    )
}