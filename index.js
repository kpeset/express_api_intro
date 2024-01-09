// Création du serveur express

const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
  console.info(`Le serveur express tourne. Port : ${port}`);
});

// Data

const games = [
  {
    id: 1,
    name: "Super Mario Bros.",
    category: "Platform",
    year: 1985,
    price: 43,
  },
  {
    id: 2,
    name: "The Legend of Zelda: Ocarina of Time",
    category: "Adventure",
    year: 1998,
    price: 26,
  },
  {
    id: 3,
    name: "Tetris",
    category: "Puzzle",
    year: 1984,
    price: 60,
  },
  {
    id: 4,
    name: "Minecraft",
    category: "Sandbox",
    year: 2011,
    price: 54,
  },
  {
    id: 5,
    name: "Grand Theft Auto V",
    category: "Action",
    year: 2013,
    price: 25,
  },
  {
    id: 6,
    name: "The Legend of Zelda: Breath of the Wild",
    category: "Action-adventure",
    year: 2017,
    price: 70,
  },
  {
    id: 7,
    name: "Pac-Man",
    category: "Arcade",
    year: 1980,
    price: 150,
  },
  {
    id: 8,
    name: "Doom",
    category: "FPS",
    year: 1993,
    price: 23,
  },
  {
    id: 9,
    name: "Final Fantasy VII",
    category: "RPG",
    year: 1997,
    price: 12,
  },
  {
    id: 10,
    name: "Super Mario 64",
    category: "Platform",
    year: 1996,
    price: 64,
  },
  {
    id: 11,
    name: "The Elder Scrolls V: Skyrim",
    category: "RPG",
    year: 2011,
    price: 1000,
  },
  {
    id: 12,
    name: "Street Fighter II",
    category: "Fighting",
    year: 1991,
    price: 10,
  },
  {
    id: 13,
    name: "Counter-Strike",
    category: "FPS",
    year: 1999,
    price: 23,
  },
  {
    id: 14,
    name: "The Witcher 3: Wild Hunt",
    category: "RPG",
    year: 2015,
    price: 46,
  },
  {
    id: 15,
    name: "Metal Gear Solid",
    category: "Action",
    year: 1998,
    price: 150,
  },
  {
    id: 16,
    name: "Halo: Combat Evolved",
    category: "FPS",
    year: 2001,
    price: 30,
  },
  {
    id: 17,
    name: "Donkey Kong",
    category: "Platform",
    year: 1981,
    price: 20,
  },
  {
    id: 18,
    name: "Resident Evil 4",
    category: "Horror",
    year: 2005,
    price: 30,
  },
  {
    id: 19,
    name: "The Sims",
    category: "Simulation",
    year: 2000,
    price: 4000,
  },
  {
    id: 20,
    name: "Red Dead Redemption 2",
    category: "Action",
    year: 2018,
    price: 35,
  },
  {
    id: 21,
    name: "Doom 2",
    category: "FPS",
    year: 2018,
    price: 64,
  },
];

// Mes fonctions

const welcomeToApi = (req, res) => {
  res.send("API - VIDEO GAMES");
};

const getAllGames = (req, res) => {
  const defaultLimit = 10;
  const limit = parseInt(req.query.limit) || defaultLimit;
  const limitedList = games.slice(0, limit);

  res.json(limitedList);
};

const getGameById = (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = games.find((game) => game.id === gameId);
  console.log(gameId, game);
  res.json(game);
};

const getFilteredGames = (req, res) => {
  const filter = req.query.category;

  const filteredList = games.filter(
    (game) => game.category.toLowerCase() === filter.toLowerCase()
  );

  if (filteredList.length > 0) {
    res.json(filteredList);
  } else {
    res.send("Déso mais ton jeu existe pas !");
  }
};

// Mes routes

app.get("/", welcomeToApi);
app.get("/games", getAllGames);
app.get("/games/:id", getGameById);
app.get("/filter", getFilteredGames);
