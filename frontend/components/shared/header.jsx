import React from 'react';
import { Link } from 'react-router';
import SearchbarContainer from './searchbar_container';

class Header extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  headerNav() {
    if (window.location.hash !== "#/") {
      return <SearchbarContainer />;
    }
  }

  render() {
    return(
      <header className="global-header">
        <div>
          <section className="title">
            <Link to='/'>Overtrack</Link>
          </section>
          <section className="nav">
            <ul>
              <Link to={'/rankings'} className="li">Leaderboard</Link>
            </ul>
          </section>
          <section className="tools">
            {
              this.headerNav()
            }
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
