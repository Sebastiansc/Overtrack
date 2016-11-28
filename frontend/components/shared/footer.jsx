import React from 'react';
import { Link, withRouter } from 'react-router';

class Footer extends React.Component {
  render () {
    return(
      <footer className="global-footer">
        <sction className="top"></sction>
        <section className="mid"></section>
        <section className="bottom"></section>
      </footer>
    );
  }
}

export default Footer;
