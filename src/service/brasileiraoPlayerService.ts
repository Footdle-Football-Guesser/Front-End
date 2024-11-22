import { BrasileiraoPlayer } from "../types/types";
import api from "./api";

const getAllBrasileiraoPlayers = (): Promise<BrasileiraoPlayer[]> => {
  return api
    .get<BrasileiraoPlayer[]>("/brasileiraoPlayers")
    .then((response) => response.data);
};

export default { getAllBrasileiraoPlayers };
