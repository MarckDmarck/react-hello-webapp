import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/STAR.png";
import { Context } from "../store/appContext"


export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img style={{"width":"80px", "height":"80px"}} src={starWars} alt="logo-starWars" />
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((element, index) => {
							return(
								<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">{element}
								<button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorite(element)}>
									<i className="fa-solid fa-trash"></i>
								</button>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
