import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import { SharedTypes } from 'shared/utils';
import { Sizes, Spacings } from 'shared/styles';

const HorizontalSlider = (props) => {
  const { renderItem, items, gap } = props;

  return (
    <Styles.Container>
      <Styles.ScrollContainer
        contentContainerStyle={Spacings.HORIZONTAL_PADDING.M}
        ItemSeparatorComponent={() => <Styles.Separator gap={gap} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        data={items}
      />
    </Styles.Container>
  );
};

HorizontalSlider.propTypes = {
  gap: PropTypes.number,
  items: PropTypes.arrayOf(SharedTypes.HorizontalSliderItemType).isRequired,
  renderItem: PropTypes.func.isRequired,
};

HorizontalSlider.defaultProps = {
  onPress: () => {},
  gap: Sizes.S,
};

export default HorizontalSlider;
