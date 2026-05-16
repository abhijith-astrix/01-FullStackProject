import Note from "../models/Note.js";


export const  getAllNotes = async (_,res) =>{
 try {
    const notes = await Note.find().sort({createdAt : -1});// new one first
    res.status(200).json(notes);
  } 
  catch(error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

export const getAllNoteById = async (req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }

    catch(error){

        console.error("Error in getAllNoteById controller:", error);
       res.status(500).json({
           message: "Internal Server Error"
       });
    }
}

export const createNote = async (req,res) =>{
   try{
       const note = new Note(req.body);
        const savedNote =await note.save();
       res.status(201).json(savedNote);
   }
   catch(error) {
       console.error("Error in createNote controller:", error);
       res.status(500).json({
           message: "Internal Server Error"
       });
   }
};

export const updateNote = async (req,res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id ,req.body, { new: true });
        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200)
        .json(note);

    } catch (error) {
        console.error("Error in updateNote controller:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const deleteNote =  async (req,res) =>{
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200)
        .json({message: "Note deleted successfully"});

    } catch (error) {
        console.error("Error in deleteNote controller:", error);
        res.status(500)
        .json({
            message: "Internal Server Error"
        });
    }
} 