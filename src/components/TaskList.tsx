import styles from './TaskList.module.css';

const tasks = [
	{
		id: 6,
		text:
			'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
		isDone: false,
	},
	{
		id: 1,
		text: 'Learn React',
		isDone: false,
	},
	{
		id: 2,
		text: 'Build a Todo app',
		isDone: true,
	},
	{
		id: 3,
		text: 'Deploy to Github Pages',
		isDone: false,
	},
	{
		id: 4,
		text: 'Create a pull request',
		isDone: false,
	},
	{
		id: 5,
		text: 'Create tasks',
		isDone: true,
	},
];

import clipboardImg from '../assets/clipboard.png';

import { Task } from './Task';

export function TaskList() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.allTasks}>
					Tarefas criadas<span>5</span>
				</p>
				<p className={styles.finishedTasks}>
					Concluídas<span>2 de 5</span>
				</p>
			</div>

			{tasks.length > 0 ? (
				<div className={styles.taskList}>
					{tasks.map((task) => (
						<Task key={task.id} task={task} />
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
