interface InputFieldProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  metric?: string;
}


function InputField({
  name,
  value,
  onChange,
  placeholder = "Enter value",
  type = "text",
  metric
}: InputFieldProps) {
  return (
    <div className="border-white border-2 p-2">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {metric && <span>{metric}</span>}
    </div>
  );
}

export default InputField