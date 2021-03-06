const express = require("express");
const connectDB = require("./config/db");
const app = express();
app.get("/", (req, res) =>
  res.json({ message: "waelcome to contacht keeper API" })
);

//connect databases
connectDB();


//init middleware
app.use(express.json({extented: false})) // by doing this we can excess body data now 


// define Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
