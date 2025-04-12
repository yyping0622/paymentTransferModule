import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../../component';
import {
  TextFieldComponents,
  TitleTextFieldViewProps,
} from '../../../interface/TitleTextFieldInterface';

const TitleTextFieldView = ({
  title,
  variant = 'RECIPIENT',
  formik,
}: TitleTextFieldViewProps) => {
  const CustomTextField = TextFieldComponents[variant].component;
  return (
    <View style={styles.mainView}>
      <Text label={title} style={styles.titleStyle} />
      <CustomTextField formik={formik} />
    </View>
  );
};

export default TitleTextFieldView;

const styles = StyleSheet.create({
  mainView: {marginTop: 8},
  titleStyle: {marginBottom: 10, fontWeight: 'bold'},
});
