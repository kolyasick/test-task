<script setup>
import Slider from "@/components/slider.vue";
import { computed, ref } from "vue"

const cities = ref([
	{
		name: "Санкт-Петербург",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Москва",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Мурманск",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Севастополь",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Архангельск",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Баку",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Курск",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Омск",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Курган",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
	{
		name: "Астрахань",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptate blanditiis accusantium amet obcaecati sequi, nulla quas beatae consequuntur, natus expedita, sunt ea doloremque possimus suscipit porro eum tempora odio. Velit praesentium voluptate libero sint cumque architecto, animi provident saepe omnis reiciendis ratione itaque commodi accusantium beatae facilis, minus, voluptatum quod optio blanditiis deleniti et? Dignissimos officia nulla quaerat aliquid accusantium aperiam, delectus ipsam minima quod quam aut ea assumenda inventore eos commodi explicabo earum deleniti harum sunt rerum sed dolore omnis molestias nesciunt? Ex eveniet delectus dolore, eaque, nisi corrupti praesentium itaque repellendus, sapiente aperiam dolores autem velit dicta?",
	},
])

const selectedCity = ref("")
console.log(selectedCity.value)

const cityDescription = computed(() => {
	const city = cities.value.find((c) => c.name === selectedCity.value)
	return city && city.description ? city.description : "Описание отсутствует"
})
</script>

<template>
	<main>
		<div class="city-select">
			<select v-model="selectedCity">
				<option value="">Введите город</option>
				<option v-for="city in cities" :key="city.name" :value="city.name">
					{{ city.name }}
				</option>
			</select>
		</div>
		<div class="city-info-wrapper">
			<div class="city-info" v-if="selectedCity">
				<h1>{{ selectedCity }}</h1>
				<p>
					{{ cityDescription }}
				</p>
			</div>
			<span v-else>Город не выбран</span>
		</div>
		<Slider/>
	</main>
</template>

<style scoped>
.city-select {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 60px 0px 90px 0px;
}

.city-select > select {
	border: 1px solid black;
	border-radius: 8px;
	padding: 12px 16px;
	width: 230px;
	appearance: none;
	-webkit-appearance: none;
	background: white url("/Vector.svg") no-repeat right 16px center;
}

.city-info-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.city-info > h1 {
	font-size: 24px;
	font-weight: 700;
	text-align: center;
}

.city-info > p {
	max-width: 600px;
	margin-top: 32px;
}
</style>
