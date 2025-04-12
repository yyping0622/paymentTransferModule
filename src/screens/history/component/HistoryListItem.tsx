import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {TransactionDataType} from '../../../types/api/TransactionApiType';
import {Text} from '../../../component';
import {COLORS} from '../../../utils/ShareUtils';
import {formatDateTime} from '../../../utils/DateTimeFormatterUtils';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../../types/ScreenTypes';

const HistoryListItem = ({data}: {data: TransactionDataType}) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('transferScreen', {
          amount: data.transactionDetail.amount,
          recipient: data.transactionDetail.recipientAccNum,
          notes: data.transactionDetail.transactionNote,
        })
      }>
      <View style={styles.containerView}>
        <View style={styles.infoView}>
          <Text
            label={`Recipient: ${data.transactionDetail.recipientAccNum}`}
            textColor="neutral._100"
          />
          <Text
            label={`Amount Transfer: ${data.transactionDetail.amount}`}
            textColor="neutral._100"
          />
          <Text
            label={`Transaction ID: ${data.transactionId}`}
            textColor="neutral._100"
          />
          <Text
            label={`Date Time: ${formatDateTime(data.timestamp)}`}
            textColor="neutral._100"
          />
          {data.transactionDetail.transactionNote && (
            <Text
              label={`Notes: ${data.transactionDetail.transactionNote}`}
              textColor="neutral._100"
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HistoryListItem;

const styles = StyleSheet.create({
  containerView: {
    margin: 10,
    backgroundColor: COLORS.YELLOW._700,
    borderRadius: 10,
  },
  infoView: {padding: 10},
});
