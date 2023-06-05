<template>
  <div id="app">
    <v-app-bar class="navbar" dark>
        <v-col class="Logo" cols="6">
          <a href="/"><image-solo :max_-w="40" img-src="MyLogo.png"/></a>
        </v-col>
        <v-col class="routerLink" cols="6">
          <router-link to="/">Home </router-link>
          <router-link to="/portfolio" > Portfolio </router-link>
          <router-link to="/resume">Resume</router-link>
          <a @click="ChangeLang = !ChangeLang">{{ Lang }}</a>
        </v-col>
    </v-app-bar>
    <router-view :version="ChangeLang" />
  </div>
</template>

<script>

export default{
  data(){
    return{
      Lang: 'EN',
      ChangeLang: false
    }
  },
  watch:{
    ChangeLang(newVal){
      if(newVal ===true) return this.Lang = 'KH'
      return this.Lang = 'EN'
    }
  },
}
</script>