import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors, Icon } from '../../../ultils/const'
import { styleHone } from '../Style'
import CustomButton from '../../../Components/CustomButton'



type WalletType = {
  Title:string , 
  Money:string , 
  percent:string , 
  date:string
}
export default function YourWalletComponent({Title , Money , percent , date}:WalletType) {
  return (
    <View style = {styleHone.cHeaderHome}>
      <Text style = {styleHone.headerTitle}>{Title}</Text>

      <View style = {styleHone.cHeaderMoney}>
        <Image source={Icon.icondollar} style = {styleHone.iconDolar} />

        <Text style = {styleHone.txtMoney}>{Money} USD</Text>

      </View>
      <View style = {styleHone.cPercent}>
        <Image source={Icon.iconup_left} style = {styleHone.iconPercent}/>
        <Text style = {styleHone.txtPercent}> {percent} %</Text>

        <Text style = {styleHone.txtdate}>{date} change</Text>
      </View>



<View style = {{flexDirection:'row' , justifyContent:'space-evenly' , alignItems:'center' , position:'absolute' , bottom:-25 ,left:0 , right:0 }}>
      <CustomButton icon={Icon.iconsend} title='Trensfert'/>
      <CustomButton icon={Icon.icondowload} title='Withdraw'/>
      </View>

    </View>
  )
}