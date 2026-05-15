import Note from "../models/Note.js";


export const  getAllNotes = async (req,res) =>{
 try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } 
  catch(error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};


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
        .json(note);

    } catch (error) {
        console.error("Error in deleteNote controller:", error);
        res.status(500)
        .json({
            message: "Internal Server Error"
        });
    }
} 