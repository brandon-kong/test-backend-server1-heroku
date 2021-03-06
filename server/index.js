const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.get("/hi", (req, res) => {
    res.json({ message: "bye" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });