import {StyleSheet} from 'react-native';
import { Colors } from '../../ultils/const';


export const styleHone = StyleSheet.create({
  cHeaderHome: {
    backgroundColor: '#292929',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 42,
    paddingBottom: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    marginBottom:50
  },

  headerTitle:{color:'#898989' , fontSize:18 , fontWeight:'700'} , 
  cHeaderMoney :{flexDirection:'row' ,alignItems:'flex-end'},

  iconDolar:{width:24 , height:24 },
  txtMoney:{color:Colors.white , fontSize:28 , alignItems:'flex-end' , fontWeight:'700'},
  cPercent:{flexDirection:'row' , alignItems:'center'},
  iconPercent:{tintColor:'#85d685' , width:18 , height:18},

  txtPercent:{color:'#85d685'}, 
  txtdate:{color:Colors.second , paddingLeft:12},
});
