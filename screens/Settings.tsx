import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { defaultIntervals, saveIntervals, getIntervals } from '../constants/persistentStorageFunctions';
import { IntervalInfo, IntervalInput } from '../components/IntervalInput';
import IntervalInputGuide from '../components/IntervalInputGuide';
import { Text, ScrollView, View } from '../components/Themed';

import useStrings from '../assets/useStrings';

export default function Settings() {
	const [intervals, setIntervals] = React.useState(defaultIntervals);
	const Strings = useStrings();

	React.useEffect(() => {
		getIntervals().then((value) => setIntervals(value));
	}, []);

	React.useEffect(() => {
		saveIntervals(intervals);
	}, [intervals]);

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
				{Strings.changes_are_saved}
			</Text>
			<IntervalInputGuide/>
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
