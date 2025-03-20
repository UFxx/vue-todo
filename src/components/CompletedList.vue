<template>
	<div class="todo-list__container">
		<TransitionGroup>
			<TodoItem
				v-for="todo in completedTodos"
				:key="todo.id"
				:todo
				:disabled="true"
				:completed="true"
				@changeTaskStatus="store.changeTaskStatus"
			/>
		</TransitionGroup>
	</div>
</template>

<script setup>
import { computed } from 'vue';

import { useTasksStore } from '@/useTasksStore';
import { storeToRefs } from 'pinia';

import TodoItem from './TodoItem.vue';

const store = useTasksStore();
const { todos } = storeToRefs(store);

const completedTodos = computed(() => {
	return todos.value.filter((todo) => todo.status);
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
	transform: translateX(-20px);
}
</style>
