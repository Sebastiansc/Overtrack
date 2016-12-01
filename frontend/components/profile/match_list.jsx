import React from 'react';
import MatchListItem from './match_list_item';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMatchListItems() {
    if (!this.props.matches) {
      return <div> spinner</div>;
    } else {
      return this.props.matches.map( (match, idx) => {
        return (<MatchListItem key={idx} match={match} summoner={this.props.summoner}/>);
      });
    }
  }

  render () {
    return (
      <div className="matchWrapper">
        {
          this.renderMatchListItems()
        }
      </div>
    );
  }
}

export default MatchList;
