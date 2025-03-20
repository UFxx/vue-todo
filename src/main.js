import './assets/main.css';

import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

import TodoList from './components/TodoList.vue';
import CompletedList from './components/CompletedList.vue';

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: 'Index', path: '/', component: TodoList },
		{ name: 'Progress', path: '/progress', component: TodoList },
		{ name: 'Completed', path: '/completed', component: CompletedList }
	]
});

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
