import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/TextareaInput";

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
        <TextInput
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <SelectInput  
          label="Priority"
          name="priority"
          value={formData.priority}   
          onChange={handleChange}
          options={[
            { value: "low", label: "Low" },
            { value: "medium", label: "Medium" }, 
            { value: "high", label: "High" },
          ]}
        />
        <SelectInput 
          label="Category"
          name="category"
          value={formData.category} 
          onChange={handleChange}
          options={[
            { value: "personal", label: "Personal" },   
            { value: "work", label: "Work" },
            { value: "ideas", label: "Ideas" },
          ]}
        />        
        <TextareaInput
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        
        <button className="w-full bg-gray-700 text-white p-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors">
          Add Note
        </button>
      </form>)}
      
    </>
  );
};
export default NoteForm;
