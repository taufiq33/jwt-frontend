import FormGroup from "./FormGroup";

export default function Input({
  label,
  name,
  type = "text",
  placeholder = false,
  defaultValue = false,
}) {
  return (
    <FormGroup>
      <label className="block font-bold text-xl mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-2 outline-none border-b-1 border-stone-500 focus:border-b-1 focus:border-blue-500"
        type={type}
        name={name}
        defaultValue={defaultValue || null}
        placeholder={placeholder || label}
        required
      />
    </FormGroup>
  );
}
