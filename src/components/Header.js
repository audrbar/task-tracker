import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.defaultProps = {
  title: PropTypes.string,
};

export default Header;
