  const express = require("express");
  const cors = require("cors");
  const cookieParser = require('cookie-parser');
  const path = require("path");
  const compression = require("compression");
  const { ENV } = require("./config/env");
  const authRoutes = require("./routes/routes");

  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(compression());
  app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));

  app.use("/api/v1/", authRoutes);

  app.listen(ENV.PORT, () => {
    console.log(`Server is running in port ${ENV.PORT}`);
  });
