import classes from "./Test.module.css";

const Test = () => {
  return (
    <div className={classes.container}>
      <div className={classes["test-space"]}>
        <h1>Test space</h1>
      </div>
    </div>
  );
};

export default Test;
