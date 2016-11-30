import React from 'react';
import MatchList from './match_list';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).scrollTop(0);
  }

  componentDidUpdate() {
  }

  loadProfile() {
    if (this.props.summoner.profile_icon) {
      return (
        <div className="profile-icon" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/profileicon/${this.props.summoner.profile_icon}.png')`}}></div>
      );
    } else {
      return (
        <div className="profile-icon">
          <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
        </div>
      );
    }
  }
  render () {
    return (
      <div className="content-wrapper">
        <div></div>
        <div className="header">
          <div className="profile-info">
            {this.props.summoner.name}
          </div>
          {
            this.loadProfile()
          }
        </div>
        <div className="nav-bar">
          <dl className="navList">
            <dd className="listItem">
              <a>Summary</a>
            </dd>
            <dd className="listItem">
              <a>Leagues</a>
            </dd>
            <dd className="listItem">
              <a>Matches</a>
            </dd>
          </dl>
        </div>
        <div className="summoner-content">
          <div className="content">
            <div className="sidebar">
              <div className="league-info">
                <div className="solo-tier">
                  <div className="medal" style={{backgroundImage: `url('')`}}></div>
                  <div className="tier-info"></div>
                </div>
                <div className="optional-tier"></div>
              </div>
            </div>
            <div className="main">
            <div className="gamelist">
              <div className="header"></div>
              <div className="content">
                <div className="stats"></div>
                <MatchList matches={this.props.matches}/>
                <div className="nextButton">
                  <button></button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
