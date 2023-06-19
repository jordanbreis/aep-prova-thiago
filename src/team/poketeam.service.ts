import TeamModel from "./poketeam.schema";
import PokemonModel from "../pokemon/pokemon.schema";

class TeamService {
  async create(trainerName, team) {
    const promises = team.map((pokemon) => {
      return PokemonModel.find({ nome: pokemon.nome });
    });

    const pokemons = await Promise.all(promises).then((pokemons) => {
      return pokemons.map((pokemon) => {
        return { name: pokemon[0].nome };
      });
    });

    const results = await TeamModel.create({ trainerName, team: pokemons });
    return results
  }

  async find() {
    return await TeamModel.find();
  }

  async findByTrainerName(trainerName) {
    return await TeamModel.find({ trainerName });
  }

  async update(trainerName, newData) {
    return TeamModel.updateOne(
      { trainerName },
      { $set: { trainerName: newData.trainerName } }
    );
  }

  async delete(trainerName) {
    return await TeamModel.deleteOne({ trainerName });
  }
}

export default new TeamService();
