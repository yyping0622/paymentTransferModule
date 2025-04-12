import {Alert} from 'react-native';
import {AlertDisplayProps} from '../../types/component/AlertViewType';

export const showAlert = ({
  title,
  message,
  confirmText = 'OK',
  onConfirm,
  cancelText,
  onCancel,
}: AlertDisplayProps) => {
  // Checking for display different type of button
  const buttons = [
    ...(cancelText
      ? [
          {
            text: cancelText,
            onPress: onCancel,
          },
        ]
      : []),
    {text: confirmText, onPress: onConfirm},
  ];

  Alert.alert(title, message, buttons);
};
