import classes from "./Test.module.css";
import HaltQueueButton from "./UI/HaltQueueButton/HaltQueueButton";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <HaltQueueButton />
        
      </div>
    </div>
  );
};

export default Test;
