import React, { useContext } from "react";
import planets from "../../img/planets.jpg"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";


export const PlanetCard =(props)=>{
    const {actions, store} = useContext(Context);
    const isFavorite = store.favorites.includes(props.name);
    const navigate = useNavigate();

    return(
        <div className="card m-3" style={{"width":"16rem", "border":"1px solid black"}}>
            <img src={planets} className="card-img-top my-1" alt="imagen-planet" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><strong>Population:</strong> {props.population}</p>
                <p className="card-text"><strong>Terrain:</strong> {props.terrain}</p>
                <button onClick={()=> navigate("/planet/" + props.name)} className="btn btn-outline-primary">Learn More</button>
                <button className="btn btn-outline-primary mx-4" onClick={() => isFavorite ? actions.removeFavorite(props.name) : actions.addFavorite(props.name)} >
                    <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                </button>
            </div>
        </div>
    )
}