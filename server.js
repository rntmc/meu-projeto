const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer(function (req, res) {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    // Adicione mais tipos MIME conforme necessário
  }[extname] || "application/octet-stream";

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(500);
        res.end("Internal Server Error: " + error.code);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("Server error:", error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});