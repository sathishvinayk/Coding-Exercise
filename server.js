const express = require('express');
const history = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const router = jsonServer.router("serverdata.json");
const cors = require('cors');

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use("/api", router);
app.use(history());
// app.use("/", express.static("./dist/sportstore"));

app.listen(3000, () => console.log(`http server running on 80`))