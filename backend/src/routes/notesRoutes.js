import express from "express";
import { getAllNotes,createNote,updateNote,deleteNote,getAllNoteById } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getAllNoteById);
router.post("/", createNote);

router.put("/:id",updateNote );

router.delete("/:id", deleteNote);
export default router;