import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NAME_SCREENS } from '../ultils/const'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home/Home'
import Portfolio from '../Screens/Portfolio/Portfolio'
import Trade from '../Screens/Trade/Trade'
import Market from '../Screens/Market/Market'
import Profil from '../Screens/Profil/Profil'
const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
        return(
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name={NAME_SCREENS.HOME}  component={Home} options={{}}/>

                <Tab.Screen name={NAME_SCREENS.PORTFOLIO}  component={Portfolio}/>

                <Tab.Screen name={NAME_SCREENS.TRADE}  component={Trade}/>

                <Tab.Screen name={NAME_SCREENS.MARKET}  component={Market}/>
                

                <Tab.Screen name={NAME_SCREENS.PROFIL}  component={Profil}/>
            </Tab.Navigator>
        )
}
export default function MainNavigation() {
  return (
           <Stack.Navigator screenOptions={{headerShown :false}}>
            <Stack.Screen  name={NAME_SCREENS.BOTTOMTAB} component={BottomTabNavigator}/>
           </Stack.Navigator>
  )
}




