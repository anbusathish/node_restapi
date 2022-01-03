import express from "express";
import bodyparser from "body-parser";


import usersRoutes from "./routes/users.js";
import loginRoutes from "./routes/login.js";

const app = express();
const PORT = 5000;

app.use(bodyparser.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

app.get("/", (req, res) => {
  res.send(`Server running on PORT: http://localhost:${PORT}`);
});

app.listen(PORT, () =>
  console.log(`Server running on PORT: http://localhost:${PORT}`)
);
