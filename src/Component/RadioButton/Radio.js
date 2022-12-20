function Radio(props) {
  return (
    <div>
      <input type={props.type} id={props.id} />
      <label htmlFor={props.id}>{props.text}</label>
    </div>
  );
}
export default Radio;
