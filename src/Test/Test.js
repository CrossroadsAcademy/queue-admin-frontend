import DaySelectionTable from "../UI/DaySelectionTable/DaySelectionTable";
import classes from "./Test.module.css";
import HaltQueueButton from "./UI/HaltQueueButton/HaltQueueButton";
import LiveButton from "./UI/LiveButton/LiveButton";
import ResumeQueueButton from "./UI/ResumeQueueButton/ResumeQueueButton";


const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        <HaltQueueButton />
      </div>
    </div>
  );
};

export default Test;
