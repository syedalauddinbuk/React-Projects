interface InputFieldProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

function InputField({
  name,
  value,
  onChange,
  placeholder = "Enter value",
  type = "text"
}: InputFieldProps) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputField;