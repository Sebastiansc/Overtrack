import React from 'react';
import RankingItem from './ranking_item';
import Infinite from 'react-infinite';

export default class Rankings extends React.Component {
  constructor(props){
    super(props);
    this.offset = 0;
    this.limit = 20;
    this.state = {summoners: [], over: false, isInfiniteLoading: false};
    this.bindScroll();
  }

  bindScroll(){
    $(window).scroll(() => {
      console.log("scrolling");
       if($(window).scrollTop() + $(window).height() === $(document).height())
       {
         this.updateBatch(this.props.rank.entries);
       }
   });
  }

  componentDidMount(){
    debugger;
    $(document).scrollTop(0);
  }

  componentWillReceiveProps(newProps){
    this.updateBatch(newProps.rank.entries);
  }

  updateBatch(entries){
    this.setState({summoners: this.currentBatch(entries)});
  }

  // Handles pagination. No need to hit DB for new summoners. All are retrieved
  // in initial call so pagination logic can be handled locally
  currentBatch(entries){
    debugger;
    if(this.limit > entries.length) {
      if(this.tier() === "challenger") {
        this.props.fetchRankings("master");
      } else {
        this.setState({over: true});
        return [];
      }
    } else {
      const offset = this.offset;
      const limit = this.limit;
      this.offset = this.limit;
      this.limit += 20;
      return entries.slice(offset, limit);
    }
  }

  tier(){
    return this.props.rank.tier.toLowerCase();
  }

  render(){
I    return(
      <Infinite elementHeight={55}
        containerHeight={2845}
        infiniteLoadingBeginBottomOffset={200}
        onInfiniteLoad={this.handleInfiniteLoad}
        loadingSpinnerDelegate={this.elementInfiniteLoad()}
        isInfiniteLoading={this.state.isInfiniteLoading}
       >
        {this.state.summoners.map((entry, idx) => (
          <RankingItem key={idx}
            entry={entry}
            idx={idx + 1}
            tier={this.tier()}/>
        ))}
      </Infinite>
    );
  }
}
