import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon, NAME_SCREENS} from '../ultils/const';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Portfolio from '../Screens/Portfolio/Portfolio';
import Trade from '../Screens/Trade/Trade';
import Market from '../Screens/Market/Market';
import Profil from '../Screens/Profil/Profil';
import IconTabComponent from '../Components/IconTabComponent';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: '#292929',
        },
      }}>
      <Tab.Screen
        name={NAME_SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconTabComponent
              icon={Icon.IconHome}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen name={NAME_SCREENS.PORTFOLIO} component={Portfolio}  options={{
        tabBarIcon: ({focused}) => (
          <IconTabComponent
            icon={Icon.Iconportfolio}
            name="Portfolio"
            focused={focused}
          />
        ),
      }}/>

      <Tab.Screen name={NAME_SCREENS.TRADE} component={Trade}
       options={{
        tabBarIcon: ({focused}) => (
          <IconTabComponent
            icon={Icon.Icontrade}
            name="Trade"
            focused={focused}
          />
        ),
      }} />

      <Tab.Screen name={NAME_SCREENS.MARKET} component={Market}
       options={{
        tabBarIcon: ({focused}) => (
          <IconTabComponent
            icon={Icon.Iconmark}
            name="Market"
            focused={focused}
          />
        ),
      }} />

      <Tab.Screen name={NAME_SCREENS.PROFIL} component={Profil}
       options={{
        tabBarIcon: ({focused}) => (
          <IconTabComponent
            icon={Icon.Iconprofil}
            name="Profil"
            focused={focused}
          />
        ),
      }} />
    </Tab.Navigator>
  );
};
export default function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NAME_SCREENS.BOTTOMTAB}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
