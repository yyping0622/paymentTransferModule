import {StyleSheet, View} from 'react-native';
import {Icon, Text} from '../../../component';
import React from 'react';
import {COLORS} from '../../../utils/ShareUtils';
import {useAppDispatch, useAppSelector} from '../../../reduxToolKit/ReduxStore';
import {formatAmountWithCurrency} from '../../../utils/CurrencyFormatterUtils';
import {setUserInfo} from '../../../reduxToolKit/slice/UserSlice';

const BalanceCardView = () => {
  const {userInfo} = useAppSelector(state => state.rootReducer.UserReducer);
  const {userBalance, userSecureBalance} = userInfo;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.titleView}>
          <Text
            label="Total balance"
            textColor="neutral._100"
            variant="LABEL_SMALL"
          />
          <Icon
            variant={userSecureBalance ? 'entry_on' : 'entry_off'}
            width={15}
            height={15}
            style={styles.iconStyle}
            color={COLORS.neutral._100}
            onClick={() => {
              dispatch(
                setUserInfo({
                  userSecureBalance: !userSecureBalance,
                }),
              );
            }}
          />
        </View>
        <Text
          label={
            userSecureBalance
              ? 'MYR ******'
              : formatAmountWithCurrency(userBalance)
          }
          variant="BODY_LARGE"
          textColor="neutral._100"
          style={styles.balanceText}
        />
      </View>
    </View>
  );
};

export default BalanceCardView;

const styles = StyleSheet.create({
  titleView: {flexDirection: 'row', alignItems: 'center'},
  iconStyle: {marginLeft: 2},
  cardContainer: {
    backgroundColor: COLORS.primary._500,
    margin: 10,
    borderRadius: 10,
  },
  infoContainer: {
    marginHorizontal: 16,
    marginVertical: 25,
  },
  balanceText: {fontWeight: 'bold'},
});
