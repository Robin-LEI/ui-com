<template>
	<div class="side-nav">
		<ul class="nav-wrap">
			<li class="nav-item" v-for="(nav, i) in navsData[lang]" :key="i">
				<span class="title" v-if="nav.name && !nav.href">{{nav.name}}</span>
        <a class="title" target="_blank" :href="nav.href" v-if="nav.href && !nav.path">{{ nav.name }}</a>
				<div v-if="nav.groups">
          <ul class="subnav-wrap" v-for="(subnav, j) in nav.groups" :key="j">
            <span class="subtitle">{{ subnav.name }}</span>
            <li class="subnav-item" v-for="(item, index) in subnav.list" :key="index">
              <router-link
                :to="`/${lang}` + '/component' + item.path"
                exact
                v-text="item.title"
              ></router-link>	
            </li>
          </ul>
        </div>
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
    },
    created() {
      console.log(this.navsData[this.lang])
    }
	}
</script>
<style scoped lang='scss'>
.side-nav{
	position: fixed;
	width:240px;
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
.side-nav {
  .nav-wrap {
    .title {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: .15s ease-out;
      font-weight: 700;
    }
    .subtitle {
      font-size: 12px;
      color: #999;
      line-height: 26px;
      margin-top: 15px;
    }
    .subnav-item {
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
      }
    }
  }
}
</style>