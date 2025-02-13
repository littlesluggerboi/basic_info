import http from "http";
import fs from "node:fs";

function sendFile(filename, response) {
  try {
    fs.createReadStream(filename).pipe(response);
  } catch (error) {
    console.log(error);
  }
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      sendFile("./index.html", res);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      sendFile("./about.html", res);
      break;
    case "/contact-me":
      res.writeHead(200, { "Content-Type": "text/html" });
      sendFile("./contact-me.html", res);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      sendFile("./404.html", res);
      break;
  }
});

server.listen(8080, "localhost", () => {
  console.log("listening in port 8080");
});
