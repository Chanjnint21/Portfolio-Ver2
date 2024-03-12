<!-- <template>
  <div id="app">
    <v-app-bar class="navbar" dark>
        <v-col class="Logo" cols="6">
          <a href="/"><image-solo :max_-w="40" img-src="MyLogo.png"/></a>
        </v-col>
        <v-col class="routerLink" cols="6">
          <router-link :to="`/En/home`">Home </router-link>
          <router-link :to="`/En/portfolio`" > Portfolio </router-link>
          <router-link :to="`/En/resume`">Resume</router-link>
          <a >EN</a>
        </v-col>
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script> -->

<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
    <v-row>
      <v-col class="d-flex justify-center">
        <a href="/"><image-solo :max_-w="200" img-src="MyLogo.png"/></a>
      </v-col>
      <v-col cols="12">
        <router-link :to="`/En/home`" style="color: #ffffff; text-decoration: none;">Home </router-link>
      </v-col>
      <v-col cols="12">
        <router-link :to="`/En/portfolio`" style="color: #ffffff; text-decoration: none;"> Portfolio </router-link>
      </v-col>
      <v-col cols="12">
        <router-link :to="`/En/resume`" style="color: #ffffff; text-decoration: none;">Resume</router-link>
      </v-col>
    </v-row>
    </v-navigation-drawer>

    <v-app-bar class="navbar" dark app>
      <v-col class="Logo" cols="6">
          <a href="/"><image-solo :max_-w="40" img-src="MyLogo.png"/></a>
      </v-col>
      <v-col v-if="!SmallScreen" class="routerLink" cols="6">
          <router-link :to="`/En/home`" style="color: #ffffff;">Home </router-link>
          <router-link :to="`/En/portfolio`" style="color: #ffffff;"> Portfolio </router-link>
          <router-link :to="`/En/resume`" style="color: #ffffff;">Resume</router-link>
          <a style="color: #ffffff;" >EN</a>
        </v-col>
        <v-spacer></v-spacer>
      <v-app-bar-nav-icon v-if="SmallScreen" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="appBody">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
        drawer: false,
        SmallScreen: false 
      }),
      watch: {
    '$vuetify.breakpoint.width' (newVal) {
      if (newVal < 720) {
        this.SmallScreen = true
      } else {
        this.SmallScreen = false
      }
    }
  }
  };
</script>