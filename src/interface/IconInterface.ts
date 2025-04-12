import {ViewStyle} from 'react-native';
import {IconVariantProps} from '../types/component/IconTypes';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  onClick?: Function;
  variant: IconVariantProps;
  style?: ViewStyle;
  borderRadius?: number;
}
