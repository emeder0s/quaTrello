const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());
 
app.use("/", router);

const port = 5000;

app.listen(port, () => console.log(`SERVER ON: ${port}`));

