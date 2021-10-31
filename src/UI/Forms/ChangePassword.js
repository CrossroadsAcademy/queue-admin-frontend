import classes from "./Form.module.css"
const ChangePassword = (props) => {
    return (
       <div className={classes.card}> 
                 <h3 className={classes.cardTitle}>Change Password</h3>
                 <div className={classes.form}>
                 <form>

                <div className={classes.formGroup}>
                    <input type="email" className={classes.inputBox} placeholder="Current password" />
                </div>

                <div className={classes.formGroup}>
                    <input type="password" className={classes.inputBox} placeholder="New Password" />
                </div>

                <div className={classes.formGroup}>
                <input type="password" className={classes.inputBox} placeholder="Confirm Password" />
                    </div>
                <div className={classes.formGroup}>
                    <button type="submit" className={classes.btn1}>Update Password</button>
                </div>
            </form>
        </div>
        </div>
    );
  };
  
  export default ChangePassword;
  