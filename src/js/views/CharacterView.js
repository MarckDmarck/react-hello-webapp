import React, { useContext } from "react";
import { useParams } from "react-router";
import starwars from "../../img/starwarsCharacters.jpg"
import { Context } from "../store/appContext";

export const CharacterView =()=> {
    const {store} = useContext(Context)
    const {name} = useParams();
    const character = store.characters[name];

    if (!character) {
        return <div>Cargando...</div>
    }

    return(
        <div>
           
            <div className="d-flex justify-content-between mx-5">
                <img src={starwars} style={{"width":"800px", "height":"400px"}} alt="character-view"/>
                 <div className="mx-5">
                    <h1>{name}</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nam libero justo laoreet sit amet cursus sit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nam libero justo laoreet sit amet cursus sit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between m-5">
                <p><strong>Name:</strong> {character.name}</p>
                <p><strong>Birth Year:</strong> {character.birth_year}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Height:</strong> {character.height}</p>
                <p><strong>Skin Color:</strong> {character.skin_color}</p>
                <p><strong>Eye Color:</strong> {character.eye_color}</p>
            </div>

        </div>
    )
}