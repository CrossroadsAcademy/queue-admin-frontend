import classes from "./Test.module.css";
import CssSpinner from './CssSpinner/CssSpinner'
import QueueStatusTab from "./QueueStatusTab/QueueStatusTab";
const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
        <CssSpinner />
        <QueueStatusTab/>
      </div>
    </div>
  );
};

export default Test;
