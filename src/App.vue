<template>
  <div id="app">
    <v-app-bar class="navbar" dark>
        <v-col class="logo" cols="6">
          <a href="/"><h1>Logo</h1></a>
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
