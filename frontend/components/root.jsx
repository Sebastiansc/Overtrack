import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { isEmpty } from 'lodash';
import { fetchRankings } from '../actions/ranking_actions';
import App from './app';
import SplashContainer from './splash/splash_container';
import RankingsContainer from './rankings/rankings_container';
import ProfileContainer from './profile/profile_container';

const Root = ({ store }) => {
  const getRankings = ({params}) => {
    if(isEmpty(store.getState().rankings[params.tier])){
      store.dispatch(fetchRankings(params.tier));
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='ranking/:tier' component={RankingsContainer}
            onEnter={getRankings}/>
          <Route path='profile/:summonerName' component={ProfileContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
