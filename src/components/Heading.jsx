import PropTypes from "prop-types";

const Heading = ({ heading, className }) => {
  return (
    <>
      <h1
        className={`heading-1 mx-auto text-center balance-text max-w-[900px] ${className}`}
      >
        {heading}
      </h1>
    </>
  );
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Heading;
