import { FormEvent } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './TaskInput.module.css';

interface TaskInputProps {
	text: string;
	onTextChange: (text: string) => void;
	onSubmitTask: () => void;
}

export function TaskInput({
	text,
	onTextChange,
	onSubmitTask,
}: TaskInputProps) {
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		onSubmitTask();
	}

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type="text"
				placeholder="Adicione uma nova tarefa"
				value={text}
				onChange={(e) => onTextChange(e.target.value)}
			/>
			<button className={styles.button}>
				Criar <PlusCircle size={16} weight="bold" />
			</button>
		</form>
	);
}
