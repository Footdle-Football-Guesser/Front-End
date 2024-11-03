//TODO: quando tiver banco de dados, fazer as adaptações aqui para buscar corretamente os valores do banco
import { BrasileiraoTeam } from "./types";

import athtleticoP from "../assets/escudos/Athletico Paranaense.png";
import athtleticoG from "../assets/escudos/Atlético Goianiense.png";
import athtleticoM from "../assets/escudos/Atlético Mineiro.png";
import bahia from "../assets/escudos/Bahia.png";
import botafogo from "../assets/escudos/Botafogo.png";
import corinthians from "../assets/escudos/Corinthians.png";
import criciuma from "../assets/escudos/Criciúma.png";
import cruzeiro from "../assets/escudos/Cruzeiro.png";
import cuiaba from "../assets/escudos/Cuiabá.png";
import flamengo from "../assets/escudos/Flamengo.png";
import fluminense from "../assets/escudos/Fluminense.png";
import fortaleza from "../assets/escudos/Fortaleza.png";
import gremio from "../assets/escudos/Grêmio.png";
import internacional from "../assets/escudos/Internacional.png";
import juventude from "../assets/escudos/Juventude.png";
import palmeiras from "../assets/escudos/Palmeiras.png";
import redbullbragantino from "../assets/escudos/Red Bull Bragantino.png";
import saopaulo from "../assets/escudos/São Paulo.png";
import vasco from "../assets/escudos/Vasco da Gama.png";
import vitoria from "../assets/escudos/Vitória-BA (2).png";

export const brasileiraoTeamsList: BrasileiraoTeam[] = [
  { name: "Athletico Paranaense", logo: athtleticoP },
  { name: "Atlético Goianiense", logo: athtleticoG },
  { name: "Atlético Mineiro", logo: athtleticoM },
  { name: "Bahia", logo: bahia },
  { name: "Botafogo", logo: botafogo },
  { name: "Corinthians", logo: corinthians },
  { name: "Criciúma", logo: criciuma },
  { name: "Cruzeiro", logo: cruzeiro },
  { name: "Cuiabá", logo: cuiaba },
  { name: "Flamengo", logo: flamengo },
  { name: "Fluminense", logo: fluminense },
  { name: "Fortaleza", logo: fortaleza },
  { name: "Grêmio", logo: gremio },
  { name: "Internacional", logo: internacional },
  { name: "Juventude", logo: juventude },
  { name: "Palmeiras", logo: palmeiras },
  { name: "Red Bull Bragantino", logo: redbullbragantino },
  { name: "São Paulo", logo: saopaulo },
  { name: "Vasco da Gama", logo: vasco },
  { name: "Vitória", logo: vitoria },
];
