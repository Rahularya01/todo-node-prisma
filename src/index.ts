import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// Routes
import todoRoutes from "./routes/todo-routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Running Perfectly");
});

app.use("/todo", todoRoutes);

app.listen(4000, () => {
  console.log("Server is running on PORT 4000");
});
