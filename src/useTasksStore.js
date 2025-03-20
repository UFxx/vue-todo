import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
	const todos = ref(
		localStorage.getItem('todos') === null
			? []
			: JSON.parse(localStorage.getItem('todos'))
	);

	function addTask(taskText) {
		if (taskText !== '') {
			todos.value.push({
				id: Date.now(),
				text: taskText,
				status: false
			});
		} else return;
	}

	function changeTaskStatus(id) {
		todos.value = todos.value.map((todo) => {
			if (todo.id === id) return { ...todo, status: !todo.status };
			else return { ...todo };
		});
	}

	function deleteTask(id) {
		todos.value = todos.value.filter((todo) => todo.id !== id);
	}

	function changeTaskName(id, newTaskName) {
		todos.value = todos.value.map((todo) => {
			if (todo.id === id) return { ...todo, text: newTaskName };
			else return { ...todo };
		});
	}

	watch(
		todos,
		(todos) => {
			// сохранять все состояние в local storage при каждом его изменении
			localStorage.setItem('todos', JSON.stringify(todos));
		},
		{ deep: true }
	);

	return { todos, addTask, changeTaskStatus, deleteTask, changeTaskName };
});
