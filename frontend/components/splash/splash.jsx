import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  render () {
    return(
      <splash className="splash-page">
        <div>
          <section className="logo">
            <h1>
              <Link to={'/'} className="main">Overtrack</Link>
            </h1>
          </section>
          <section className="searchbar-content">
            <form className="searchbar" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="summoner name"></input>
              <button>
                <i className="fa fa-search fa-2x" aria-hidden="true" />
              </button>
            </form>
          </section>
          <section className="guide">
            <div className="title">
              <h2>Leaderboards and Profiles</h2>
              <h3>Instant look up for you and your fellow summoners profile and constant update on Leaderboards</h3>
            </div>
            <div className="item">
              <div className="img"></div>
              <div className="desc">
                <div>What is &nbsp;
                  <fin>Overtrack.win</fin>
                </div>
                <ul>
                  <li>Offer accurate ingame information</li>
                  <li className="li">Utilize latest database technology to provide users with:</li>
                  <li>Match Histories</li>
                  <li>Match Results</li>
                  <li>Leaderboards</li>
                  <li>to be announced...</li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="img">PIC 2</div>
              <div className="desc">
                <div></div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </splash>
    );
  }
}

export default Splash;
