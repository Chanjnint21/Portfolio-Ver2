<template>
  <div id="app">
    <v-app-bar class="navbar" dark>
        <v-col class="Logo" cols="6">
          <a href="/"><image-solo max_-w="40" img-src="MyLogo.png"/></a>
        </v-col>
        <v-col class="routerLink" cols="6">
          <router-link to="/">Home </router-link>
          <router-link to="/portfolio"> Portfolio </router-link>
          <router-link to="/resume">Resume</router-link>
        </v-col>
    </v-app-bar>
    <router-view />
  </div>
</template>
