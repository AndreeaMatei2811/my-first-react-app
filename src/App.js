import React from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Title from "./components/Title";

// function Hello() {
//   return <h1> say hello!</h1>;
// }

// function Greeting({ age, name }) {
//   const message = age ? `you are ${age}` : `I do not know how old are you`;
//   return (
//     <div>
//       <Hello />
//       <p>this is your name: {name}!</p>
//       <p>and this is your age: {message}</p>
//     </div>
//   );
// }

function App() {
  const allPokemon = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: false,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];

  return (
    <main className="container">
      <Title content="Some Simple Title" />
      <div className="row">
        {allPokemon.map((pokemon) => (
          <div className="col-md-6 col-lg-4">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
