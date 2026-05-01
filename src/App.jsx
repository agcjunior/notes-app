import { useState, useEffect, use } from "react";
import NoteForm from "./components/NoteForm"
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const notesFromStorage = localStorage.getItem("notes");
    return notesFromStorage ? JSON.parse(notesFromStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);  

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-15 p-6 bg-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📝Notes App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  )
}

export default App
