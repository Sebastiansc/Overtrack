import { connect } from 'react-redux';
import Searchbar from './Searchbar';
import { fetchSummoner } from '../../actions/summoner_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSummoner: summoner => dispatch(fetchSummoner(summoner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar);
