import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {

  githubLink() {
    window.open("https://github.com/Sebastiansc/Overtrack");
  }

  render () {
    return(
      <footer className="global-footer">
        <div>
          <section className="top">
            <ul>
              <li>Help</li>
              <li>Feedback</li>
              <li>English</li>
              <li>
                <i className="fa fa-github fa-2x" aria-hidden="true"
                onClick={this.githubLink.bind(this)}/>
              </li>
            </ul>
          </section>
          <section className="mid">
            <div>
              <small>Created and designed by Sebastian Cruz and Sonik Jhang</small>
            </div>
          </section>
          <section className="bottom">
            <small><i className="fa fa-copyright fa-lg" aria-hidden="true"></i> 2016 Overtrack.win Data based on League of legends North America.</small>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;
