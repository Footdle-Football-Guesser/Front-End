import { DBrasileiraoPlayer } from "../types/types";
import api from "./api";

const getAllBrasileiraoPlayers = (): Promise<DBrasileiraoPlayer[]> => {
  return api
    .get<DBrasileiraoPlayer[]>("/brasileiraoPlayers")
    .then((response) => response.data);
};

const createBrasileiraoPlayer = (player: Omit<DBrasileiraoPlayer, "id">) => {
  return api.post<DBrasileiraoPlayer>(`/newBrasileiraoPlayer`, player);
};

const updateBrasileiraoPlayer = (player: DBrasileiraoPlayer) => {
  return api.put(`/updateBrasileiraoPlayer/${player.id}`, player);
};

const deleteBrasileiraoPlayer = (playerId: number) => {
  return api.delete(`/deleteBrasileiraoPlayer/${playerId}`);
};

// TODO: adicionar método POST

export default {
  getAllBrasileiraoPlayers,
  createBrasileiraoPlayer,
  updateBrasileiraoPlayer,
  deleteBrasileiraoPlayer,
};
