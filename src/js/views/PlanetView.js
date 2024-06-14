import React, { useContext } from "react";
import { useParams } from "react-router";
import planetss from "../../img/planets.jpg"
import { Context } from "../store/appContext";

export const PlanetView =()=> {
    const {store} = useContext(Context)
    const {name} = useParams();
    const planet = store.planets[name];

    if (!planet) {
        return <div>Cargando...</div>
    }

    return(
        <div>
           
            <div className="d-flex justify-content-between mx-5">
                <img src={planetss} style={{"width":"800px", "height":"400px"}} alt="planet-view"/>
                 <div className="mx-5">
                    <h1>{name}</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nam libero justo laoreet sit amet cursus sit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique. Massa tincidunt dui ut ornare lectus sit amet est placerat. Nam libero justo laoreet sit amet cursus sit. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between m-5">
                <p><strong>Name:</strong> {planet.name}</p>
                <p><strong>Climate:</strong> {planet.climate}</p>
                <p><strong>Population:</strong> {planet.population}</p>
                <p><strong>Orbital Period:</strong> {planet.orbital_period}</p>
                <p><strong>Rotation Period:</strong> {planet.rotation_period}</p>
                <p><strong>Diameter:</strong> {planet.diameter}</p>
            </div>

        </div>
    )
}