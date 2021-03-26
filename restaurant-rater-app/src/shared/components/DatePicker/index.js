import React, { useState } from 'react';
import { ViewPropTypes } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as PropTypes from 'prop-types';
import * as Styles from './styles';
import { SharedPropTypes } from 'shared/utils';

const DatePicker = (props) => {
  const { style, label, value, onChange, name, placeholder, error } = props;
  const [visible, setVisible] = useState(false);

  const selectItem = (date) => {
    setVisible(false);
    const formattedDate = date.toISOString().split('T')[0];
    onChange({ name, value: formattedDate });
  };

  const renderValue = () => {
    if (value) {
      return <Styles.Value>{value}</Styles.Value>;
    }

    if (placeholder) {
      return <Styles.Placeholder>{placeholder}</Styles.Placeholder>;
    }

    return null;
  };

  return (
    <Styles.Container style={style}>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Select error={error} onPress={() => setVisible(true)}>
        {renderValue()}
      </Styles.Select>
      {error && <Styles.Error>{error.message}</Styles.Error>}
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        date={new Date(value || null)}
        onConfirm={selectItem}
        onCancel={() => setVisible(false)}
      />
    </Styles.Container>
  );
};

DatePicker.propTypes = {
  style: ViewPropTypes.style,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: SharedPropTypes.ErrorType,
  onBlur: PropTypes.func,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  style: null,
  value: null,
  placeholder: null,
  name: null,
  error: null,
  onBlur: () => {},
};

export default DatePicker;
