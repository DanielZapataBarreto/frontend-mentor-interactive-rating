import classes from "./Rating.module.css";

const Rating = (props) => {
  return (
    <div
      className={`${classes.rating} ${
        props.isActive ? classes.ratingActive : ""
      }`}
      onClick={props.onClick}
    >
      {props.number}
    </div>
  );
};

export default Rating;
