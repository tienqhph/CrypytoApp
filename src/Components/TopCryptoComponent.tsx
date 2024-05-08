import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors, Icon} from '../ultils/const';
import {style} from './style';

export default function TopCryptoComponent() {
  return (
    <View style={style.cTopCrypto}>
      <View style={style.cTxtNameTopCrypto}>
        <Image source={Icon.iconbitcoin} style={style.iconLeftTopCrypto} />
        <Text style={style.textWhite}>Bitcoin</Text>
      </View>

      <View style={style.flend}>
        <View style={style.cRightTopCrypto}>
          <Image source={Icon.icondollar} style={style.iconDolar} />
          <Text style={style.textWhite}> 36,214,00</Text>
        </View>

        <View style={style.cRightTopCrypto}>
          <Image source={Icon.iconup_left} style={style.iconup} />
          <Text style={{color: Colors.secondPercent}}> 2.3 %</Text>
        </View>
      </View>
    </View>
  );
}
