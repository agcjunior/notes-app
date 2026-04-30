const TextareaInput = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}</label>
      <textarea 
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded-md"  
      />
    </div>
  );
}

export default TextareaInput;