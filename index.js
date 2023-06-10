"use strict";
const express = require("express");
const app = express();
const port = 80;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./templates");

app.get("/", (req, res) => {
  res.render("index");
});

const commissionRoutes = require("./routes/by_commission");
const omissionRoutes = require("./routes/by_omission");
const sourceSelectionRoutes = require("./routes/by_source_selection");

app.use("/by_commission", commissionRoutes);
app.use("/by_omission", omissionRoutes);
app.use("/by_source_selection", sourceSelectionRoutes);

app.listen(process.env.PORT || 80, () => {
  console.log(`Media bias analysis - Visualization`);
});
