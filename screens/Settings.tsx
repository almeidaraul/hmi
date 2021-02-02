import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { defaultIntervals, saveIntervals, getIntervals } from '../constants/persistentStorageFunctions';
import { IntervalInfo, IntervalInput } from '../components/IntervalInput';
import { AddButton } from '../components/AddButton';
import { Text, ScrollView, View } from '../components/Themed';

import useStrings from '../assets/useStrings';

export default function Settings() {
	const [intervals, setIntervals] = React.useState(defaultIntervals);
	const [editLock, setEditLock] = React.useState(true);
	const Strings = useStrings();
	const colorScheme = useColorScheme();

	const updateLock = () => { console.log(!editLock); setEditLock(!editLock); }

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

	const newInterval = () => {
		console.log("TODO");
	}

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
			<TouchableOpacity
				activeOpacity={0.8}
				style={styles.buttonOpacity}
				onPress={updateLock}
			>
				<AntDesign
					name={editLock ? "lock1" : "unlock"}
					size={24}
					color={Colors[colorScheme].text}
					style={styles.buttonContentSpaced}
				/>
				<Text style={styles.buttonContentSpaced}>
					{ editLock ? Strings.enable_edit : Strings.disable_edit }
				</Text>
			</TouchableOpacity>
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
						editLock={editLock}
					/>
				);
			})}
			<AddButton editLock={editLock} onPress={newInterval} />
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
		textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
	buttonOpacity: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		minWidth: 180,
		minHeight: 30,
		borderColor: Colors.light.tabIconDefault,
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 3,
		marginTop: 15,
		marginBottom: 15,
	},
	buttonContentSpaced: {
		paddingLeft: 3,
		paddingRight: 3,
	},
});
