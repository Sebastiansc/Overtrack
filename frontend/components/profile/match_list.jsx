import React from 'react';
import MatchListItem from './match_list_item';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMatchListItems() {
    debugger
    if (this.props.matches.match_id) {
      // this.props.matches.map( (match, idx) => {
      //   return (<MatchListItem match={match} value={idx}/>);
      // });
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
