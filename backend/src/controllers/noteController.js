export const getAllNotes = (req,res) =>{

    res.status(200).json({

        message:"You just fetched notes"
    })};

export const createNote = (req,res) =>{

    res.status(201).json({
        message:"Note created Successfully"
    });
}; 
export const updateNote =(req,res) =>{

    res.status(200).json({
        message:"Note updated Successfully"
    });
};
export const deleteNote = (req,res) =>{

    res.status(200).json({

        message:"Note deleted Successfully"
    });
} 