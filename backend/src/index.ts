import express from "express";
import { userRouter } from "./router/user";
import { PORT } from "./config";
const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
