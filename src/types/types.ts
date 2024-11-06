export type BrasileiraoTeam = {
  name: string;
  logo: string;
  url?: string;
};

export type BrasileiraoPlayer = {
  name: string;
  position: "atacante" | "meia" | "defensor" | "goleiro";
  nationality: string;
  team: BrasileiraoTeam;
  age: number;
  shirtNumber: number;
  photo?: string;
};
