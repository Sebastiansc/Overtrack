import React from 'react';

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
