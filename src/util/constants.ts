//TODO: quando tiver banco de dados, fazer as adaptações aqui para buscar corretamente os valores do banco
import { BrasileiraoTeam, BrasileiraoPlayers } from "./types";

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

export const brasileiraoPlayers: BrasileiraoPlayers[] = [
  {
    name: "Sergio Rochet",
    position: "goleiro",
    nationality: "Uruguai",
    shirtNumber: 1,
    age: 31,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Ivan",
    position: "goleiro",
    nationality: "Brasil",
    shirtNumber: 22,
    age: 27,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Anthoni",
    position: "goleiro",
    nationality: "Brasil",
    shirtNumber: 24,
    age: 22,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Fabrício",
    position: "goleiro",
    nationality: "Brasil",
    shirtNumber: 12,
    age: 38,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Kauan",
    position: "goleiro",
    nationality: "Brasil",
    shirtNumber: 22,
    age: 21,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Vitão",
    position: "defensor",
    nationality: "Brasil",
    shirtNumber: 44,
    age: 24,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Clayton",
    position: "defensor",
    nationality: "Brasil",
    shirtNumber: 20,
    age: 24,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Agustín Rogel",
    position: "defensor",
    nationality: "Uruguai",
    shirtNumber: 18,
    age: 27,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Gabriel Mercado",
    position: "defensor",
    nationality: "Argentina",
    shirtNumber: 25,
    age: 37,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Alexandro Bernabéi",
    position: "defensor",
    nationality: "Argentina",
    shirtNumber: 26,
    age: 24,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Renê",
    position: "defensor",
    nationality: "Brasil",
    shirtNumber: 6,
    age: 32,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Nathan",
    position: "defensor",
    nationality: "Brasil",
    shirtNumber: 23,
    age: 23,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Braian Aguirre",
    position: "defensor",
    nationality: "Argentina",
    shirtNumber: 35,
    age: 24,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Thiago Maia",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 29,
    age: 27,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Bruno Gomes",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 15,
    age: 23,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Fernando",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 5,
    age: 37,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Rômulo",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 40,
    age: 24,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Bruno Henrique",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 8,
    age: 35,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Gustavo Prado",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 47,
    age: 19,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Alan Patrick",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 10,
    age: 33,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Gabriel Carvalho",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 34,
    age: 17,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Hyoran",
    position: "meia",
    nationality: "Brasil",
    shirtNumber: 7,
    age: 31,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Wanderson",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 11,
    age: 30,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Wesley",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 21,
    age: 25,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Bruno Tabata",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 17,
    age: 27,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Rafael Borré",
    position: "atacante",
    nationality: "Colômbia",
    shirtNumber: 19,
    age: 29,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Enner Valencia",
    position: "atacante",
    nationality: "Equador",
    shirtNumber: 13,
    age: 35,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Lucas Alario",
    position: "atacante",
    nationality: "Argentina",
    shirtNumber: 31,
    age: 32,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Lucca",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 45,
    age: 21,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Ricardo Mathias",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 49,
    age: 18,
    team: { name: "Internacional", logo: internacional },
  },
  {
    name: "Lucca Drummond",
    position: "atacante",
    nationality: "Brasil",
    shirtNumber: 48,
    age: 20,
    team: { name: "Internacional", logo: internacional },
  },
];
