import PropTypes from "prop-types";

const ImageGalleryItem = ({
  webformatURL,
  tags,
  togleModal,
  largeImageURL,
}) => {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => togleModal(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  togleModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
