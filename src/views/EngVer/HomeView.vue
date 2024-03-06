<template>
  <v-main class="Home">
    <div>
      <v-col class="welcome" large cols="12">
        <main-title :titles="welcome" />
      </v-col>
      <v-col cols="12"
        ><a href="/portfolio"
          ><v-icon x-large>mdi-chevron-right-circle</v-icon></a
        ></v-col
      >
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    version:Boolean,
  },
  data(){
    return{
      welcome: 'Welcome to My Portfolio !!'
    }
  },
};
</script>

<style>
.Home {
  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome {
  font-size: 1.3rem;
  animation: move 3s infinite;
}

@keyframes move {
  20% {
    text-shadow: 5px 20px 30px rgb(0, 0, 0);
  }
}
</style>
