import React from 'react';
import RankingItem from './ranking_item';
import Infinite from 'react-infinite';

export default class Rankings extends React.Component {
  constructor(props){
    super(props);
    this.offset = 0;
    this.limit = 50;
    this.fetching = false;
    this.state = {summoners: [], over: false, isInfiniteLoading: false,};
  }

  componentDidMount(){
    $(document).scrollTop(0);
  }

  componentWillReceiveProps(newProps){
    this.fetching = false;
    this.updateBatch(newProps.rank.entries);
  }

  updateBatch(entries){
    const newEntries = this.state.summoners.concat(this.currentBatch(entries));
    this.setState({summoners: newEntries});
  }

  elementInfiniteLoad(){
    return (
      <div className="infinite-list-item">
        Loading...
      </div>
    );
  }
  // Handles pagination. No need to hit DB for new summoners. All are retrieved
  // in initial call so pagination logic can be handled locally
  currentBatch(entries){
    if (this.fetching) return [];
    // Challenger ranking only holds up to 203 players
    if(this.limit > 200 && this.props.rank.tier === "CHALLENGER") {
      // Summoner slice of state will be replaced with new master rankings
      // Must restart pagination for new array
      this.offset = 0;
      this.limit = 50;
      this.fetching = true;
      this.props.fetchRankings("master");
      return [];
    } else {
      const offset = this.offset;
      const limit = this.limit;
      this.offset += 50;
      this.limit += 50;
      return entries.slice(offset, limit);
    }
  }

  // Function is called when user has scroll to bottom of window.
  // Infinite component is oddly calling function before this condition is
  // satisfied. Added conditional early return to account for this case
  handleInfiniteLoad(){
    if(!this.state.summoners.length) return;
    this.setState({isInfiniteLoading: true});
    const newSummoners = this.currentBatch(this.props.rank.entries);
    const newEntries = newSummoners.length ?
      this.state.summoners.concat(newSummoners) :
      this.state.summoners;
    this.setState({
        isInfiniteLoading: false,
        summoners: newEntries
    });
  }

  tier(idx){
    return idx > 199 ? "master" : "challenger";
  }

  render(){
    window.that = this;
    return(
      <Infinite elementHeight={55}
        containerHeight={2750}
        infiniteLoadBeginEdgeOffset={20}
        useWindowAsScrollContainer
        onInfiniteLoad={() => this.handleInfiniteLoad()}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}>
        {this.state.summoners.map((entry, idx) => {
          return (
            <RankingItem key={idx}
              entry={entry}
              idx={idx + 1}
              tier={this.tier(idx)}/>
          );
        })}
      </Infinite>
    );
  }
}
