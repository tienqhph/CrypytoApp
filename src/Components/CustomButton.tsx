import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors, Icon } from '../ultils/const'
import { style } from './style'



type TypeBtn = {
    icon:any , 
    title:string
}
export default function CustomButton({icon , title}:TypeBtn) {
  return (
    <View style = {style.cIconBottom}>
      <TouchableOpacity>
        <View style = {style.flr}>
            <Image source={icon} style = {style.iconBtn}/>
            <Text style = {style.txtBtn}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}