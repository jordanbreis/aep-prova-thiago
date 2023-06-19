import { Request, Response } from "express";
import pokemonService from "./pokemon.service";

class pokemonController {
  constructor() {}

  //Da Get na api
  async getAPI(req: Request, res: Response) {
    const result = await pokemonService.getAPI();
    res.json(result);
  }

  //Consome o array de nome + url
  async consAPI(req: Request, res: Response) {
    const result = await pokemonService.consAPI();
    res.json(result);
  }

  //Ordena e salva o conteudo consumido da maneira pedida na prova
  async ordAPI(req: Request, res: Response) {
    const result = await pokemonService.ordAPI();
    res.json(result);
  }

  //Ordena e salva o conteudo consumido da maneira pedida na prova
  async ordPorTipo(req: Request, res: Response) {
    const result = await pokemonService.ordPorTipo();
    res.json(result);
  }
}

export default new pokemonController();
