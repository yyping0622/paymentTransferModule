import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '..';
import {COLORS} from '../../utils/ShareUtils';

const EmptyStateView = ({message}: {message: string}) => {
  return (
    <View style={styles.emptyStateCard}>
      <Text variant="BODY_LARGE" label={message} textColor="neutral._100" />
    </View>
  );
};

export default EmptyStateView;

const styles = StyleSheet.create({
  emptyStateCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: COLORS.general.midGrey,
  },
});
