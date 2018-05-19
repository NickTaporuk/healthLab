import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Persons from '../components/Persons';
import * as PersonsActions from '../actions/persons';

function mapStateToProps(state) {
  return {
    persons: state.persons
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PersonsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
