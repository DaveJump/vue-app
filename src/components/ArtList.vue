<template>
	<section class="artlist">
		<ul>
			<li v-for="art in list">
				<a v-link="{name: 'article',params: {id: art.id}}">
					<div class="art-img">
						<img :src="art.author.avatar_url" :alt="art.author.loginname">
					</div>
					<span class="art-info">
						<h4>{{art.title}}</h4>
						<small>{{art.reply_count}}/{{art.visit_count}}</small>&nbsp;&nbsp;
          	<small>{{art.create_at | getDateTime art.create_at}}</small>
					</span>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
	import { getters } from 'my-vuex/getters';

	export default {
		vuex: {
			getters: {
				list: getters.getArtList
			}
		},
		filters: {
			getDateTime(date){
				return new Date(date).toLocaleString();
			}
		}
	}
</script>

<style lang="scss">
	.artlist{
		margin-top: 5px;
		padding-left: 15px;
		a{
			&:after{
				content: '';
				display: block;
				clear: both;
			}
		}
		li{
			padding: 5px 0;
			border-bottom: 1px solid #ddd;
			h4{
				color: #333;
				font: {
					size: 14px;
				}
			}
			a{
				display: block;
				color: #666;
			}
		}
		.art-img{
			float: left;
			width: 15%;
			height: 54px;
			display: block;
			text-align: center;
			padding: 5px;
			img{
				width: 90%;
			}
		}
		.art-info{
			width: 75%;
			float: left;
			word-break: break-all;
		}
	}
</style>