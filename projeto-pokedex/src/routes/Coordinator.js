export const goToHome = (navigate) => {navigate("/")}

export const goToPokedex = (navigate) => {navigate("/pokedex")}

export const goToPokemonDetail = (navigate,name)=> {navigate(`/pokemon-detail/${name}`)}