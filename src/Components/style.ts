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
    height: 32,
  },
  iconBottomTabUnFocused: {
    width: 32,
    height: 32,
    tintColor: '#353333',
  },
  txtBottomTab: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '500',
  },
  txtunFocusedBottomTab: {
    color: '#353333',
    fontSize: 12,
    fontWeight: '500',
  },
  cIconBottom: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  flr: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
  iconBtn: {width: 18, height: 18, marginRight: 12},
  txtBtn: {color: Colors.black, fontWeight: 'bold', fontSize: 18},
  cTopCrypto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  cTxtNameTopCrypto: {flexDirection: 'row', alignItems: 'center'},
  iconLeftTopCrypto: {
    width: 18,
    height: 18,
    marginRight: 10,
    tintColor: Colors.white,
  },
  textWhite: {color: Colors.white, fontWeight: 'bold'},
  flend:{alignItems:'flex-end'},
  cRightTopCrypto:{flexDirection:'row' , alignItems:'center'} , 
  iconDolar:{width: 14, height: 14 , tintColor:Colors.white} , 
  iconup:{width: 14, height: 14}
});
