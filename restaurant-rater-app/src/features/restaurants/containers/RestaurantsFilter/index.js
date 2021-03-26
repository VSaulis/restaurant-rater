import React, { useState } from 'react';
import update from 'immutability-helper';
import { Containers, Spacings } from 'shared/styles';
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

const RestaurantsFilter = () => {
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
    <Containers.FilledContainer>
      <Containers.ScrollView contentContainerStyle={Spacings.HORIZONTAL_PADDING.L}>
        <ExpandedSelect
          label="Rating"
          value={localFilter.lowestRating}
          onChange={handleChange}
          name="lowestRating"
          options={RatingOptions}
        />
      </Containers.ScrollView>
      <Containers.Footer>
        <Button onPress={submit} label="Save" />
      </Containers.Footer>
    </Containers.FilledContainer>
  );
};

export default RestaurantsFilter;
