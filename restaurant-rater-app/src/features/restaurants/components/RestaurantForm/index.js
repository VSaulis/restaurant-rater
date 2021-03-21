import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Input } from 'shared/components';
import { Spacings } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { RestaurantPropTypes } from 'features/restaurants/utils';

const RestaurantForm = (props) => {
  const { style, formData, isLoading, onSubmit } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (formData) {
      setTitle(formData.title);
      setDescription(formData.description);
    }
  }, [formData]);

  const handleSubmit = () => {
    onSubmit({ title, description });
  };

  return (
    <Styles.Container style={style}>
      <Styles.Content>
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="Title"
          onChange={({ value }) => setTitle(value)}
          value={title}
          placeholder="Enter restaurant name"
        />
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="Description"
          onChange={({ value }) => setDescription(value)}
          value={description}
          placeholder="Enter restaurant description"
        />
      </Styles.Content>
      <Button onPress={handleSubmit} disabled={isLoading} label="Update" />
    </Styles.Container>
  );
};

RestaurantForm.propTypes = {
  style: ViewPropTypes.style,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  formData: RestaurantPropTypes.RestaurantFormData,
};

RestaurantForm.defaultProps = {
  style: null,
  isLoading: false,
};

export default RestaurantForm;
