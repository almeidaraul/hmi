import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { IntervalInput } from '../components/IntervalInput';
import { Text, ScrollView, View } from '../components/Themed';

export default function Settings() {
  return (
    <ScrollView>
			<View style={styles.container}>
		{/*
			* é de 2 em 2 horas, só que facilita copiar (vc pode copiar de um pra outro intervalo)
			* salva automaticamente quando há alteração
		*/}
			<Text style={styles.title}>
				Changes are automatically saved.
			</Text>
			{[...Array(12).keys()].map(h => {
				return <IntervalInput key={h}/>
			})}
			</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
		margin: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
