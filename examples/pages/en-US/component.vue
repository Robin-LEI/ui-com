<template>
  <div>
    <div class="header">
      <img class="logo" :src="require('@examples/assets/images/logo.png')" alt="">
      <div class="language">
        <span @click="switchLang('zh-CN')" :class="{
          'active': lang === 'zh-CN'
        }">中文</span>
        <span @click="switchLang('en-US')" :class="{
          'active': lang === 'en-US'
        }">English</span>
      </div>
    </div>
    <side-nav :navsData="navsData"></side-nav>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import navsData from "../../nav.config.json";
  import '../../assets/css/bootstrap.min.css';
  import '../../assets/icon/iconfont.css';
  import 'highlight.js/styles/github-gist.css';

  export default {
    data(){
      return {
        navsData
      }
    },
    computed: {
			lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      }
		},
    methods: {
			switchLang(targetLang) {
        if (this.lang === targetLang) return;
        localStorage.setItem('ELEMENT_LANGUAGE', targetLang);
        this.$router.push(this.$route.path.replace(this.lang, targetLang));
      }
		}
  }
</script>
<style scoped lang='scss'>
  .main{
    padding:30px 0 0 220px;
  }

  .content{
    width:1000px;
    margin:30px auto;
    padding:0 30px;
    box-sizing: border-box;
  }

  .header{
    position: fixed;
    width:100%;
    height:70px;
    z-index: 2;
    top:0;
    left:0;
    background: #fff;
    border-bottom:1px #eee solid;
    box-shadow: 0px 2px 5px #eee;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 60px;
    padding-left:50px;
    display: flex;
    justify-content: space-between;
    padding-right: 170px;
    .logo {
      margin-top: 9px;
      height: 50px;
    }
    .language {
      span {
        cursor: pointer;
        &:first-child {
          margin-right: 20px;
        }
      }
      .active {
        color: #1989fa;
      }
    }
  }
</style>