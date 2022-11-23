const Input = ({ type, name, value, onChange, holder = '' }) => {
  return (
    <input
      type={type}
      id={`user-${name}`}
      name={`customer_${name}`}
      value={value}
      onChange={onChange}
      placeholder={holder}
      required
    />
  );
};

export default Input;
