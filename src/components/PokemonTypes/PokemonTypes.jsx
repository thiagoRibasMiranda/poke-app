/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledType = styled.span`
  padding: 2px;
  padding-left: 12px;
  padding-right: 12px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(148 163 184);
  border-radius: 9999px;
  font-size: 14px;
`;

function PokemonTypes({ type }) {
  return (
    <div>
      <StyledType>{type}</StyledType>
    </div>
  );
}

export default PokemonTypes;
