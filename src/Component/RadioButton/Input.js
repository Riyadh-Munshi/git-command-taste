function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>
        {props.text}

        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  );
}
export default Input;
//  mern stacker , react js
