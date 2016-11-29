import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  render () {
    return(
      <splash className="splash-page">
        <div>
          <section className="logo">
            <h1>
              <Link to={'/'}>Overtrack</Link>
            </h1>
          </section>
          <section className="searchBar">
            <h3>SearchBar</h3>
          </section>
          <section className="guide">
            <div className="item">DESC && PIC 1</div>
            <div className="item">DESC && PIC 2</div>
          </section>
        </div>
      </splash>
    );
  }
}

export default Splash;
