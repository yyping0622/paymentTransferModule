import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';
import {Button} from '../../component';
import {useTransferForm} from '../../useHook/UseTransferForm';
import {COLORS} from '../../utils/ShareUtils';
import TitleTextFieldView from './component/TitleTextFieldView';

const TransferScreen = () => {
  const {formik} = useTransferForm();
  const {handleSubmit} = formik;
  return (
    <View style={styles.mainView}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <ScrollView>
          <View style={styles.formView}>
            <TitleTextFieldView title="*Recipient:" formik={formik} />
            <TitleTextFieldView
              title="*Amount:"
              variant="AMOUNT"
              formik={formik}
            />
            <TitleTextFieldView
              title="Transaction Notes (Optional):"
              variant="TRANSACTION_NOTE"
              formik={formik}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttonView}>
        <Button
          title="Continue"
          onClick={() => {
            Keyboard.dismiss();
            handleSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default TransferScreen;

const styles = StyleSheet.create({
  mainView: {backgroundColor: COLORS.background.light, flex: 1},
  formView: {marginHorizontal: 16},
  KeyboardAvoidingView: {flex: 1},
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
  },
});
