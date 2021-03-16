import React from 'react';
import * as Styles from './styles';
import PropTypes from 'prop-types';
import { Sizes } from 'shared/styles';

const ListSeparator = (props) => {
  const { height } = props;

  return <Styles.Container height={height} />;
};

ListSeparator.propTypes = {
  height: PropTypes.number,
};

ListSeparator.defaultProps = {
  height: Sizes.M,
};

export default ListSeparator;
