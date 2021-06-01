import "./App.css";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Modal from "react-modal";

function PokeDex() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "black",
      color: "white",
    },
    overlay: { backgroundColor: "grey"},
  };

  const getPokemonDetails = async (url) => {
    setIsLoading(true);
    try {
      const request = {
        url: url,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios(request);
      setPokemonDetail(response.data);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  const callPokeDex = async () => {
    setIsLoading(true);
    try {
      const request = {
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios(request);
      setPokemons(response.data.results);
    } catch {
    } finally {
      setIsLoading(false);
    }
  };
  const pokemonView = (pokemon) => {
    return (
      <div>
        <p
          onClick={() => {
            getPokemonDetails(pokemon.url);
          }}
        >
          {pokemon.name}
        </p>
      </div>
    );
  };
  useEffect(() => {
    callPokeDex();
  }, []);

  return (
    <div>
      <header className="App-header">
        {isLoading ? (
          <>
            <div className="App">
              <header className="App-header">
                <ReactLoading type="bars" height="10%" width="20%" />
                <b>Pouching Pokemon</b>
              </header>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome to pokedex !</h1>
            {pokemons.map((pokemon) => {
              return pokemonView(pokemon);
            })}
          </>
        )}
      </header>
      {pokemonDetail && (
        <Modal
          isOpen={pokemonDetail}
          contentLabel={pokemonDetail?.name || ""}
          onRequestClose={() => {
            setPokemonDetail(null);
          }}
          style={customStyles}
        >
          <div>
            <img src={pokemonDetail.sprites.front_default} />
            <p>{pokemonDetail.name}</p>
            <ul>
              {pokemonDetail.stats.map((stat) => {
                return (
                  <li>
                    {stat.stat.name} : {stat.base_stat}
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PokeDex;
