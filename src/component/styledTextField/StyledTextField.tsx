import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';
import {StyledTextFieldProps} from '../../interface/StyledTextFieldInterface';
import {COLORS} from '../../utils/ShareUtils';
import {Text} from '..';
import {showCorrectColor} from '../../utils/StyledTextFieldUtils';

const StyledTextField = (props: StyledTextFieldProps & TextInputProps) => {
  const [focused, setFocused] = useState(false);
  const {
    containerStyle,
    value = '',
    hintText,
    textStyle,
    errorText,
    isCurrencyField,
    onError,
  } = props;

  const textFieldBorderColor = showCorrectColor({
    focused: focused,
    onError,
  });

  return (
    <View style={containerStyle}>
      {hintText && (
        <Text
          textColor="neutral._700"
          label={hintText}
          variant="LABEL_LARGE"
          style={styles.hintTextStyle}
        />
      )}
      <View style={styles.textContainer}>
        <View style={[styles.rowView, textFieldBorderColor]}>
          {isCurrencyField && (
            <View style={styles.currencyPrefix}>
              <Text
                textColor="neutral._500"
                label="MYR | "
                variant="LABEL_LARGE"
              />
            </View>
          )}
          <TextInput
            autoCorrect={false}
            returnKeyType="done"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            {...props}
            style={[styles.defaultTextFieldStyle, textStyle]}
          />
        </View>
      </View>
      {onError && (
        <Text
          label={errorText}
          variant="LABEL_MEDIUM"
          textAlign="right"
          textColor="error._500"
        />
      )}
    </View>
  );
};

export default StyledTextField;

const styles = StyleSheet.create({
  defaultTextFieldStyle: {
    fontSize: 16,
    color: COLORS.neutral._700,
    paddingVertical: 10,
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
    height: 48,
    backgroundColor: COLORS.background.light,
  },
  textContainer: {flexDirection: 'row'},
  currencyPrefix: {justifyContent: 'center'},
  hintTextStyle: {marginRight: 4, marginBottom: 4, alignSelf: 'flex-end'},
});
