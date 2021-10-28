import classes from "./Test.module.css";
import Input from "../UI/Input/Input";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <Input />
      </div>
    </div>
  );
};

export default Test;