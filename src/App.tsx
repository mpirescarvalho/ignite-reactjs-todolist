import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import styles from './App.module.css';

import './global.css';

export function App() {
	return (
		<div>
			<Header />

			<main className={styles.main}>
				<TodoInput />
				<TodoList />
			</main>
		</div>
	);
}
