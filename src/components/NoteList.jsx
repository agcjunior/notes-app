import Note from './Note';

const NoteList = ({notes, deleteNote}) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No notes yet. Add one above! 📝</p>;
  }
  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

  export default NoteList;