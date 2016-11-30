import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { summoner: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.summonerName = this.props.summoner.name;
  }

  componentDidUpdate() {
    if (this.summonerName) {
      this.props.router.push(`/profile/${this.summonerName}`);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const summoner = this.state.summoner;
    this.props.fetchSummoner(summoner.trim())  ;
  }


  checkValidation(e) {
    let pattern = /^[0-9\\a-zA-Z _\\.]+$/;
    return pattern.test(e.target.value);
  }

  // checking validation for each input using Riot regex
  update(e) {
    if (this.checkValidation(e) || e.target.value === "") {
      this.setState({["summoner"]: e.target.value});
    }
  }

  render () {
    return(
      <div className="searchbar-content">
        <form className="searchbar" onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="summoner name"
            value={this.state.summoner}
            onChange={e => this.update(e)}></input>
          <button>
            <i className="fa fa-search fa-lg" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

export default Searchbar;
