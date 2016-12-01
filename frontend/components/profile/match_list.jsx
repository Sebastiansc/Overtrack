import React from 'react';
import MatchListItem from './match_list_item';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMatchListItems() {
    debugger
    // this.props.matches.map( (match, idx) => {
    //   return (<MatchListItem match={match} value={idx}/>);
    // });
  }

  render () {
    return (
      <div className="matchWrapper">
        <MatchListItem/>
      </div>
    );
  }
}
// {
//   this.renderMatchListItems()
// }

export default MatchList;
