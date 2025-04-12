import {GestureResponderEvent, ViewStyle} from 'react-native';
import {textStyles} from '../utils/StyledTextUtil';
import {COLORS, PathInto} from '../types/ColorTypes';

export interface StyledButtonProps {
  title: string;
  onClick: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  textVariant?: keyof typeof textStyles;
  textColor?: PathInto<COLORS>;
  style?: ViewStyle;
}
