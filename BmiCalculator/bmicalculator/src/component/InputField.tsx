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
  placeholder,
  type,
  metric
}: InputFieldProps) {
  return (
    <div>    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {metric && (
      <span>
        <p>{metric}</p>
      </span>
    )}
  );
}

export default InputField;