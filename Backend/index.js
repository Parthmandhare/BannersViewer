const express = require("express");
const bodyParser = require('body-parser');
const getBanners = require("./Routes/getBanners");
const addBanners = require("./Routes/addBanners");
const updateBanners = require("./Routes/updateBanners");

const app = express();

app.use(bodyParser.json());

app.use("/", getBanners);
app.use("/addNewBanner", addBanners);
app.use("/updateBanner", updateBanners);


app.listen(5000);