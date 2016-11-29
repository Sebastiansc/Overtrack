import React from 'react';

class Searchbar extends React.Component {
  render () {
    return(
      <div className="searchbar-content">
        <form className="searchbar" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="summoner name"></input>
          <button>
            <i className="fa fa-search fa-lg" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
