import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ViewPropTypes } from 'react-native';
import { SharedPropTypes } from 'shared/utils';
import * as Styles from './styles';
import BottomSheetBackdrop from 'shared/components/BottomSheetBackdrop';

const BottomSheet = (props) => {
  const { style, snapPoints, children, onClose, visible } = props;
  const ref = useRef(null);

  const handleOnChange = (index) => {
    if (index === -1) onClose();
  };

  const handleOnClose = () => {
    ref.current.close();
    onClose();
  };

  useEffect(() => {
    if (ref.current) {
      visible ? ref.current.present() : ref.current.close();
    }
  }, [visible]);

  return (
    <BottomSheetModal
      backgroundComponent={BottomSheetBackdrop}
      onChange={handleOnChange}
      onDismiss={handleOnClose}
      style={style}
      ref={ref}
      snapPoints={snapPoints}
    >
      <Styles.Container>{children}</Styles.Container>
    </BottomSheetModal>
  );
};

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  snapPoints: PropTypes.arrayOf(SharedPropTypes.NumberOrStringType),
  style: ViewPropTypes.style,
};

BottomSheet.defaultProps = {
  snapPoints: [200],
  style: null,
};

export default BottomSheet;
