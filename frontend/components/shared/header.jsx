import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  render () {
    return(
      <header className="global-header">
        <section className="logo"></section>
        <section className="nav"></section>
        <section className="tool"></section>
      </header>
    );
  }
}

export default Header;
