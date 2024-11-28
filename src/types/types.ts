export type BrasileiraoTeam = {
  name: string;
  logo: string;
  url?: string;
};

export type BrasileiraoPlayer = {
  id: number;
  name: string;
  position: "atacante" | "meia" | "defensor" | "goleiro";
  nationality: string;
  team: string;
  shirtNumber: number;
  age: number;
};
