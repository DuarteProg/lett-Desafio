import express, { json } from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routes/routes.js";

const PORT = process.env.PORT;

const app = express();
app.use(json(), cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running in PORT ${PORT}`);
});
