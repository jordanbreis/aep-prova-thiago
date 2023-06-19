import { Request, Response } from "express";
import healthcheckService from "./healthcheck.service";

class healthcheckCotroller {
    constructor() {}
    async healtcheck(req: Request, res: Response) {
        res.json(healthcheckService.healtcheck())                
    }
}

export default new healthcheckCotroller()