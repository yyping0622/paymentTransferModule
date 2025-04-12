import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../utils/ShareUtils';
import {Screens, TAB_ICON_MAPPING} from '../../utils/TabBarMainUtils';
import {Icon} from '../../component';
import {IconVariantProps} from '../../types/component/IconTypes';

const TabBarMain = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.primary._500,
        headerShown: true,
        headerShadowVisible: false,
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Icon
              variant={TAB_ICON_MAPPING.get(route.name) as IconVariantProps}
              width={size}
              color={color}
            />
          );
        },
      })}
      initialRouteName={'home'}>
      {Screens.map(({name, component, title}) => {
        return (
          <Tab.Screen
            key={`screen-${name}`}
            name={name}
            component={component}
            options={{title, headerShown: !!title}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabBarMain;

const styles = StyleSheet.create({});
