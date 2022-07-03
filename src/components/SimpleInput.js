import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitionHandler = (e) => {
    e.preventDefault();

    // 2 Different ways of reading input value
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    // Reseting the input
    setEnteredName("");
    // nameInputRef.current.value = ""; // NOT good and eligent
  };

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName} // RESET
          ref={nameInputRef}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
