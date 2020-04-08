import React, { Fragment, useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemonService';

type PokemonCardProps = {
  id: string,
}

type Pokemon = {
  name: string,
}

export const PokemonCard = (props: PokemonCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);

  const { id } = props;

  useEffect(() => {
    async function getPokemonDetails() {
      const pokemonDetails = await fetchPokemon(id);
      setPokemon(pokemonDetails);
    }

    getPokemonDetails();
  }, [])
  return (
    <Fragment>
      Pokemon: { pokemon && pokemon.name }
    </Fragment>
  );
};

const PokemonCardWrapper = (props: PokemonCardProps) => {
  return (
    <PokemonCard
      id={'1'}
    />
  );
};

export default PokemonCardWrapper;
