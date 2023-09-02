import PropTypes from "prop-types";

const Button = ({ text, className, buttonType, href, target }) => {
  return (
    <>
      <button className={`flex ${className}`} type="button">
        <a href={href} target={target} rel="noreferrer" className={buttonType}>
          <p>{text}</p>
        </a>
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  buttonType: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default Button;
