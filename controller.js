const express = require("express");
const playlistService = require("./service");
const { playlist } = require("./dataAccess");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome, to access the API please use /playlist endpoint");
});

app.post("/playlist", (req, res) => {
  const { id, title, artists, url } = req.body;
  const song = { id, title, artists, url, playCount: 0 };
  playlistService.addSong(song);
  res.status(201).send(`Congrats, ${song.title} by ${song.artists} has been added`);
});

app.get("/playlist/:id", (req, res) => {
  const songId = req.params.id;
  const song = playlistService.playSong(songId);
  if (!song) {
    return res.status(404).json({ error: "Song not found" });
  }
  res.json({ message: "Playing song", song });
});

app.get("/playlist", (req, res) => {
  const sortedSongs = playlistService.getSortedSongs();
  res.json({ playlist: sortedSongs });
});

module.exports = app;
