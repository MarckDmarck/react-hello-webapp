const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			allCharacters:[],
			characters:{},
			planets:{},
			favorites:[],
			allPlanets:[]
		},
		actions: {
			getPlanets: () => {
				try {
					fetch("https://swapi.dev/api/planets")
					.then((resp) => {
						if(!resp.ok) {
							throw new Error("La respuesta del servidor fue mala")
						}
						return resp.json();
					})
					.then((data) => {
						setStore({allPlanets: data.results})
						const onePlanet = data.results.reduce((acc, pla) => {
							acc[pla.name] = pla
							return acc;
						}, {})
						setStore({planets: onePlanet})
					})

				} catch(error) {
					console.error("Hubo un problema al hacer el llamado al fetch",error)
				}
			},
			removeFavorite: (name) => {
				const store = getStore();
				console.log("antes", store.favorites)
				setStore({ favorites: store.favorites.filter(fav => fav !== name )})
				console.log("despues", store.favorites)
			},
			addFavorite: (name) => {
				const store = getStore()
				
				setStore({favorites:[...store.favorites, name] })
			},
			getCharacters: () => {
				try {
					 fetch("https://swapi.dev/api/people")
					.then((resp) => {
						if(!resp.ok) {
							throw new Error("Hubo un error al obtener los datos")
						}
						return resp.json()
					})
					.then((data) => {
						setStore({allCharacters : data.results})
						const oneCharacter = data.results.reduce((acc, char) => {
							acc[char.name] = char;
							return acc;
						}, {})
						setStore({characters: oneCharacter})
						console.log("andamos probando",oneCharacter)
					})

				}catch (error) {
					console.error("No se pudo realizar el fetch", error)
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
