import { BrasileiraoPlayer } from "../types/types";
import api from "./api";

const getAllBrasileiraoPlayers = (): Promise<BrasileiraoPlayer[]> => {
  return api
    .get<BrasileiraoPlayer[]>("/brasileiraoPlayers")
    .then((response) => response.data);
};

const updateBrasileiraoPlayer = (player: BrasileiraoPlayer) => {
  return api
    .put(`/updateBrasileiraoPlayer/${player.id}`, player)
    .then((response) => response.status);
};

const deleteBrasileiraoPlayer = (playerId: number) => {
  return api
    .delete(`/deleteBrasileiraoPlayer/${playerId}`)
    .then((response) => response.status);
};

export default {
  getAllBrasileiraoPlayers,
  updateBrasileiraoPlayer,
  deleteBrasileiraoPlayer,
};
