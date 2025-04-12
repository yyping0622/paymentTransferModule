import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '..';

const AvatarView = () => {
  return (
    <View>
      <Icon variant={'profilePlaceholder'} width={50} height={50} />
    </View>
  );
};

export default AvatarView;

const styles = StyleSheet.create({});
