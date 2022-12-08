/* eslint-disable react/prop-types */
function FavoriteButton({ pokemonName }) {
  const handleClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      const arrFavorites = [pokemonName];
      localStorage.setItem("favorites", JSON.stringify(arrFavorites));
    } else {
      const arrFavorites = [...favorites, pokemonName];
      localStorage.setItem("favorites", JSON.stringify(arrFavorites));
    }
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Add to favorites
      </button>
    </div>
  );
}

export default FavoriteButton;
