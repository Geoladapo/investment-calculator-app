const Input = ({ labelName, type, value, onChange }) => {
  return (
    <p>
      <label htmlFor="">{labelName}</label>
      <input type={type} value={value} onChange={onChange} />
    </p>
  );
};

export default Input;
