import PropTypes from "prop-types";

const Tab = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        cursor: "pointer",
        backgroundColor: isActive ? "#007bff" : "#f0f0f0",
        color: isActive ? "#fff" : "#000",
        border: "1px solid #ddd",
        margin: "0 5px",
      }}
    >
      {label}
    </button>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Tab;
