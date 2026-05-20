import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dns from "dns";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();




dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173", 
}))
app.use(express.json()); //middleware to parse JSON request bodies
app.use(rateLimiter); // Apply the rate limiting middleware to all routes

app.use("/api/notes",notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    });
});// server starting without connecting to database is not good idea, so we connect to database first and then start the server
