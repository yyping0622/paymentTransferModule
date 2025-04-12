import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/ShareUtils';
import {Text} from '..';

const LoaderView = () => {
  return (
    <View style={styles.background}>
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary._500} />
        <Text
          label="Loading..."
          variant="LABEL_LARGE"
          textColor="primary._500"
          style={styles.textView}
        />
      </View>
    </View>
  );
};

export default LoaderView;

const styles = StyleSheet.create({
  loadingContainer: {
    width: 110,
    height: 110,
    backgroundColor: COLORS.neutral._100,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {width: 100, height: 100},
  textView: {top: 8},
  background: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.others.BLACK_13,
  },
});
