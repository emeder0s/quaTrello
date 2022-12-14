const express = require("express");
const router = require("./routes/routes");

require("./dataBases/mysql");

const app = express();

app.use(express.json());

 
app.use("/", router);

const port = 5000;

app.listen(port, () => console.log(`SERVER ON: ${port}`));

