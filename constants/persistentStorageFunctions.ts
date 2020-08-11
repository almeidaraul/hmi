import AsyncStorage from '@react-native-community/async-storage';

export const defaultIntervals = [...Array(12).keys()].map(
		k => { return { ci: "1", fs: "1" } }
	);

export async function saveIntervals(intervals) {
	try {
		const jsonValue = JSON.stringify(intervals);
		await AsyncStorage.setItem('@intervals', jsonValue);
	} catch (e) {
		console.log(e);
	}
}

export async function getIntervals() {
	let intervalsObject = defaultIntervals;
	try {
		intervalsObject = await AsyncStorage.getItem('@intervals');
		if (intervalsObject != null) return JSON.parse(intervalsObject);
		else {
			saveIntervals(defaultIntervals);
		}
	} catch(e) {
		console.log(e);
	}
	return intervalsObject;
}
