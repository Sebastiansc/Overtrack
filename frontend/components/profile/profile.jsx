import React from 'react';
import MatchList from './match_list';
import { summonerSoloQueue } from '../../reducers/selectors';

class Profile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $(document).scrollTop(0);
  }

  componentDidUpdate() {
  }

  // spinner because the initial re-rendering gives out errors
  loadProfile() {
    if (this.props.summoner.profile_icon) {
      return (
        <div className="profile-icon" style={{backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/6.23.1/img/profileicon/${this.props.summoner.profile_icon}.png')`}}>
        </div>

      );
    } else {
      return (
        <div className="profile-icon">
          <i className="fa fa-cog fa-spin fa-5x fa-fw"></i>
        </div>
      );
    }
  }

  // finds league medals from local assets/tier-icons folder
  // need refactoring
  leagueDivision() {
    if (this.props.summoner.solo_5x5) {
      if (this.props.summoner.solo_5x5.tier !== "CHALLENGER" ||
      this.props.summoner.solo_5x5.tier !== "MASTER" ||
      this.props.summoner.solo_5x5.tier !== "PROVISIONAL") {
        if (!summonerSoloQueue(this.props.summoner)) debugger;
        return (
          <div className="medal"
            style={{backgroundImage: `url('assets/tier-icons/${summonerSoloQueue(this.props.summoner)}.png')`}}></div>
        );
      } else {
        return (
          <div className="medal"
            style={{backgroundImage: `url('assets/${this.props.summoner.solo_5x5.tier.toLowerCase()}.png')`}}></div>
        );
      }


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
                  <div className="medal">
                    {
                      this.leagueDivision()
                    }
                  </div>
                  <div className="tier-info">tier</div>
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
