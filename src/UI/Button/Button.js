import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button className={classes.btn}>{props.btnName}</button>
    )
}

export default Button
