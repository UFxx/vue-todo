<template>
	<header>
		<nav>
			<ul>
				<li><RouterLink to="/">В процессе</RouterLink></li>
				<li><RouterLink to="/completed">Выполненные</RouterLink></li>
			</ul>
		</nav>
	</header>
	<main>
		<RouterView />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
	nav {
		ul {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 10px;
			li {
				list-style: none;
				a {
					text-decoration: none;
					color: black;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>
