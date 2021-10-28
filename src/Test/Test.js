import classes from "./Test.module.css";
import HaltQueueButton from "./UI/HaltQueueButton/HaltQueueButton";
import ResumeQueueButton from "./UI/ResumeQueueButton/ResumeQueueButton";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        {/* Write your code here */}
        <ResumeQueueButton/>
        
      </div>
    </div>
  );
};

export default Test;
