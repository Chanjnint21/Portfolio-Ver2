<template>
  <div id="app">
    <v-app-bar class="navbar" dark>
        <v-col class="Logo" cols="6">
          <a href="/"><image-solo :max_-w="40" img-src="MyLogo.png"/></a>
        </v-col>
        <v-col class="routerLink" cols="6">
          <router-link :to="`/${Lang}/home`">Home </router-link>
          <router-link :to="`/${Lang}/portfolio`" > Portfolio </router-link>
          <router-link :to="`/${Lang}/resume`">Resume</router-link>
          <a @click="ChangeLang = !ChangeLang, onChangeLang">{{ Lang }}</a>
        </v-col>
    </v-app-bar>
    <router-view :version="ChangeLang" />
  </div>
</template>

<script>

export default{
  data(){
    return{
      Lang: '',
      ChangeLang: false
    }
  },
  // watch:{
  //   ChangeLang(newVal){
  //     if(newVal ===true) {
  //       localStorage.setItem('lang', 'KH')
  //       this.Lang = 'KH'
  //       this.$router.go()
  //     }
  //     localStorage.setItem('lang', 'EN')
  //     this.Lang = 'EN'
  //     this.$router.go()
  //   }
  // },
  // methods: {
  //   onChangeLang() {
  //     this.ChangeLang = !this.ChangeLang
  //     // const fullPath = this.$route.path;
  //     // const CurrPath = fullPath.substring(4);
  //     // console.log(desiredPath)
  //     this.$router.go()
  //   }
  // },
  mounted() {
    const lang = localStorage.getItem("lang")
    // if (lang === this.Lang) return
    if (lang !== null) {
      this.Lang = lang
    }
  }
}
</script>