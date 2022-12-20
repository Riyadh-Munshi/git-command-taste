function Option(props) {
  return (
    <div>
      <option value={props.value}>{props.text}</option>{" "}
    </div>
  );
}
export default Option;
