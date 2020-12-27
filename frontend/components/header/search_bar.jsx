import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  update(event) {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.getSearchProducts(this.state.searchQuery)
      .then(() => this.props.history.push(`/search/${this.state.searchQuery}`));
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}
          className="search-bar-form"
>

        <input className="search-bar"
          onChange={this.update}
          placeholder="Search for anything"
          type="text"
          // value="Search for anything"
        />

        <div className="searchIconDiv">
          <button id="search"> 
            <i className="fas fa-search searchBarIcon"></i>
          </button>
        </div>
      </form>
    )
  }
}

export default SearchBar;