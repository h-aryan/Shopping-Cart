export const fetchPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=15";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  const promises = data.results.map(async (item) => {
    const res = await fetch(item.url);
    const pokemonData = await res.json();

    const price = Math.floor(Math.random() * 91) + 10;

    return {
      id: item.name,
      image: pokemonData.sprites.front_default,
      price,
    };
  });

  return Promise.all(promises);
};
