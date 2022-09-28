const { request, response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const phoneBook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello,  Welcome to my phonebook😄 </h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(phoneBook);
});

app.get("/info", (request, response) => {
  response.send(`<h1>Phone book has info for ${phoneBook.length} people </h1>
  ${new Date()}
  `);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log(id);

  const entry = phoneBook.find((entry) => entry.id === id);
  console.log(entry);

  if (entry) {
    response.json(entry);
  } else {
    response.status(404).end("<h1>Entry not available in our phonebook</h1>");
  }
});

app.get();

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`server is runnng on port ${PORT}`);
});
