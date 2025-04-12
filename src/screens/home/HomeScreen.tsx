import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {COLORS} from '../../utils/ShareUtils';
import UserHeaderView from './component/UserHeaderView';
import BalanceCardView from './component/BalanceCardView';
import {Button} from '../../component';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/ScreenTypes';
const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <SafeAreaView style={styles.mainView}>
      <UserHeaderView />
      <BalanceCardView />
      <View style={styles.buttonView}>
        <Button
          title="Transfer Money"
          onClick={() =>
            navigation.navigate('transferScreen', {})
          }
          style={styles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background.light,
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
  },
  buttonStyle: {width: '50%'},
});
