import React, { Fragment, useState, useEffect } from 'react';
import { fetchPokemons } from '../services/pokemonService';
import type { Pokemon } from './pokemonCard'

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | undefined>([]);

  useEffect(() => {
    async function getPokemons() {
      const list = await fetchPokemons();
      setPokemons(list);
    }

    getPokemons();
  }, []);

  return (
    <Fragment>
      {
        pokemons && pokemons.map(pokemon => (
          <li>{pokemon.name}</li>
        ))
      }
    </Fragment>
  );
}

const PokemonListWrapper = () => {
  return (
    <PokemonList />
  );
}

export default PokemonListWrapper;
