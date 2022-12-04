/* eslint-disable react/prop-types */
function PokemonStats({ name, baseState }) {
  let width = null;
  if (name === "hp") {
    width = baseState * 0.4;
  } else if (name === "attack") {
    width = baseState * 0.74626865671;
  } else if (name === "defense") {
    width = baseState * 0.55555555555;
  } else if (name === "special-attack") {
    width = baseState * 0.64935064935;
  } else if (name === "special-defense") {
    width = baseState * 0.8;
  } else {
    width = baseState * 0.71428571428;
  }
  return (
    <div>
      <div className="">
        <span className="">{name}</span>
        <span className="">{baseState}</span>
      </div>
      <div className="">
        <div className="" style={{ width: `${width}` }} />
      </div>
    </div>
  );
}

export default PokemonStats;
