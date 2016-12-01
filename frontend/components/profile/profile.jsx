import React from 'react';
import MatchListContainer from './match_list_container';
import LeagueBox from './league_box';
import { values } from 'lodash';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).scrollTop(0);
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

  // map leaguebox according to different types of in-game leagues
  renderAllQueueBoxes() {
    let that = this;
    if (this.props.summoner.name) {
      return Object.keys(this.props.queues).map( queueType => {
        if (values(that.props.queues[queueType]).length !== 0) {
          return (
            <LeagueBox
              key={that.props.queues[queueType].league_name}
              queueType={queueType}
              queues={that.props.queues}
              summoner={that.props.summoner}
              length={100}>
            </LeagueBox>
          );
        }
      });
    }
  }

  calculateKDA() {
    return this.props.matches;
  }

  totalKDA() {
    let kda = {
      totalKill: 0,
      totalDeath: 0,
      totalAssists: 0,
      counter: 0,
      killDeathRatio: 0
    };
    if (this.props.matches) {
      this.props.matches.each ( match => {
        let summoner = match.participants[this.props.summoner.summoner_id];
        kda.totalKill += summoner.stats.kills;
        kda.totalDeath += summoner.stats.deaths;
        kda.totalAssists += summoner.stats.assists;
        kda.counter ++;
      });
    }

    kda.killDeathRatio = (
      Math.round(kda.totalDeath * 10000 / (kda.totalKill + kda.totalAssists)
    ) / 100);

    return kda;
  }
  // <div>
  //   {Math.round(this.totalKDA().totalKill/this.totalKDA().counter * 10)/10}
  //   / {Math.round(this.totalKDA().totalDeath/this.totalKDA().counter * 10)/10}
  //   / {Math.round(this.totalKDA().totalAssists/this.totalKDA().counter * 10)/10}
  // </div>
  // <div>{this.totalKDA().killDeathRatio}</div>


  render () {
    return (
      <div className="content-wrapper">
        <div className="header">
          <div className="profile-info">
            {
              this.loadProfile()
            }
            <div>
              {this.props.summoner.name}
            </div>
          </div>
          <div className="queueBoxes">
            {
              this.renderAllQueueBoxes()
            }
          </div>
        </div>
        <div className="nav-bar">
          <dl className="navList">
            <dd className="listItem">
              <a>Summary</a>
            </dd>
          </dl>
        </div>
        <div className="summoner-content">
          <div className="content">
            <div className="head">
              <div className="recent">Latest Rank Matches</div>
              <div className="summary">
                <div className="total-KDA">
                </div>
                <div className="win-ratio">
                </div>
              </div>
            </div>
            <div className="body">
              <MatchListContainer />
            </div>
            <div className="next-button">
              <button onSubmit={this.handleShowMore}>Show More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
