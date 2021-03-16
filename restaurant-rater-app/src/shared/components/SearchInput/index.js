import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { Colors, Icons } from 'shared/styles';
import Icon from '../Icon';

const SearchInput = (props) => {
  const { onBlur, onChange, name, value, disabled, style } = props;

  const handleTextChange = (text) => {
    onChange({ name, value: text });
  };

  const handleBlur = () => {
    onBlur({ name });
  };

  return (
    <Styles.Container style={style}>
      <Styles.IconContainer>
        <Icon size={20} color={Colors.GREY} name={Icons.SEARCH} />
      </Styles.IconContainer>
      <Styles.Input
        placeholder="Search"
        placeholderTextColor={Colors.GREY}
        disabled={disabled}
        value={value}
        onBlur={handleBlur}
        onTextChange={handleTextChange}
      />
    </Styles.Container>
  );
};

SearchInput.propTypes = {
  value: PropTypes.PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

SearchInput.defaultProps = {
  value: null,
  onBlur: () => {},
  onChange: () => {},
  name: null,
  disabled: false,
};

export default SearchInput;
