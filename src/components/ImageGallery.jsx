import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ items, togleModal }) => {
  return (
    <ul className="ImageGallery">
      {items.map((item) => (
        <ImageGalleryItem key={item.id} {...item} togleModal={togleModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  togleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
