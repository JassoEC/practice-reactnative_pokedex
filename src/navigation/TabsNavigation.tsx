import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchScreen} from '../screens/SearchScreen';
import {StackNavigator} from './MainNavigation';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: 'white'}}
        tabBarOptions={{
          activeTintColor: '#5856D6',
          labelStyle: {
            marginBottom: Platform.OS === 'ios' ? 0 : 10,
          },
          style: {
            borderWidth: 0,
            elevation: 0,
            height: Platform.OS === 'ios' ? 80 : 60,
            position: 'absolute',
            backgroundColor: 'rgba(255,255,225,0.92)',
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={StackNavigator}
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color}) => (
              <Icon color={color} size={25} name="list-outline" />
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Búsqueda',
            tabBarIcon: ({color}) => (
              <Icon color={color} size={25} name="search-outline" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
