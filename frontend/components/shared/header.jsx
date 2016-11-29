import React from 'react';
import { Link } from 'react-router';
import Searchbar from './searchbar';

class Header extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
  }

  headerNav() {
    if (window.location.hash !== "#/") {
      return <Searchbar />;
    }
  }

  render() {
    return(
      <header className="global-header">
        <div>
          <section className="logo">
            <h1><Link to={'/'}>Overtrack</Link></h1>
          </section>
          <section className="nav">
            <ul>
              <Link to={'/ranking'} className="li">Leaderboard</Link>
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
