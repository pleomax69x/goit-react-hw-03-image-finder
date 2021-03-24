import PropTypes from "prop-types";

const Button = ({ buttonUpdate }) => {
  return (
    <button type="submit" className="Button" onClick={buttonUpdate}>
      Load More
    </button>
  );
};

Button.propTypes = {
  buttonUpdate: PropTypes.func.isRequired,
};

export default Button;
