import React from 'react';
import { View } from 'react-native';
import { TextField } from '../../../component';
import { FormTextFieldProps } from '../../../interface/TitleTextFieldInterface';

const RecipientTextField = ({
  formik,
  defaultValue = '',
}: FormTextFieldProps) => {
  const {handleChange, values, errors, touched} = formik;
  return (
    <View>
      <TextField
        placeholder="Enter Recipient Info"
        value={values.recipientAccNum}
        onChangeText={handleChange('recipientAccNum')}
        onError={(errors.recipientAccNum && touched.recipientAccNum) as boolean}
        errorText={errors.recipientAccNum}
      />
    </View>
  );
};

export default RecipientTextField;
