import { Router } from "express";
import healthcheckController from "./healthcheck/healthcheck.controller";
import pokemonController from "./pokemon/pokemon.controller";
import teamController from "./team/poketeam.controller";

const routes = Router();

routes.get("/home", healthcheckController.healtcheck);
routes.get("/getAPI", pokemonController.getAPI);
routes.get("/consumeAPI", pokemonController.consAPI);
routes.get("/orderAPI", pokemonController.ordAPI);
routes.get("/PokeType", pokemonController.ordPorTipo);

routes.post("/team", teamController.create);
routes.get("/team", teamController.find);
routes.get("/team/trainerName/:trainerName", teamController.findByTrainerName);
routes.put("/team", teamController.update);
routes.delete("/team/:trainerName", teamController.delete);

export default routes;
