import PrincipalCard from "../components/PrincipalCard";

const Principal = (props) => {
  const submitHandler = (number) => {
    props.onSubmit(number);
  };

  return <PrincipalCard onSubmit={submitHandler} />;
};

export default Principal;
