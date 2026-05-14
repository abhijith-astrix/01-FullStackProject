import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

import dns from "dns";

dns.setServers(['1.1.1.1','8.8.8.8']);

const app = express();
connectDB();

app.use("/api/notes",notesRoutes);

app.listen(5000,() =>{

    console.log("Server is running on PORT :5000")
});