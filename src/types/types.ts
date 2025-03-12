// NOTE: I - Interface (somente no front) ;  D - Database (está em todo o projeto, vem do banco, ...)

export type IBrasileiraoTeam = {
  name: string;
  logo: string;
  url?: string;
};

export type DBrasileiraoPlayer = {
  id: number;
  name: string;
  position: "atacante" | "meia" | "defensor" | "goleiro" | "";
  nationality: string;
  team: string;
  shirtNumber: number;
  age: number;
};

export type IAppAssets = {
  topBarHeight: number;
};
