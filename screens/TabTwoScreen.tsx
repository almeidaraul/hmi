import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { IntervalInput } from '../components/IntervalInput';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
		{/*
			* é de hora em hora, só que facilita copiar (vc pode copiar de um pra outro intervalo)
		*/}
			<IntervalInput/>
			<SaveButton/>	
    </View>
  );
}

const SaveButton = () => {
	return (
		<TouchableOpacity>
			<Text>Save</Text>
			<AntDesign name="save" size={24} color={Colors.light.tabIconDefault}/>
		</TouchableOpacity>
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
