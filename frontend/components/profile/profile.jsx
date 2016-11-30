import React from 'react';
import MatchList from './match_list';
import { summonerSoloQueue, summonerQueues } from '../../reducers/selectors';
import LeagueBox from './league_box';
import { values } from 'lodash';

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

  // map leaguebox according to different types of in-game leagues
  renderAllQueueBoxes() {
    let that = this;
    if (this.props.summoner.name) {
      return Object.keys(this.props.queues).map( queueType => {
        if (values(that.props.queues[queueType]).length !== 0) {
          debugger
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
            {
              this.renderAllQueueBoxes()
            }
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
