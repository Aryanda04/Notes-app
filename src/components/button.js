// import style from "../styles/button.module.css";

const Button = ({ label, eventHandler }) => {
  return (
    <button
      className="`  "
      type="button"
      onClick={eventHandler}
      data-action={label}
    >
      {label}
    </button>
  );
};

export default Button;
