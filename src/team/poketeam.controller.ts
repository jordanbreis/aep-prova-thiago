import TeamService from "./poketeam.service";
import { Request, Response } from "express";

class teamController {
  async create(req: Request, res: Response) {
    const { trainerName, team } = req.body;
    try {
      const results = await TeamService.create(trainerName, team);
      res.json(results);
    } catch (error) {
      console.log(error);
    }
  }

  async find(req: Request, res: Response) {
    try {
      const teams = await TeamService.find();
      res.json(teams);
    } catch (error) {
      console.log(error);
    }
  }

  async findByTrainerName(req: Request, res: Response) {
    const { trainerName } = req.params;

    try {
      const team = await TeamService.findByTrainerName(trainerName);
      res.json(team);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req: Request, res: Response) {
    const { trainerName, newData } = req.body;

    try {
      const updatedTeam = await TeamService.update(trainerName, newData);
      res.json(updatedTeam);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { trainerName } = req.params;

    try {
      const deleteTeam = await TeamService.delete(trainerName);
      res.json(deleteTeam);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new teamController();
