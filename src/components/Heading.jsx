import PropTypes from "prop-types";

const Heading = ({ heading, className }) => {
  return (
    <>
      <h1
        className={`heading-2 max-w-[350px] lg:max-w-[500px] text-left ${className}`}
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
