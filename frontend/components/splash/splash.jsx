import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.state = { summoner: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  // Only gets called once when the page loads.
  componentDidMount() {
    $(document).scrollTop(0);
  }

  componentDidUpdate() {
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push(`/profile/${this.state.summoner}`);
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
  // https://res.cloudinary.com/dsetpdsls/image/upload/v1480616888/jax-league-of-legends_quecqe.jpg
  render () {
    return(
      <splash className="splash-page">
        <div className="first-div">
          <section className="logo">
            <Link to='/' className="main">Overtrack</Link>
          </section>
          <section className="searchbar-content">
            <form className="searchbar" onSubmit={this.handleSubmit}>
              <input type="text"
                placeholder="summoner name"
                value={this.state.summoner}
                onChange={e => this.update(e)}></input>
              <button>
                <i className="fa fa-search fa-2x" aria-hidden="true" />
              </button>
            </form>
          </section>
        </div>
        <div className="second-div">
          <section className="guide">
            <div className="title">
              <h2>Leaderboards and Profiles</h2>
              <h3>Instant look up for you and your fellow summoners profile and constant update on Leaderboards</h3>
            </div>
            <div className="item">
              <img
                src='https://res.cloudinary.com/dsetpdsls/image/upload/v1480611243/Screen_Shot_2016-12-01_at_7.21.54_AM_ov98k4.png'/>
              <div className="desc">
                <div>What is &nbsp;
                  <fin>Overtrack.win</fin>
                </div>
                <ul>
                  <li>Offer accurate ingame information</li>
                  <li>Utilize latest database technology to provide users with:</li>
                  <li>Match Histories</li>
                  <li>Match Results</li>
                  <li>Leaderboards</li>
                  <li>to be announced...</li>
                </ul>
              </div>
            </div>
            <div className="item2">
              <div className="desc">
                <div>
                  <fin>Leaderboard</fin>
                  &nbsp; for &nbsp;
                  <fin>all the leagues</fin>
                </div>
                <ul>
                  <li>All Challenger and Master tiers from top to bottom</li>
                  <li>Allow users to check their most recent rankings </li>
                  <li>Database optimized for smooth user experience</li>
                </ul>
              </div>
              <img src="https://res.cloudinary.com/dsetpdsls/image/upload/v1480447110/leaderboard_k4nphk.png"/>
            </div>
          </section>
        </div>
      </splash>
    );
  }
}

export default Splash;
