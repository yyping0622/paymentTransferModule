import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {usePinInput} from '../../useHook/UsePinInput';
import {COLORS} from '../../utils/ShareUtils';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StacksParamList} from '../../types/ScreenTypes';

const PinScreen = () => {
  const route = useRoute<RouteProp<StacksParamList, 'pinScreen'>>();
  const detail = route?.params.transactionDetail;

  const {pin, handleChange, setInputRef, handleKeyPress} = usePinInput(
    4, // Pin count
    detail, // Transaction Detail
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            ref={setInputRef(index)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={value => handleChange(index, value)}
            value={digit}
            onKeyPress={e => handleKeyPress(e, index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: COLORS.background.light},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 20,
  },
  input: {
    borderBottomWidth: 2,
    width: 50,
    height: 60,
    textAlign: 'center',
    fontSize: 24,
    borderColor: COLORS.primary._500,
  },
});

export default PinScreen;
