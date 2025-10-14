import { Link } from "react-router-dom"

const style = {
    width: "18rem",
}
export const PlanetCard = ({uid,name,dispatch}) => {

    return (
        <>
            <div className="card" style={style}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/profile-page/planets/${uid}`}>
                    <button className="btn btn-primary">Learn More</button>
                    </Link>
                </div>
                </div>
        </>
    )
}
