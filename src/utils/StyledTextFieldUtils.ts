import {ViewStyle} from 'react-native';
import {COLORS} from './ShareUtils';

export const showCorrectColor = (props: {
  onError?: boolean;
  focused: boolean;
}): ViewStyle => {
  const {onError, focused} = props;
  var color = COLORS.neutral._400;

  if (onError) {
    color = COLORS.error._500;
  }
  if (focused) {
    color = COLORS.primary._500;
  }
  return {borderColor: color};
};
