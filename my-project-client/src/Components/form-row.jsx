export const FormRow = ({ type, name, lableText, defaultValue }) => {
  return (
    <div className="flex justify-between max-w-64 mt-4 ml-6">
      <label htmlFor={name} className="text-blue-400">
        {lableText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="rounded-md border border-indigo-400"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};

