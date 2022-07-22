import './global.css';

import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';

export function App() {
	return (
		<div>
			<Header />
			<TodoInput />
		</div>
	);
}
