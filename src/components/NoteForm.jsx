import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "medium",
    category: "personal",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    setFormData({
      title: "",
      priority: "medium",
      category: "personal",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle button*/}
      <button
        onClickCapture={() => setIsFormVisible(!isFormVisible)}
        className="w-full py-2 mb-4 bg-gray-100 border-gray-300 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-200"
      >
        {isFormVisible ? "Hide Form" : "Add New Note"}
      </button>

      {isFormVisible && (<form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block font-semibold">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          >
            <option value="personal">personal</option>
            <option value="work">work</option>
            <option value="ideas">ideas</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded-md"
          />
        </div>
        <button className="w-full bg-gray-700 text-white p-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors">
          Add Note
        </button>
      </form>)}
      
    </>
  );
};
export default NoteForm;
