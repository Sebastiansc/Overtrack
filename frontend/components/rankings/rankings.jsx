import React from 'react';
import RankingItem from './ranking_item';

export default class Rankings extends React.Component {
  constructor(props){
    super(props);
    this.state = {offset: 0, limit: 50, over: false, tier: "challenger"};
  }

  // componentDidUpdate(){
  //   this.length = this.length || this.props.entries.length;
  // }

  // currentBatch(){
  //   debugger;
  //   if(this.state.limit > this.props.entries.length) {
  //     if(this.state.tier === "challenger") {
  //       this.props.fetchRankings("master");
  //     } else {
  //       this.setState({over: true, tier: "master"});
  //       return [];
  //     }
  //   } else {
  //     return this.props.entries.slice(this.state.offset, this.state.limit);
  //   }
  // }

  tier(){
    return this.props.rank.tier.toLowerCase();
  }

  entries(){
    return this.props.rank.entries || [];
  }

  render(){
    // debugger;
    return(
      <main>
        {this.entries().map((entry, idx) => (
          <RankingItem key={idx}
            entry={entry}
            idx={idx + 1}
            tier={this.tier()}/>
        ))}
      </main>
    );
  }
}
