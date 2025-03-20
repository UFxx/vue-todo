<template>
	<div class="add-task">
		<input
			@keydown.enter="addTask"
			type="text"
			placeholder="Название задачи"
			v-model="taskText"
		/>
		<button @click="addTask">Добавить задачу</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['addTask']);
let taskText = ref('');

function addTask() {
	emit('addTask', taskText.value);
	taskText.value = '';
}
</script>

<style lang="scss" scoped>
.add-task {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;

	input {
		padding: 5px 10px;
		background-color: transparent;
		border: 2px solid gray;
		border-radius: 5px;
	}

	button {
		padding: 5px 10px;
		border: 2px solid white;

		&:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}
}
</style>
