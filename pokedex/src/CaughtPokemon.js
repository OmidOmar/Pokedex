import { useState } from "react";

//const pokemons = ["Ditto", "Butterfree", "Eevee", "Squirtle"];

const CaughtPokemon = (props) => {
  let [caught, setCaught] = useState([]);
  let [pokemonNameInput, setPokemonNameInput] = useState("");
  const catchPokemon = () => {
    // setCaught((pokemon) => [
    //   ...pokemon,
    //   pokemons[Math.floor(Math.random() * pokemons.length)],
    // ]);
    setCaught(caught.concat(pokemonNameInput))
  };

  const handleInputChange = (e) => {
    setPokemonNameInput(e.target.value)
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
      <input
        type="text"
        onChange={handleInputChange}
        value={pokemonNameInput}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {props.abilities.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
