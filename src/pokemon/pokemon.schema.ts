import { Schema, model } from "mongoose";

const PokemonSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: Array,
    required: true,
  },
  estatisticas: {
    type: Array,
    required: true,
  },
  NrDex: {
    type: Number,
    required: true,
  },
  altura: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  movimentos: {
    type: Array,
    required: true,
  },
});

export default model("pokemon", PokemonSchema);
