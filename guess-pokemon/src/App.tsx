/* eslint-disable react/jsx-sort-props */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from "react";

import getPokemon from "./api";

function App() {
  const [pokemon, setPokemon] = useState({id: 0, name: "", image: ""});
  const [input, setInput] = useState("");

  useEffect(() => {
    getPokemon.random().then((pokemons) => setPokemon(pokemons));
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (input.toLowerCase() === pokemon.name) {
      return console.log("Adivinaste!");
    }
  }

  function handleChange(event: any) {
    setInput(event.target.value);
  }

  return (
    <main>
      <p>Who&apos;s that Pokémon?</p>
      <img id="img" alt="" src={pokemon.image} />
      <p id="p" className="name">
        {pokemon.name}
      </p>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Guess!</button>
      </form>
    </main>
  );
}

export default App;
