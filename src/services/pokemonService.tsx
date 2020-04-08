const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemon = async (id: string) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  const data = await response.json();

  return data;
};
