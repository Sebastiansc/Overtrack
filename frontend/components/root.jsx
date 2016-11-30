import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SplashContainer from './splash/splash_container';
import LeaderboardContainer from './leaderboard/leaderboard_container';
import ProfileContainer from './profile/profile_container';
import { fetchSummoner } from '../actions/summoner_actions';

const Root = ({ store }) => {
  const _populateSummoner = (nextState, replace) => {
    if (!store.getState().summoner.name) {
      store.dispatch(fetchSummoner(nextState.params.summonerName));
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='ranking' component={LeaderboardContainer}/>
          <Route path='profile/:summonerName' component={ProfileContainer}
             onEnter={_populateSummoner}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
