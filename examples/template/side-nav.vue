<template>
	<div class="side-nav">
		<ul class="nav-wrap">
			<li class="nav-item" v-for="(nav, i) in navsData[lang][1].groups" :key="i">
				<h4>{{nav.name}}</h4>
				<ul class="subnav-wrap">
					<li class="subnav-item" v-for="(subnav, j) in nav.list" :key="j">
						<router-link
							:to="'/zh-CN' + navsData[lang][0].path + subnav.path"
							exact
							v-text="subnav.title"
						></router-link>	
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props: {
			navsData: Object
		},
		computed: {
			lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      }
		},
    data() {
      return {
				navItems: []
			}
		}
	}
</script>
<style scoped>
.side-nav{
	position: fixed;
	width:220px;
	top:70px;
	bottom: 0;
	left:0;
	box-sizing: border-box;
	padding:50px;
	line-height: 1.8;
	border-right:1px #ddd solid;
}

.side-nav a{
	display: block;
	color: #666;
}

.nav-item h4{
	font-size: 20px;
	font-weight: bold;
}

.subnav-wrap{
	padding-left:30px;
	margin-bottom: 20px;
}
</style>