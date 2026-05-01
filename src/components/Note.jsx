const Note = ({ note, deleteNote }) => {
  return (
    <div className="bg-white border-l-4 rounded-md shadow-md mb-4">
          <h3 className="text-lg font-bold pl-5">{note.title}</h3>
          <p className="text-gray-600 pl-5">{note.description}</p>
          <div className="flex justify-between items-center mt-2 pl-5">
            <span className={`px-5 py-1 rounded-full text-xs font-semibold ${
              note.priority === "high" ? "bg-red-500 text-white" :
              note.priority === "medium" ? "bg-yellow-500 text-gray-800" :
              "bg-green-500 text-white"
            }`}>
              {note.priority}
            </span>
            <span className="text-sm text-gray-500 pr-5">{note.category}</span>
          </div>
          <button 
            onClick={() => deleteNote(note.id)}
            className="mt-2 pl-5 text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
  );
};

export default Note;
      