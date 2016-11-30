import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    $(document).scrollTop(0);

  }

  render () {
    return (
      <div className="content-wrapper">
        <div className="header">
          <div className="profile-icon"></div>
          <div className="profile-info"></div>
        </div>
        <div className="nav-bar"></div>
        <div className="summoner-content"></div>
      </div>
    );
  }
}

export default Profile;
