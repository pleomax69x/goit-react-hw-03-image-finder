import { Component } from "react";

class Searchbar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;

    this.setState({ search: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.search);
    this.reset();
  };

  reset = () => {
    this.setState({
      search: "",
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
