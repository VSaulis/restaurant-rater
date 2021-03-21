import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Input } from 'shared/components';
import { Spacings } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { CategoryPropTypes } from 'features/categories/utils';

const CategoryForm = (props) => {
  const { style, formData, isLoading, onSubmit } = props;
  const [name, setName] = useState('');

  useEffect(() => {
    if (formData) {
      setName(formData.name);
    }
  }, [formData]);

  const handleSubmit = () => {
    onSubmit({ name });
  };

  return (
    <Styles.Container style={style}>
      <Styles.Content>
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="Name"
          onChange={({ value }) => setName(value)}
          value={name}
          placeholder="Enter category name"
        />
      </Styles.Content>
      <Button onPress={handleSubmit} disabled={isLoading} label="Update" />
    </Styles.Container>
  );
};

CategoryForm.propTypes = {
  style: ViewPropTypes.style,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  formData: CategoryPropTypes.CategoryFormData,
};

CategoryForm.defaultProps = {
  style: null,
  isLoading: false,
};

export default CategoryForm;
