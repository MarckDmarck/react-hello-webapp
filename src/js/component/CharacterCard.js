import React, { useContext } from "react";
import character from "../../img/starwarsCharacters.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const CharacterCard =(props)=> {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const isFavorite = store.favorites.includes(props.name);

    return(
        <div className="card m-3" style={{"width":"16rem", "border":"1px solid black"}}>
            <img src={character} className="card-img-top my-1" alt="imagen-character" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><strong>Gender:</strong> {props.gender}</p>
                <p className="card-text"><strong>Hair Color:</strong> {props.hair_color}</p>
                <p className="card-text"><strong>Eye Color:</strong> {props.eye_color}</p>
                <button onClick={()=> navigate("/character/" + props.name)} className="btn btn-outline-primary">Learn More</button>
                <button className="btn btn-outline-primary mx-4" onClick={() => isFavorite ? actions.removeFavorite(props.name) : actions.addFavorite(props.name)} >
                    <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                </button>
            </div>
        </div>
    )
}