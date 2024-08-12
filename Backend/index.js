const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const getBanners = require("./Routes/getBanners");
const addBanners = require("./Routes/addBanners");
const updateBanners = require("./Routes/updateBanners");

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/", getBanners);
app.use("/addNewBanner", addBanners);
app.use("/updateBanner", updateBanners);



app.listen(5000);