function Input({ id, text, placeholder, type }) {
  return (
    <div>
      <label htmlFor={id}>
        {text}

        <input type={type} id={id} placeholder={placeholder} />
      </label>
    </div>
  );
}
export default Input;
