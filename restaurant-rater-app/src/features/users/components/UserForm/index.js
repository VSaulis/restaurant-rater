import React, { useEffect, useState } from 'react';
import * as Styles from './styles';
import { Button, Input } from 'shared/components';
import { Spacings } from 'shared/styles';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { UserPropTypes } from 'features/users/utils';

const UserForm = (props) => {
  const { style, formData, isLoading, onSubmit } = props;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (formData) {
      setEmail(formData.email);
      setFirstName(formData.firstName);
      setLastName(formData.lastName);
    }
  }, [formData]);

  const handleSubmit = () => {
    onSubmit({ firstName, lastName, email });
  };

  return (
    <Styles.Container style={style}>
      <Styles.Content>
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="Email"
          onChange={({ value }) => setEmail(value)}
          value={email}
          placeholder="Enter your email"
        />
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="First name"
          onChange={({ value }) => setFirstName(value)}
          value={firstName}
          placeholder="Enter your first name"
        />
        <Input
          style={Spacings.BOTTOM_SPACING.L}
          label="Last name"
          onChange={({ value }) => setLastName(value)}
          value={lastName}
          placeholder="Enter your last name"
        />
      </Styles.Content>
      <Button onPress={handleSubmit} disabled={isLoading} label="Update" />
    </Styles.Container>
  );
};

UserForm.propTypes = {
  style: ViewPropTypes.style,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  formData: UserPropTypes.UserFormData,
};

UserForm.defaultProps = {
  style: null,
  isLoading: false,
};

export default UserForm;
