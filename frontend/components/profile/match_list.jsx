import React from 'react';
import MatchListItem from './match_list_item';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] };
    this.paginationInit();
  }

  paginationInit() {
    this.offset = 0;
    this.limit = 20;
  }

  componentDidMount() {
    this.setState({matches: this.props.matches});
  }
  // Ensures component updates state when revisiting.
  componentWillMount() {
    if (this.props.matches.entries) {
      // const entries = this.throttleEntries(this.props.matches.entries);
      // this.updateMatches(entries);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.matches) {

    }
  }

  updateMatches(entries) {
    this.setState({matches: this.state.matches.concat(entries)});
  }

  //
  // // Handles pagination. No need to hit DB for new summoners. All are retrieved
  // // in initial call so pagination logic can be handled locally
  // throttleEntries(entries){
  //   const offset = this.offset;
  //   const limit = this.limit;
  //   this.offset += 20;
  //   this.limit += 20;
  //   // return entries.slice(offset, limit);
  // }

  renderMatchListItems() {
    if (!this.props.matches) {
      return <div> spinner</div>;
    } else {
      return this.props.matches.map((match, idx) => {
        const currentSummoner = match.participants[this.props.summoner.summoner_id];
        return (
          <MatchListItem
            key={idx}
            match={match}
            summoner={this.props.summoner}/>
        );
      });
    }
  }

  handleMoreButton() {
    console.log("loading");
    const summonerName = this.props.summoner.name;
    this.offset += 20;
    this.limit += 20;
    this.props.fetchMatches(summonerName, this.offset, this.limit);
  }

  render () {
    return (
      <div className="match-wrapper">
        {
          this.renderMatchListItems()
        }
        <div className="next-button">
          <button onClick={() => this.handleMoreButton()}>Show More</button>
        </div>
      </div>
    );
  }
}

export default MatchList;
