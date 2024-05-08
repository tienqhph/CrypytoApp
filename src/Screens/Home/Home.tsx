import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../ultils/const';
import YourWalletComponent from './Components/yourWalletComponent';
import {LineChart} from 'react-native-wagmi-charts';
import CustomButton from '../../Components/CustomButton';
import TopCryptoComponent from '../../Components/TopCryptoComponent';
export default function Home() {
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  const datafake = [1,2,3,4]

  const RenderItemTopCrypto = ()=>(
    <TopCryptoComponent/>
  )
  return (
    <View style={{backgroundColor: Colors.primary, flex: 1}}>
      <YourWalletComponent
        Title="Your Wallet"
        Money="45.500,34"
        percent="2.30"
        date="7d"
      />
      
      <LineChart.Provider data={data}>
        <LineChart height={250}>
          <LineChart.Path width={1} color={Colors.secondPercent}>
            <LineChart.Gradient />
          </LineChart.Path>

          <LineChart.CursorCrosshair color={Colors.secondPercent}>
            <LineChart.Tooltip
              textStyle={{
                backgroundColor: Colors.secondPercent,
                borderRadius: 4,
                color: 'white',
                fontSize: 18,
                padding: 10,
              }}
            />
          </LineChart.CursorCrosshair>
        </LineChart>
      </LineChart.Provider>

             <FlatList data={datafake} renderItem={RenderItemTopCrypto}/>
    </View>
  );
}
