/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 0 auto;
  margin: 10px;
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  color: white;
  background-color: rgb(29 78 216);
  cursor: pointer;
  &:hover {
    background-color: rgb(30 64 175);
  }
`;

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
      <StyledButton type="button" onClick={handleClick}>
        Add to favorites
      </StyledButton>
    </div>
  );
}

export default FavoriteButton;
