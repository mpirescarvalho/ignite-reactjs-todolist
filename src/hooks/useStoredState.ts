import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useStoredState<T>(
	storeKey: string,
	initialState: T
): [T, Dispatch<SetStateAction<T>>] {
	const [state, setState] = useState<T>(() => {
		const storedState = localStorage.getItem(storeKey);
		if (storedState) {
			return JSON.parse(storedState) as T;
		} else {
			return initialState;
		}
	});

	useEffect(() => {
		localStorage.setItem(storeKey, JSON.stringify(state));
	}, [state]);

	return [state, setState];
}
