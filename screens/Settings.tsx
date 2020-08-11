import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { IntervalInfo, IntervalInput } from '../components/IntervalInput';
import { Text, ScrollView, View } from '../components/Themed';

export default function Settings() {
	const [intervals, setIntervals] = React.useState(
		[...Array(12).keys()].map(k => {
			return { ci: "20", fs: "35" };
		})
	);

	const [copiedInterval, setCopiedInterval] = React.useState(intervals[0]);

	const changeCI = (index: number, newCI: string) => {
		let new_intervals = intervals.slice();
		new_intervals[index].ci = newCI;
		setIntervals(new_intervals);
	};

	const changeFS = (index: number, newFS: string) => {
		let new_intervals = intervals.slice();
		new_intervals[index].fs = newFS;
		setIntervals(new_intervals);
	};

	const copyInterval = (index: number) => {
		setCopiedInterval(intervals[index]);
	};

	const pasteInterval = (index: number) => {
		let new_intervals = intervals.slice();
		new_intervals[index].ci = copiedInterval.ci;
		new_intervals[index].fs = copiedInterval.fs;
		setIntervals(new_intervals);
	};

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
				return (
					<IntervalInput
						key={h}
						hour={h*2}
						setCI={(newCI) => changeCI(h, newCI)}
						setFS={(newFS) => changeFS(h, newFS)}
						ci={intervals[h].ci}
						fs={intervals[h].fs}
						copy={() => copyInterval(h)}
						paste={() => pasteInterval(h)}
					/>
				);
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
