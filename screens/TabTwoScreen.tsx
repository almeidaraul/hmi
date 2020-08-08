import * as React from 'react';
import { StyleSheet } from 'react-native';

import { IntervalInput, Interval } from '../components/IntervalInput';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
	const [intervals, setIntervals] = React.useState({
			hour: 0,
			sf: 30, //sensibility factor
			ci: 20  //carbohydrate-insulin
		})
  return (
    <View style={styles.container}>
		{/*
			* é de hora em hora, só que facilita copiar (vc pode copiar de um pra outro intervalo)
		*/}
			<IntervalInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
