import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {

  githubLink() {
    window.open("https://github.com/Sebastiansc/Overtrack");
  }

  linkedinLinkSeb() {
    window.open("");
  }

  linkedinLinkSonik() {
    window.open("www.linkedin.com/in/sonik-jhang");
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
            <small> Created and designed by </small>
            <small>
              <a href="https://www.linkedin.com/in/sebastian-cruz-739a47101">Sebastian Cruz</a>
            </small>
            <small>and</small>
            <small>
              <a href="https://www.linkedin.com/in/sonik-jhang">Sonik Jhang</a>
            </small>
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
