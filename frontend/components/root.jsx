import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { isEmpty } from 'lodash';
import { fetchRankings } from '../actions/ranking_actions';
import App from './app';
import SplashContainer from './splash/splash_container';
import RankingsContainer from './rankings/rankings_container';
import ProfileContainer from './profile/profile_container';
import { fetchSummoner } from '../actions/summoner_actions';
import { fetchMatches } from '../actions/match_actions';

const Root = ({ store }) => {

  const getRankings = ({params}, replace) => {
    if(isEmpty(store.getState().rankings["solo_5x5"])){
      store.dispatch(fetchRankings("challenger"));
    }
  };

  const _populateSummoner = (nextState, replace) => {
    store.getState().summoner = {};
    store.dispatch(fetchSummoner(nextState.params.summonerName.trim()));
  };

  const _populateMatches = (nextState, replace) => {
    store.getState().matches = {};
    store.dispatch(fetchMatches(nextState.params.summonerName.trim(), 0, 20));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='rankings' component={RankingsContainer}
            onEnter={getRankings}>
            <IndexRoute component={RankingsContainer}/>
            <Route path='team_5x5' component={RankingsContainer}/>
            <Route path='team_3x3' component={RankingsContainer}/>
            <Route path='flex_sr' component={RankingsContainer}/>
            <Route path='flex_tt' component={RankingsContainer}/>
          </Route>
          <Route path='profile/:summonerName' component={ProfileContainer}
             onEnter={_populateSummoner, _populateMatches}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
