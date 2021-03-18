import React, { useState } from 'react';
import update from 'immutability-helper';
import * as Styles from './styles';
import { Spacings, Typography } from 'shared/styles';
import { Button, ExpandedSelect } from 'shared/components';
import { useRestaurantsFilter } from 'features/restaurants/hooks';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useNavigation } from '@react-navigation/core';
import { Screens } from 'shared/constant';

const RatingOptions = [
  { label: '1 star or above', value: 1 },
  { label: '2 star or above', value: 2 },
  { label: '3 star or above', value: 3 },
  { label: '4 star or above', value: 4 },
  { label: '5 star or above', value: 5 },
];

const CategoriesOptions = [
  { label: 'Fast food', value: 1 },
  { label: 'Pizzas', value: 2 },
  { label: 'Burgers', value: 3 },
  { label: 'Chinese', value: 4 },
  { label: 'Sushi', value: 5 },
];

const RestaurantsFilter = (props) => {
  const { style } = props;
  const { filter, setFilter } = useRestaurantsFilter();
  const { goBack, canGoBack, reset } = useNavigation();
  const [localFilter, setLocalFilter] = useState(filter);

  useDeepCompareEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleChange = (event) => {
    const { name, value } = event;
    const newLocalFilter = update(localFilter, {
      [name]: { $set: value ? value : null },
    });
    setLocalFilter(newLocalFilter);
  };

  const submit = () => {
    setFilter(localFilter);
    canGoBack() ? goBack() : reset(Screens.RESTAURANTS);
  };

  return (
    <Styles.Container style={style}>
      <Styles.FixedContainer>
        <Typography.Heading>Filter</Typography.Heading>
      </Styles.FixedContainer>
      <Styles.ScrollContainer contentContainerStyle={Spacings.FULL_PADDING}>
        <ExpandedSelect
          label="Rating"
          value={localFilter.ratings}
          onChange={handleChange}
          name="ratings"
          options={RatingOptions}
        />
        <ExpandedSelect
          label="Categories"
          value={localFilter.categories}
          onChange={handleChange}
          name="categories"
          options={CategoriesOptions}
        />
      </Styles.ScrollContainer>
      <Styles.FixedContainer>
        <Button onPress={submit} label="Save" />
      </Styles.FixedContainer>
    </Styles.Container>
  );
};

export default RestaurantsFilter;
