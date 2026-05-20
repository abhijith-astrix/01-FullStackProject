import  { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'

const HomePage = () => {
  const[isRateLimited, setIsRateLimited]= useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{

    const fetchNotes = async () =>{
      try{
        const response = await axios.get("http://localhost:5000/api/notes")
        setNotes(response.data)
        setIsRateLimited(false)
      }
      catch(error){
        console.error("Error fetching notes:", error);
        if(error.response.status === 429){
          setIsRateLimited(true);
      }
      else{
        toast.error("Failed to Fetch Notes")
      }
    }
    finally{
      setLoading(false);
    }
  }
    fetchNotes();
  }, []);


return (
  <div className="min-h-screen bg-base-200">
    <Navbar />

    {isRateLimited && <RateLimitedUI />}

    <main className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-base-content">
          Your Notes
        </h2>
        <p className="text-sm text-base-content/60">
          Capture ideas, reminders, and thoughts in one clean space.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note._id}
            className="group rounded-xl border border-base-content/10 bg-base-100 p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="line-clamp-2 text-xl font-semibold text-base-content group-hover:text-primary">
                {note.title}
              </h3>

              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Note
              </span>
            </div>

            <p className="mb-5 line-clamp-4 text-sm leading-6 text-base-content/70">
              {note.content}
            </p>

            <div className="flex items-center justify-between border-t border-base-content/10 pt-4">
              <span className="text-xs text-base-content/50">
                {new Date(note.createdAt).toLocaleDateString()}
              </span>

              <div className="flex gap-2">
                <button className="btn btn-ghost btn-sm text-primary">
                  View
                </button>
                <button className="btn btn-ghost btn-sm text-error">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notes.length === 0 && !isRateLimited && (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="max-w-md text-center">
            <h3 className="mb-2 text-2xl font-bold text-base-content">
              No notes yet
            </h3>
            <p className="mb-6 text-base-content/60">
              Start by creating your first note and keep your ideas organized.
            </p>
            <a href="/create" className="btn btn-primary rounded-full">
              Create Note
            </a>
          </div>
        </div>
      )}
    </main>
  </div>
);
}

export default HomePage
