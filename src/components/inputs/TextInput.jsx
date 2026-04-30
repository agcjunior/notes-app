const TextInput = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block  font-semibold">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded-md"
      />
    </div>
  );
};

export default TextInput;
