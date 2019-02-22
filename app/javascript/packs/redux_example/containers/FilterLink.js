import {connect} from 'react-redux';
import {setVisibilityFilter} from "../actions";
import Link from '../components/Link';

const mapStateToProp = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  }
};

const mapDispatchToProp = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateToProp,
  mapDispatchToProp
)(Link);

export default FilterLink;
