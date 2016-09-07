<template>
	<panel type="1" :list="list"></panel>
</template>

<script>
	import { Panel } from 'vux/src/components';

	export default {
		data(){
			return {
				list: [
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore aperiam quos, beatae commodi. Incidunt animi pariatur autem adipisci magnam reiciendis, voluptatum velit voluptatem beatae numquam ut dolore, dignissimos error eligendi.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					},
					{
						src: '/static/back_end.png',
						title: 'BackEnd',
						desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quaerat quo eius eveniet illum porro impedit fuga nesciunt tenetur asperiores dolor perspiciatis, distinctio ad praesentium minus sit reprehenderit repellat quod.'
					}
				]
			}
		},
		components: { Panel }
	}
</script>

<style>
	
</style>