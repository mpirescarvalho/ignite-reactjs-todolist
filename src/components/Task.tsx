import { Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
	task: {
		id: string;
		text: string;
		isDone: boolean;
	};
	onCheckClick: () => void;
	onDeleteClick: () => void;
}

export function Task({ task, onCheckClick, onDeleteClick }: TaskProps) {
	return (
		<div className={`${styles.task} ${task.isDone ? styles.taskDone : ''}`}>
			<div className={styles.checkbox} tabIndex={0} onClick={onCheckClick}>
				<span />
			</div>
			<p>{task.text}</p>
			<button type="button" onClick={onDeleteClick}>
				<Trash size={14} weight="bold" />
			</button>
		</div>
	);
}
