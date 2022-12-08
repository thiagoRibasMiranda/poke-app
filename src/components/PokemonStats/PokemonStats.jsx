/* eslint-disable react/prop-types */
import {
  attackConvert,
  defenseConvert,
  hpConvert,
  specialAttackConvert,
  specialDefenseConvert,
  speedConvert,
} from "../../constants/constStats";
import "./PokemonStats.css";

function PokemonStats({ name, baseState }) {
  let width = null;
  if (name === "hp") {
    width = baseState * hpConvert;
  } else if (name === "attack") {
    width = baseState * attackConvert;
  } else if (name === "defense") {
    width = baseState * defenseConvert;
  } else if (name === "special-attack") {
    width = baseState * specialAttackConvert;
  } else if (name === "special-defense") {
    width = baseState * specialDefenseConvert;
  } else {
    width = baseState * speedConvert;
  }
  return (
    <div>
      <div className="">
        <span className="">{name}</span>
        <span className="">{baseState}</span>
      </div>
      <div className="teste">
        <div className="teste2" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default PokemonStats;
