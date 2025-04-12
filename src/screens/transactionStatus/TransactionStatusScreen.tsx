import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import SuccessLottie from '../../assets/lottie/success_lottie.json';
import {COLORS} from '../../utils/ShareUtils';
import {Button, Text} from '../../component';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigation, StacksParamList} from '../../types/ScreenTypes';
import {formatAmountWithCurrency} from '../../utils/CurrencyFormatterUtils';
import { formatDateTime } from '../../utils/DateTimeFormatterUtils';

const TransactionStatusScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  const route = useRoute<RouteProp<StacksParamList, 'transactionStatus'>>();
  const {amount, timestamp, transactionId} = route?.params.transactionInfo;

  return (
    <SafeAreaView style={styles.mainView}>
      <LottieView
        source={SuccessLottie}
        autoPlay
        resizeMode="cover"
        style={[styles.LottieViewStyle]}
      />
      <View style={styles.centerViewStyle}>
        <Text
          label="Transaction Successful"
          variant="TITLE_LARGE"
          style={{fontWeight: 'bold'}}
        />
        <Text
          label="We have successfully transfer the amount to the recipient. This may take up to a couple of minutes."
          variant="LABEL_LARGE"
          textColor="neutral._600"
          style={{textAlign: 'center'}}
        />
      </View>
      <View style={styles.dividerStyle} />
      <View style={styles.infoView}>
        <Text
          label={`Amount: ${formatAmountWithCurrency(amount)}`}
          variant="LABEL_LARGE"
          textColor="neutral._700"
        />
        <Text
          label={`TransactionID: ${transactionId}`}
          variant="LABEL_LARGE"
          textColor="neutral._700"
        />
        <Text
          label={`DateTime: ${formatDateTime(timestamp)}`}
          variant="LABEL_LARGE"
          textColor="neutral._700"
        />
      </View>

      <View style={styles.buttonView}>
        <Button
          title="Go Back Home"
          onClick={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'tabBarMain'}],
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionStatusScreen;

const styles = StyleSheet.create({
  mainView: {flex: 1, backgroundColor: COLORS.background.light},
  LottieViewStyle: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 16,
  },
  centerViewStyle: {
    marginHorizontal: 24,
    alignItems: 'center',
  },
  dividerStyle: {
    marginTop: 25,
    marginBottom: 25,
    height: 1,
    backgroundColor: COLORS.neutral._500,
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 50,
  },
  infoView: { margin: 10, marginHorizontal: 16}
});
