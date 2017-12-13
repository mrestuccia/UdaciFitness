import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';


export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View style={{flex: 1}}>
      <Slider
        style={styles.row}
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

