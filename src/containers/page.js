import { connect } from 'react-redux'
import * as pageActions from '../redux/actions/page'
import Page from '../components/page'

function mapStateToProps(state) {
  const { displayedCharacters, isFetched, error } = state.page;

  return {
      displayedCharacters,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
    getCharacters: pageActions.getCharacters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
