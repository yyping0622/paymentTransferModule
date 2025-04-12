import {TextProps as RnTextProps} from 'react-native';
import {textStyles} from '../utils/StyledTextUtil';
import {COLORS, PathInto} from '../types/ColorTypes';

export interface TextProps extends RnTextProps {
  label?: string;
  variant?: keyof typeof textStyles;
  textColor?: PathInto<COLORS>;
  lineHeight?: number;
}
