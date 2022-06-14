/* eslint-disable react/jsx-sort-props */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from "react";

import getPokemon from "./api";

function App() {
  const [pokemon, setPokemon] = useState({id: 0, name: "", image: ""});
  const [input, setInput] = useState("");
  const inputPokemon = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getPokemon.random().then((pokemons) => setPokemon(pokemons));
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();
    if (input.toLowerCase() === pokemon.name) {
      inputPokemon.current!.style.display = "none";
      document.getElementById("img")!.style.filter = "none";
      document.getElementById("p")!.style.display = "flex";
      document.getElementById("p")!.innerText = `${pokemon.name.toUpperCase()} is the ${
        pokemon.id
      }th Pokémon! ✅`;
      //document.getElementById("input")!.style.display = "none";
      document.getElementById("button-playAgain")!.style.display = "flex";
      document.getElementById("button-guess")!.style.display = "none";
    } else {
      document.getElementById("p")!.style.display = "flex";
      document.getElementById("input")!.setAttribute("class", "nes-input is-error");
      document.getElementById("p")!.innerText = "Incorrect, try again!";
    }
  }

  function handleChange(event: any) {
    setInput(event.target.value);
  }

  function handlePlayAgain(event: any) {
    event.preventDefault();
    setInput("");
    getPokemon.random().then((pokemons) => setPokemon(pokemons));
    document.getElementById("img")!.style.filter = "brightness(0)";
    document.getElementById("input")!.style.display = "flex";
    document.getElementById("input")!.setAttribute("class", "nes-input");
    document.getElementById("button-playAgain")!.style.display = "none";
    document.getElementById("button-guess")!.style.display = "flex";
    document.getElementById("p")!.style.display = "none";
  }

  return (
    <main>
      <div className="main">
        <p>Who&apos;s that Pokémon?</p>
        <img id="img" alt="" src={pokemon.image} />
        <p id="p" className="name">
          {" "}
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input
            autoFocus
            ref={inputPokemon}
            id="input"
            type="text"
            className="nes-input"
            value={input}
            onChange={handleChange}
          />
          <button id="button-guess" className="nes-btn is-primary">
            Guess!
          </button>
          <button onClick={handlePlayAgain} id="button-playAgain" className="nes-btn is-primary">
            Play again!
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
