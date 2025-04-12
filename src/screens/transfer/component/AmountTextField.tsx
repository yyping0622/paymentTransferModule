import React from 'react';
import {View} from 'react-native';
import {TextField} from '../../../component';
import {FormTextFieldProps} from '../../../interface/TitleTextFieldInterface';
import {useCurrencyFormatter} from '../../../useHook/UseCurrencyFormatter';

const AmountTextField = ({formik}: FormTextFieldProps) => {
  const {formattedText, formatPriceText, inputTextSelection, clearIfZero} =
    useCurrencyFormatter(formik, 'amount');
  const {errors, touched} = formik;

  return (
    <View>
      <TextField
        isCurrencyField
        keyboardType="decimal-pad"
        placeholder="0.00"
        value={formattedText}
        onChangeText={value => formatPriceText(value)}
        contextMenuHidden
        selection={inputTextSelection()}
        onEndEditing={clearIfZero}
        onError={(errors.amount && touched.amount) as boolean}
        errorText={errors.amount}
      />
    </View>
  );
};

export default AmountTextField;
