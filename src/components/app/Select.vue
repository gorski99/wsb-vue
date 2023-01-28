<template>
	<div class="select-component">
		<div :class="['search', {active}]">
			<input class="search__bar" id="searchbar" type="search" placeholder=" " @focus="active = true" @blur="active = false" @keyup="$emit('filter-words', $event)" />
		</div>
		<div class="options-container">
			<div :class="['option', {selected: false}]" v-for="(option, index) in options" :key="index" @click="$emit('scroll-to', $event.target.id)">
				<input
					type="radio"
					class="radio"
					:id="index"
				/>
				<label class="label" :for="index">
					{{option.workplace}}
				</label>
				<img class="flag" :src="''" :alt="''">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Select",
		props: {
			options: Array
		},
		data() {
			return {
				active: false,
				flags: {}
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.select-component {
		position: sticky;
		top: 20px;
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		font-weight: bold;
		letter-spacing: 1px;
		z-index: 2;
		.search {
			width: 100%;
			max-width: 1000px;
			z-index: 2;
			&::before,
			&::after {
				font-family: "Font Awesome 5 Free";
				position: absolute;
				top: 50%;
				font-size: 20px;
				transform: translateY(-50%);
				transition: all 0.4s ease;
				background-color: $bg;
				padding: 0 10px;
				border-radius: 10px;
			}
			&::before {
				content: '\f002';
				left: 20px;
			}
			&::after {
				content: '\f107';
				right: 20px;
			}
			.search__bar {
				width: 100%;
				padding: 7px 14px;
				font-size: 18px;
				border: 3px solid $primary;
				border-radius: 30px;
				outline: none;
				font-family: 'Baloo 2', sans-serif;
				color: $primary;
			}
		}
		.active {
				&::before {
					top: 0;
					transform: scale(0.7) translateY(-50%);
				}
				&::after {
					transform: translateY(-50%) rotate(180deg);
				}
				& ~ .options-container {
					max-height: 500px;
					opacity: 1;
					overflow-y: scroll;
					&::-webkit-scrollbar{
						width: 0px;
					}
				}
		}
		.options-container {
			position: absolute;
			top: 55px;
			left: 0;
			width: 100%;
			max-height: 0px;
			opacity: 0;
			background-color: $secondary;
			transition: all 0.4s ease;
			border-radius: 10px;
			overflow: hidden;
			.option {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 20px;
				transition: all 0.2s ease;
				cursor: pointer;
				&:hover {
					background-color: $bg;
				}
				.label {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					cursor: pointer;
				}
				.radio {
					display: none;
				}
			}
			.selected {
				background-color: var(--lang-selected);
			}
		}
		.flag {
			width: 20px;
			height: 20px;
		}
	}
</style>