import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {StyledButtonProps} from '../../interface/StyledButtonInterface';
import {Text} from '..';
import {COLORS} from '../../utils/ShareUtils';

const StyledButton = (props: StyledButtonProps) => {
  const {
    title,
    onClick,
    disabled,
    textVariant = 'TITLE_MEDIUM',
    textColor = 'neutral._100',
    style,
  } = props;
  const bgColor =
    style && style?.backgroundColor
      ? style.backgroundColor
      : COLORS.primary._500;
  const disableBtnBgColor: ViewStyle = {
    backgroundColor: disabled ? COLORS.neutral._600 : bgColor,
  };
  return (
    <TouchableWithoutFeedback onPress={onClick} disabled={disabled}>
      <View style={[styles.containerView, style, disableBtnBgColor]}>
        <Text
          label={title}
          variant={textVariant}
          textColor={textColor}
          style={styles.textStyle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: COLORS.primary._500,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginHorizontal: 8,
    marginVertical: 8,
    alignSelf: 'center',
    borderRadius: 55,
  },
  textStyle: {margin: 10},
});
