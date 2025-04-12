import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ViewBase} from './src/screens';
import {navigationInitialScreens} from './src/utils/NavigationScreenUtils';
import {Provider} from 'react-redux';
import {reduxStore} from './src/reduxToolKit/ReduxStore';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={reduxStore}>
      <ViewBase>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="tabBarMain"
            screenOptions={{headerBackButtonDisplayMode: 'minimal'}}>
            {navigationInitialScreens.map(({name, component, options}) => {
              return (
                <Stack.Screen
                  key={`screen-${name}`}
                  name={name}
                  component={component}
                  options={{...options}}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </ViewBase>
    </Provider>
  );
};

export default App;
