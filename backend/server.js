const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const { ENV } = require("./config/env");
const authRoutes = require("./routes/routes");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(compression());
app.use(cors({
    origin: 'http://localhost:5173', // Frontend domain
    credentials: true,  // Enable cookies to be sent
  }));
app.use(cookieParser());

app.use("/api/v1/", authRoutes);

app.listen(ENV.PORT, () => {
  console.log(`Server is running in port ${ENV.PORT}`);
});
