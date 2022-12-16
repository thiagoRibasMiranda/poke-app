import pokeball from "./img/pokeball.png";
import "./loading.css";

function Loading() {
  return (
    <div>
      <img className="Pokeball" src={pokeball} alt="pokeball" />
    </div>
  );
}

export default Loading;
