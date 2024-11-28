import { BrasileiraoPlayer } from "../types/types";
import api from "./api";

const getAllBrasileiraoPlayers = (): Promise<BrasileiraoPlayer[]> => {
  return api
    .get<BrasileiraoPlayer[]>("/brasileiraoPlayers")
    .then((response) => response.data);
};

const updateBrasileiraoPlayer = (player: BrasileiraoPlayer) => {
  return api.put(`/updateBrasileiraoPlayer/${player.id}`, player);
};

const deleteBrasileiraoPlayer = (playerId: number) => {
  return api.delete(`/deleteBrasileiraoPlayer/${playerId}`);
};

// TODO: adicionar método POST

export default {
  getAllBrasileiraoPlayers,
  updateBrasileiraoPlayer,
  deleteBrasileiraoPlayer,
};
