const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const { ENV } = require("./config/env");
const authRoutes = require("./routes/auth.route");

const app = express();
app.use(express.json());
app.use(compression());
app.use(cors());

app.use("/api/v1/auth", authRoutes);

app.listen(ENV.PORT, () => {
  console.log(`Server is running in port ${ENV.PORT}`);
});
