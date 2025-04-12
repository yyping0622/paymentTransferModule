import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../utils/ShareUtils';
import {FormikProps} from 'formik';
import {TransactionDetail} from '../../../types/TransactionDetailDataType';

const TransferNoteTextField = ({
  formik,
}: {
  formik: FormikProps<TransactionDetail>;
}) => {
  const [focused, setFocused] = useState(false);
  const textFieldBorderColor = focused
    ? COLORS.primary._500
    : COLORS.neutral._400;
  const {handleChange, values} = formik;

  return (
    <View
      style={[styles.inputTextContainer, {borderColor: textFieldBorderColor}]}>
      <TextInput
        placeholder="Type here"
        style={styles.defaultTextFieldStyle}
        multiline
        keyboardType="ascii-capable"
        autoCorrect={false}
        autoCapitalize="none"
        value={values.transactionNote}
        onChangeText={handleChange('transactionNote')}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
};

export default TransferNoteTextField;

const styles = StyleSheet.create({
  inputTextContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    minHeight: 100,
  },
  defaultTextFieldStyle: {
    flex: 1,
    fontSize: 16,
    color: COLORS.neutral._700,
    marginTop: 10,
    padding: 16,
    textAlignVertical: 'top',
    paddingTop: 0,
    paddingBottom: 8,
  },
});
