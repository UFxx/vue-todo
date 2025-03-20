<template>
	<div class="todo-list__container">
		<TransitionGroup>
			<TodoItem
				v-for="todo in uncompletedTodos"
				:key="todo.id"
				:todo
				:completed="false"
				@changeTaskStatus="store.changeTaskStatus"
				@deleteTask="store.deleteTask"
				@changeTaskName="store.changeTaskName"
			/>
		</TransitionGroup>
	</div>
	<AddTask @addTask="store.addTask" />
</template>

<script setup>
import { computed, onMounted } from 'vue';

import { storeToRefs } from 'pinia';
import { useTasksStore } from '@/useTasksStore';

import TodoItem from './TodoItem.vue';
import AddTask from './AddTask.vue';

const store = useTasksStore();
const { todos } = storeToRefs(store);

const uncompletedTodos = computed(() => {
	return todos.value.filter((todo) => !todo.status);
});

onMounted(() => {
	if (localStorage.getItem('todos') === null) {
		localStorage.setItem('todos', JSON.stringify(store.todos));
	}
});
</script>

<style lang="scss" scoped>
.todo-list__container {
	padding: 20px;
	border-radius: 10px;
	background-color: rgba(128, 128, 128, 0.2);
}

.v-enter-active,
.v-leave-active {
	transition:
		0.3s ease opacity,
		0.3s ease transform;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
</style>
