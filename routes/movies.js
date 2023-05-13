const express = require("express");
const router = express.Router();
const mockData = require("../mockData");

// Ladda initialdata
let db = mockData;

// Hämta alla karaktärer
router.get("/", (req, res) => {
  res.json(db);
});

// Hämta en specifik karaktär baserat på ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  // const numberId = parseInt(id);
  const movie = db.find((item) => item.imdbID === id);
  if (!movie) {
    return res
      .status(404)
      .json({ message: "Ingen karaktär med det idt kunde hittas!" });
  }
  res.json(movie);
});

// Ta bort en karaktär baserat på ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const numberId = parseInt(id);

  const movie = db.find((item) => item.id === numberId);

  if (!movie) {
    return res
      .status(404)
      .json({ message: "Ingen karaktär med det idt kunde hittas!" });
  }
  const newData = db.filter((item) => item.id !== numberId);
  db = newData;

  res.json({ message: "Karaktären har blivit borttagen!" });
});

// Skapa ett nytt unikt ID för nya karaktärer
let nextId = 28234;

// Lägg till ny karaktär
router.post("/", (req, res) => {
  const movie = req.body.movie;
  const newMovie = {
    ...movie,
    id: nextId,
  };

  nextId++;

  db.push(newMovie);
  res.json(newMovie);
});

// Uppdatera en karaktär baserat på ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const numberId = parseInt(id);
  const movie = req.body.movie;

  const index = db.findIndex((item) => item.id === numberId);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "Inget id matchar någon befintlig karaktär" });
  }

  const updatedMovie = { ...db[index], ...movie };
  db[index] = updatedMovie;

  res.json(updatedMovie);
});

module.exports = router;
