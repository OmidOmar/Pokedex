import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import { useState } from "react";
import PokemonMoveSelector from "./PokemonMoveSelector";
import PokemonCity from "./PokemonCity";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();
const logWhenClicked = () => {
  console.log("it doesn't matter what the message is");
  console.log(useState);
};

const App = () => {
  return (
    <div>
      <Logo appName="Pokedex" clicked={logWhenClicked} />
      <BestPokemon />
      <CaughtPokemon abilities={abilities} date={date} />
      <PokemonMoveSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
