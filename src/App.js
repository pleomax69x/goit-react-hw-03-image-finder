import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Button from "./components/Button";
import LoaderDB from "./components/Loader";
import fetchImgApi from "./services/fetchImgApi";

class App extends Component {
  state = {
    showModal: false,
    searchWord: "",
    pics: [],
    page: 1,
    largeUrl: "",
    spiner: false,
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.page === 1) return null;
    if (prevState.page < this.state.page) {
      return window.pageYOffset;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchWord !== this.state.searchWord) {
      this.fetchImage();
    }

    if (snapshot !== null) {
      window.scrollTo({
        top: snapshot + window.innerHeight - 130,
        behavior: "smooth",
      });
    }
  }

  togleModal = (url) => {
    this.setState({
      showModal: !this.state.showModal,
      largeUrl: url,
    });
  };

  formSubmitHandler = (data) => {
    this.setState({
      searchWord: data,
      page: 1,
      pics: [],
    });
  };

  fetchImage = () => {
    const { page, searchWord } = this.state;
    const options = { searchWord, page };

    this.setState({ spiner: true });

    fetchImgApi(options)
      .then((res) => {
        this.setState((prevState) => ({
          pics: [...prevState.pics, ...res.data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ spiner: false }));
  };

  render() {
    const { showModal, largeUrl, pics, spiner } = this.state;
    const showButton = pics.length % 12 === 0 && pics.length > 0;

    return (
      <>
        {showModal && <Modal onClose={this.togleModal} img={largeUrl} />}

        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery items={pics} togleModal={this.togleModal} />

        <div className="center">
          {spiner ? (
            <LoaderDB spiner={spiner} />
          ) : (
            showButton && <Button buttonUpdate={this.fetchImage} />
          )}
        </div>
      </>
    );
  }
}

export default App;
