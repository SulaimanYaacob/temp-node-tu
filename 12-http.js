const http = require("http");

//req is a request from the client and will be res(responded) by us
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome my doods");
  }
  if (req.url === "/about") {
    res.end("Here is about page my doods");
  }
  //   res.write();
  // without end the server wont load.
  res.end(`<h1>My DUDE, You goT lost or Sumthing?</h1>
  <p>Here use this link to turn back to safety</p>
  <a href="/">Go Home</a>`);
});

server.listen(5000); // Generate a server (localhost:5000)
