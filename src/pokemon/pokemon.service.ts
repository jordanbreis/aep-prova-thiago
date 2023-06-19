import { writeFile, readFile } from "fs/promises";
import pokemonSchema from "./pokemon.schema";
import { pokemonType } from "./pokemon.types";
import { getRandomMoves } from "./pokemon.random";

class pokemonService {
  constructor() {}

  async getAPI() {
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    ).then((response) => response.json());
    await writeFile(
      "./src/pokemon/pokemon.json",
      JSON.stringify(result, null, 2)
    );
    return "API do pokemon salva";
  }

  async consAPI() {
    const content = JSON.parse(
      await readFile("./src/pokemon/pokemon.json", "utf-8")
    );
    const pokemonEach: any[] = content.results;

    for (let index = 0; index < 4; index++) {
      const element = pokemonEach[index].url;
      const pokeContent = await fetch(element).then((res) => res.json());
      let haveObject;

      try {
        haveObject = JSON.parse(
          await readFile("./src/pokemon/PokemonContent.json", "utf-8")
        );
      } catch (error) {
        haveObject = [];
      }

      if (haveObject.length) {
        haveObject.push(pokeContent);
        await writeFile(
          "./src/pokemon/PokemonContent.json",
          JSON.stringify(haveObject, null, 2)
        );
      } else {
        haveObject.push(pokeContent);
        await writeFile(
          "./src/pokemon/PokemonContent.json",
          JSON.stringify(haveObject, null, 2)
        );
      }
    }

    return "Conteudo do pokemon no PokemonContent.json";
  }

  async ordAPI() {
    const content = JSON.parse(
      await readFile("./src/pokemon/PokemonContent.json", "utf-8")
    );
    const newPokemon: pokemonType[] = content.map((pokemon) => {
      let newPokemon = {
        nome: pokemon.name,
        tipo: pokemon.types[0].type.name,
        estatisticas: pokemon.stats,
        NrDex: pokemon.game_indices[9].game_index,
        altura: pokemon.height,
        peso: pokemon.weight,
        movimentos: getRandomMoves(pokemon.moves),
      };
      return newPokemon;
    });
    await writeFile(
      "./src/pokemon/OrderPokemon.json",
      JSON.stringify(newPokemon, null, 2)
    );
    pokemonSchema.insertMany(newPokemon);
    return "Lista de Pokemon ordenada e salvada no banco de dados e OrderPokemon.json";
  }

  async ordPorTipo() {
    const content = JSON.parse(
      await readFile("./src/pokemon/OrderPokemon.json", "utf-8")
    );
    const results = content.reduce((pokemonsByType, currentPokemon) => {
      pokemonsByType[currentPokemon.tipo] =
        pokemonsByType[currentPokemon.tipo] || [];
      pokemonsByType[currentPokemon.tipo].push(currentPokemon);
      return pokemonsByType;
    }, {});
    await writeFile(
      "./src/pokemon/PokeByType.json",
      JSON.stringify(results, null, 2)
    );
    return results;
  }
}

export default new pokemonService();
