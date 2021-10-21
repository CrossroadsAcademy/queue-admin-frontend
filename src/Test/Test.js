import classes from "./Test.module.css"
const StaffCard = (props) => {
  return (
     <div className={classes.card}> 
          <div className={classes.topSection}>
            <img className={classes.img} src={props.img}/>
          </div>
          <div className={classes.bottomSection}>
            <h2>{props.name}</h2>
            <p className={classes.phone}>{props.phone}</p>
          </div>
      </div>
  );
};

export default StaffCard;
