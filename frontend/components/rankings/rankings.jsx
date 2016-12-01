import React from 'react';
import { Link } from 'react-router';
import RankingItem from './ranking_item';
import Infinite from 'react-infinite';

export default class Rankings extends React.Component {
  constructor(props){
    super(props);
    this.fetching = false;
    this.state = {summoners: [], over: false, isInfiniteLoading: false,};
    this.paginationInit();

  }

  paginationInit(){
    this.offset = 0;
    this.limit = 50;
  }

  componentDidMount(){
    $(document).scrollTop(0);
  }

  updateSummoners(entries){
    this.setState({summoners: this.state.summoners.concat(entries)});
  }

  // Ensures component updates state when revisiting.
  componentWillMount(){
    if(this.props.rank.entries){
      const entries = this.throttleEntries(this.props.rank.entries);
      this.updateSummoners(entries);
    }
  }

  // Ensures component updates state on page refresh or first enter(offset = 50)
  componentWillReceiveProps(newProps){
    this.fetching = false; //Notify #currentBatch that slice has been updated.
    if (!newProps.rank.entries) return; // Function also gets called on
    //internal state change. newProps might be empty.

    // First condition will be satisfied when changing routes
    if (newProps.rank.queue !== this.props.rank.queue){
      this.paginationInit();
      this.setState({summoners: this.throttleEntries(newProps.rank.entries)});
    } else if(this.offset === 50) {
        return;
    } else {
        const entries = this.throttleEntries(newProps.rank.entries);
        this.updateSummoners(entries);
    }
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
  throttleEntries(entries){
    const offset = this.offset;
    const limit = this.limit;
    this.offset += 50;
    this.limit += 50;
    return entries.slice(offset, limit);
  }

  // this.fetching is utilized to signal if the ajax call is currently underway
  currentBatch(entries){
    if (this.fetching) return [];
    const numOfEntries = this.props.rank.entries.length;
    // Challenger ranking only holds up to 203 players
    if(this.offset >= numOfEntries) {
      if(numOfEntries > 200) {
        this.setState({over: true});
        return [];
      }
      this.fetching = true;
      this.props.fetchRankings("master");
      return [];
    } else {
      return this.throttleEntries(entries);
    }
  }

  // Function is called when user has scroll to bottom of window.
  // Infinite component is oddly calling function before this condition is
  // satisfied. Added conditional early return to account for this case
  handleInfiniteLoad(){
    debugger;
    if(!this.state.summoners.length) return;
    this.setState({isInfiniteLoading: true});
    const newSummoners = this.currentBatch(this.props.rank.entries);
    const newEntries = newSummoners.length ?
      this.state.summoners.concat(newSummoners) :
      this.state.summoners;
    this.setState({
        isInfiniteLoading: false,
        summoners: this.state.summoners.concat(newEntries)
    });
  }

  tier(idx){
    return idx > 199 ? "master" : "challenger";
  }

  render(){
    window.that = this;
    return(
      <main className='rankings'>
        <div className='queues'>
          <Link to='rankings'>RANKED_SOLO_5x5</Link>
          <Link to='rankings/flex_sr'>RANKED_FLEX_SR</Link>
          <Link to='rankings/flex_tt'>RANKED_FLEX_TT</Link>
          <Link to='rankings/team_5x5'>RANKED_TEAM_5x5</Link>
          <Link to='rankings/team_3x3'>RANKED_TEAM_3x3</Link>
        </div>
        <Infinite elementHeight={21}
          containerHeight={2750}
          infiniteLoadBeginEdgeOffset={100}
          useWindowAsScrollContainer
          onInfiniteLoad={() => this.handleInfiniteLoad()}
          loadingSpinnerDelegate={this.elementInfiniteLoad()}
          isInfiniteLoading={this.state.isInfiniteLoading}
          preloadAdditionalHeight={Infinite.containerHeightScaleFactor(2)}>
          {this.state.summoners.map((entry, idx) => {
            return (
              <RankingItem key={idx}
                entry={entry}
                idx={idx + 1}
                tier={this.tier(idx)}/>
            );
          })}
        </Infinite>
      </main>
    );
  }
}
