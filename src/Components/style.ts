import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  cIconComponent: {alignItems: 'center', justifyContent: 'center'},
  cNameTrade: {
    backgroundColor: Colors.black,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 30,
  },
  iconBottomtab: {
    width: 32, 
    height: 32
},
  iconBottomTabUnFocused: {
    width: 32,
     height: 32, 
     tintColor: '#353333'
    },
  txtBottomTab: {
    color: Colors.white,
     fontSize: 12,
      fontWeight: '500'
    },
  txtunFocusedBottomTab: {
    color: '#353333',
     fontSize: 12,
      fontWeight: '500'
    },
});
