import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
	task: {
		id: number;
		text: string;
		isDone: boolean;
	};
}

export function Task({ task }: TaskProps) {
	return (
		<div className={`${styles.task} ${task.isDone ? styles.taskDone : ''}`}>
			<div className={styles.checkbox} tabIndex={0}>
				<span />
			</div>
			<p>{task.text}</p>
			<button type="button">
				<Trash size={14} weight="bold" />
			</button>
		</div>
	);
}
