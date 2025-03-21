<template>
	<div class="todo">
		<div class="todo__text-container">
			<input
				class="todo__text"
				type="text"
				placeholder="Введите название задачи"
				:value="todo.text"
				@input="$emit('changeTaskName', todo.id, $event.target.value)"
				:disabled
			/>
			<p class="todo__status" :class="getTaskStatusClass">
				{{ getTaskStatus }}
			</p>
		</div>
		<div v-if="!completed" class="todo__buttons-container">
			<button @click="$emit('changeTaskStatus', todo.id)">
				<img src="/images/check.png" alt="" />
			</button>
			<button @click="$emit('deleteTask', todo.id)">
				<img src="/images/trash.png" alt="" />
			</button>
		</div>
		<div v-else class="todo__buttons-container">
			<button @click="$emit('changeTaskStatus', todo.id)">
				<img src="/images/return.png" alt="" />
			</button>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps(['todo', 'completed', 'disabled']);
defineEmits(['changeTaskStatus', 'deleteTask', 'changeTaskName']);

const getTaskStatus = computed(() => {
	return props.todo.status ? 'Готово' : 'Не готово';
});

const getTaskStatusClass = computed(() => {
	return props.todo.status
		? 'todo__status--completed'
		: 'todo__status--in-progress';
});
</script>

<style lang="scss" scoped>
.todo {
	display: flex;

	.todo__text-container {
		display: flex;
		column-gap: 10px;
		width: 300px;
		align-items: center;

		.todo__text {
			background-color: transparent;
			border: 2px solid rgba(128, 128, 128, 0.1);
			padding: 5px 10px;
			border-radius: 5px;

			&:focus {
				border: 2px solid gray;
			}
		}

		.todo__status {
			padding: 5px 10px;
			border-radius: 5px;
			font-size: 14px;

			&--completed {
				border: 2px solid green;
			}

			&--in-progress {
				border: 2px solid orange;
			}
		}
	}

	.todo__buttons-container {
		display: flex;
		column-gap: 10px;

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px;
			opacity: 0.5;
			transition: 0.3s ease opacity;

			&:hover {
				opacity: 1;
				background-color: rgba(0, 0, 0, 0.1);
			}

			img {
				width: 16px;
				height: 16px;
			}
		}
	}
}
</style>
