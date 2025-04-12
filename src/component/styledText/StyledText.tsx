import {Text} from 'react-native';
import React from 'react';
import {TEXT_VARIANT_MAPPING} from '../../utils/StyledTextUtil';
import {getColorCode} from '../../types/ColorTypes';
import {TextProps} from '../../interface/StyledTextInterface';

const StyledText = (props: TextProps) => {
  const {
    label,
    variant = '',
    textColor = 'neutral._700',
    children,
    lineHeight,
    ...restProp
  } = props;

  return (
    <Text
      {...restProp}
      style={[
        TEXT_VARIANT_MAPPING.get(variant),
        props.style,
        {...(lineHeight && {lineHeight})},
        {...(textColor && {color: getColorCode(textColor)})},
      ]}>
      {label}
      {children}
    </Text>
  );
};

export default StyledText;
