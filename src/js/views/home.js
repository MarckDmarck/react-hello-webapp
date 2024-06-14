import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => {
	const { store } = useContext(Context);

	console.log(store.allCharacters)
	return(
		<div className="Container">
			<h1>Characters</h1>
			<div className="container-characters row flex-row flex-nowrap" style={{"overflowX":"auto"}}>
				{store.allCharacters.map((element, index) => {
					return(<CharacterCard key={index} name={element.name} gender={element.gender} hair_color={element.hair_color} eye_color={element.eye_color} />
				)})}
			</div>
			<h1 className="my-3">Planets</h1>
			<div className="container-planets row flex-row flex-nowrap" style={{"overflowX":"auto"}}>
				{store.allPlanets.map((element, index) => {
					return( <PlanetCard key={index} name={element.name} population={element.population} terrain={element.terrain} /> )
				})}
			</div>
		</div>
	)
}
