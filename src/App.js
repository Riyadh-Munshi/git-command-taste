import Input from "./Component/RadioButton/Input";
import Radio from "./Component/RadioButton/Radio";

function App() {
  return (
    <div>
      <h1>GeeksforGeeks Survey Form</h1>

      <form></form>
      <div>
        <Input
          type="text"
          id="name"
          placeholder="Enter your name"
          text="Name"
        />
        <Input
          type="text"
          id="email"
          placeholder="Enter your email"
          text="Email"
        />
        <Input type="text" id="age" placeholder="Enter your age" text="Age" />
        <Input
          type="Password"
          id="Passwoed"
          placeholder="Enter your pssword"
          text="password"
        />
      </div>

      <form>
        <label htmlFor="role"> Which option best describes you?</label>

        <select id="role">
          <option value="teacher">teacher</option>
          <option value="student">student</option>
          <option value="others">others</option>
        </select>
        <div>
          <label> would you recommend geekforgeek to a friend?</label>
          <Radio type="radio" id="yes" text="Yes" />
          <Radio type="radio" id="no" text="No" />
          <Radio type="radio" id="msybe" text="Maybe" />
        </div>
        <div>
          <label>language frame work know</label>
          <Radio type="checkbox" id="Angular" text="Angular" />
          <Radio type="checkbox" id="React" text="React" />
          <Radio type="checkbox" id="java" text="JAva" />
          <Radio type="checkbox" id="PHP" text="PHP" />
        </div>

        <div>
          <label> any comment your suggesation</label>
          <textarea name="comment">enter your comment</textarea>
        </div>
        <div>
          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;
