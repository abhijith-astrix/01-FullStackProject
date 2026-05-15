import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dns from "dns";
import dotenv from "dotenv";
dotenv.config();




dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.use("/api/notes",notesRoutes);

app.listen(PORT,() =>{

    console.log(`Server is running on PORT: ${PORT}`);
});
