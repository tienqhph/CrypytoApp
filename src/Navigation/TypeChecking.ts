import { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import { NAME_SCREENS } from '../ultils/const';

export type RootStackParamList = {
   Home:undefined , 
   Bottomtab:undefined , 

  };


  export  type RootStack =NativeStackNavigationProp<RootStackParamList , NAME_SCREENS.HOME>


  export  type RouteProps = RouteProp<RootStackParamList , NAME_SCREENS.HOME>