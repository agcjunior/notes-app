const NoteList = ({notes}) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No notes yet. Add one above! 📝</p>;
  }
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-600">{note.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              note.priority === "high" ? "bg-red-500 text-white" :
              note.priority === "medium" ? "bg-yellow-500 text-gray-800" :
              "bg-green-500 text-white"
            }`}>
              {note.priority}
            </span>
            <span className="text-sm text-gray-500">{note.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

  export default NoteList;