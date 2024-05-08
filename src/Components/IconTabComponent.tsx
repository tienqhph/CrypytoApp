import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors, Icon} from '../ultils/const';
import {style} from './style';

type iconType = {
  icon: any;
  focused: boolean;
  name: string;
};

export default function IconTabComponent({icon, focused, name}: iconType) {
  return (
    <View
      style={[style.cIconComponent, focused && name == 'Trade' ?style.cNameTrade :{}]}>
      <Image
        source={icon}
        style={[
          focused ? style.iconBottomtab : style.iconBottomTabUnFocused,
          focused && name == 'Trade' ? {tintColor: Colors.white} : {},
        ]}
      />
      <Text
        style={[
          focused ? style.txtBottomTab : style.txtunFocusedBottomTab,
          focused && name ? {color: Colors.white} : {},
        ]}>
        {name}
      </Text>
    </View>
  );
}
