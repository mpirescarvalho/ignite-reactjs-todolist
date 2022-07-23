import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

import { useStoredState } from './hooks/useStoredState';

import styles from './App.module.css';

import './global.css';

interface Task {
	id: string;
	text: string;
	isDone: boolean;
}

export function App() {
	const [newTaskText, setNewTaskText] = useState('');
	const [tasks, setTasks] = useStoredState<Task[]>('@todo-list/tasks', []);

	function handleSubmitTask() {
		setTasks((prevTasks) => {
			return [
				{
					id: uuidv4(),
					text: newTaskText,
					isDone: false,
				},
				...prevTasks,
			];
		});
		setNewTaskText('');
	}

	function handleToggleTaskDone(taskId: string) {
		setTasks((prevTasks) => {
			return prevTasks.map((task) => {
				if (task.id === taskId) {
					return {
						...task,
						isDone: !task.isDone,
					};
				}

				return task;
			});
		});
	}

	function handleDeleteTask(taskId: string) {
		setTasks((prevTasks) => {
			return prevTasks.filter((task) => task.id !== taskId);
		});
	}

	return (
		<div>
			<Header />

			<main className={styles.main}>
				<TaskInput
					text={newTaskText}
					onTextChange={setNewTaskText}
					onSubmitTask={handleSubmitTask}
				/>

				<TaskList
					tasks={tasks}
					onToggleTaskDone={handleToggleTaskDone}
					onDeleteTask={handleDeleteTask}
				/>
			</main>
		</div>
	);
}
