import Card from "./Card";
import classes from "./ThankYouCard.module.css";

const ThankYouCard = (props) => {
  return (
    <Card className={classes.card}>
      <div>
        <img src="./images/illustration-thank-you.svg" alt="Thank You" />
      </div>
      <div className={classes.cardSelection}>
        You selected {props.number} out of 5
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating if you ever need more
        support, don't hesitate to get in touch!
      </p>
    </Card>
  );
};

export default ThankYouCard;
