import { PlusCircle } from 'phosphor-react';

import styles from './TodoInput.module.css';

export function TodoInput() {
	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				placeholder="Adicione uma nova tarefa"
			/>
			<button className={styles.button}>
				Criar <PlusCircle size={16} weight="bold" />
			</button>
		</div>
	);
}
