import { Task } from './Task';
import clipboardImg from '../assets/clipboard.png';
import styles from './TaskList.module.css';

interface TaskListProps {
	tasks: Array<{
		id: string;
		text: string;
		isDone: boolean;
	}>;
	onToggleTaskDone: (taskId: string) => void;
	onDeleteTask: (taskId: string) => void;
}

export function TaskList({
	tasks,
	onToggleTaskDone,
	onDeleteTask,
}: TaskListProps) {
	const allTasksCount = tasks.length;
	const completedTasksCount = tasks.reduce((acc, task) => {
		if (task.isDone) {
			return acc + 1;
		}

		return acc;
	}, 0);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.allTasks}>
					Tarefas criadas<span>{allTasksCount}</span>
				</p>
				<p className={styles.finishedTasks}>
					Concluídas
					<span>
						{completedTasksCount} de {allTasksCount}
					</span>
				</p>
			</div>

			{tasks.length > 0 ? (
				<div className={styles.taskList}>
					{tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onCheckClick={() => onToggleTaskDone(task.id)}
							onDeleteClick={() => onDeleteTask(task.id)}
						/>
					))}
				</div>
			) : (
				<div className={styles.tasksEmpty}>
					<img src={clipboardImg} alt="prancheta" />
					<p>
						<strong>Você ainda não tem tarefas cadastradas</strong>Crie tarefas e
						organize seus itens a fazer
					</p>
				</div>
			)}
		</div>
	);
}
