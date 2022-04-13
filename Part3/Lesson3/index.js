const { response } = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

let notes = [
  {
    id: 1,
    content: "HTML on helppoa",
    date: new Date(),
    important: true,
  },
  {
    id: 2,
    content: "Selain pystyy suorittamaan vain javascriptiä",
    date: new Date(),
    important: false,
  },
  {
    id: 3,
    content: "HTTP-protokollan tärkeimmät metodit ovat GET ja POST",
    date: new Date(),
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  note ? res.json(note) : res.status(404).end();
});

app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});
const generateId = () => {
  const maxId =
    notes.length > 0
      ? notes
          .map((n) => n.id)
          .sort((a, b) => a - b)
          .reverse()[0] + 1
      : 1;
  return maxId;
};

app.post("/notes", (req, res) => {
  const body = req.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };

  notes = notes.concat(note);
  res.json(note);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
