import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {

  render () {
    return(
      <header className="global-header">
        <section className="logo">
          <h1><Link to={'/'}>Overtrack</Link></h1>
        </section>
        <section className="nav">
          <ul>
            <li><Link to={'/'}>Leaderboard</Link></li>
          </ul>
        </section>
        <section className="tool">
          <h3>SearchBar</h3>
        </section>
      </header>
    );
  }
}

export default Header;
