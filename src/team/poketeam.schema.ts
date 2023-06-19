import { Schema, model } from "mongoose";

const TeamSchema = new Schema({
  treinador: {
    type: String,
    required: true,
  },
  time: [
    {
      pokemon: String,
    },
  ],
});

export default model("PokeTeam", TeamSchema);
