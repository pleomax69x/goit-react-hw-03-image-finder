import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

const LoaderDB = ({ spiner }) => {
  return (
    <Loader
      type="Rings"
      color="#00BFFF"
      height={100}
      width={100}
      visible={spiner}
      //   timeout={3000} //3 secs
    />
  );
};

LoaderDB.propTypes = {
  spiner: PropTypes.bool.isRequired,
};

export default LoaderDB;
