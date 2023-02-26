import { useState } from "react";
import Card from "./Card";
import classes from "./PrincipalCard.module.css";
import Rating from "./Rating";

const numbersArray = [
  { id: 1, number: 1, isActive: false },
  { id: 2, number: 2, isActive: false },
  { id: 3, number: 3, isActive: false },
  { id: 4, number: 4, isActive: false },
  { id: 5, number: 5, isActive: false },
];

const PrincipalCard = (props) => {
  const [numbers, setNumbers] = useState(numbersArray);

  const ratingActiveHandler = (id) => {
    setNumbers((prevArray) =>
      prevArray.map((number) =>
        number.id !== id
          ? { ...number, isActive: false }
          : { ...number, isActive: true }
      )
    );
  };

  const submitHandler = () => {
    const number = numbers.filter((number) => number.isActive);
    if (number.length === 0) return;
    props.onSubmit(number[0].number);
  };

  return (
    <Card>
      <div className={classes.cardImg}>
        <img src="./images/icon-star.svg" alt="Icon Star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>
            <Rating
              number={number.number}
              isActive={number.isActive}
              onClick={ratingActiveHandler.bind(null, number.id)}
            />
          </li>
        ))}
      </ul>
      <button onClick={submitHandler}>SUBMIT</button>
    </Card>
  );
};

export default PrincipalCard;
