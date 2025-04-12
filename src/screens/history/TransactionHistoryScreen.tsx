import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {useAppSelector} from '../../reduxToolKit/ReduxStore';
import {EmptyStateView} from '../../component';
import {COLORS} from '../../utils/ShareUtils';
import {TransactionDataType} from '../../types/api/TransactionApiType';
import HistoryListItem from './component/HistoryListItem';

const TransactionHistoryScreen = () => {
  const {transactionHistory} = useAppSelector(
    state => state.rootReducer.UserReducer.userInfo,
  );

  return (
    <View style={styles.mainView}>
      <FlatList
        data={transactionHistory}
        renderItem={({item}: {item: TransactionDataType}) => (
          <HistoryListItem data={item} />
        )}
        ListEmptyComponent={
          <EmptyStateView message="No Transaction History For Now" />
        }
      />
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.background.light,
    justifyContent: 'center',
  },
});
