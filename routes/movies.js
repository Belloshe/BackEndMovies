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
  const numberId = parseID(id);
  
  const movie = db.find((item) => item.imdbID === numberId);
  if (!movie) {
    return res
      .status(404)
      .json({ message: "Ingen film med det id:t kunde hittas!" });
  }
  res.json(movie);
});

// Ta bort en karaktär baserat på ID
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const numberId = parseID(id);

  const movie = db.find((item) => item.imdbID === numberId);

  if (!movie) {
    return res
      .status(404)
      .json({ message: "Ingen karaktär med det idt kunde hittas!" });
  }
  const newData = db.filter((item) => item.imdbID !== numberId);
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
    imdbID: nextId,
  };

  nextId++;
  db.push(newMovie);
  res.json(newMovie);
});

// Uppdatera en karaktär baserat på ID
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const numberId = parseID(id);

  const movie = req.body.movie;
  console.log(id);
  console.log(movie);

  const index = db.findIndex((item) => item.imdbID === numberId);
  console.log(index);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: "Inget id matchar någon befintlig karaktär" });
  }

  const updatedMovie = { ...db[index], ...movie };
  db[index] = updatedMovie;

  res.json(updatedMovie);
});

function parseID(input) {
  // Check if the input string contains only letters
  if (/^[a-zA-Z]+$/.test(input)) {
    return input;
  }

  // Check if the input string contains only numbers
  if (/^\d+$/.test(input)) {
    return parseInt(input);
  }

  // If the input string contains both letters and numbers, or if it contains
  // any other characters, return the input string as is
  return input;
}

module.exports = router;
