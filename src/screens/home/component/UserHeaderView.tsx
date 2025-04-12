import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AvatarView, Text} from '../../../component';
import {useAppSelector} from '../../../reduxToolKit/ReduxStore';

const UserHeaderView = () => {
  const {userName} = useAppSelector(
    state => state.rootReducer.UserReducer.userInfo,
  );
  return (
    <View>
      <View style={styles.containerView}>
        <AvatarView />
        <View style={styles.labelView}>
          <Text label="Hello," textColor="neutral._600" />
          <Text
            label={userName}
            textColor="neutral._700"
            variant="BODY_LARGE"
          />
        </View>
      </View>
    </View>
  );
};

export default UserHeaderView;

const styles = StyleSheet.create({
  containerView: {
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
  },
  labelView: {marginHorizontal: 12, justifyContent: 'center'},
});
