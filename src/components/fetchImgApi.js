import axios from "axios";
import PropTypes from "prop-types";

const apiKey = "18836108-b754cab046c957f0572c5e4ce";
const BASE_URL = "https://pixabay.com/api";
axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  key: apiKey,
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

// const fetchImgApi = ({ searchWord = "", page = 1 }) => {
//   return axios.get(
//     `https://pixabay.com/api/?q=${searchWord}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
//   );
// };

const fetchImgApi = ({ searchWord = "", page = 1 }) => {
  return axios.get("", {
    params: { q: searchWord, page },
  });
};

fetchImgApi.propTypes = {
  searchWord: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchImgApi;
