import express from "express";
const PORT = parseInt(process.env.PORT) || 8080;
const dirname = import.meta.dirname;

const app = express();

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: dirname });
});

app.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me");
});

app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile("./404.html", { root: dirname });
});
