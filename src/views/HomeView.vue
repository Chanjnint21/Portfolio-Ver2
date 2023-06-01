<template>
  <v-main class="Home">
    <!-- <v-col><img alt="Home logo" src="../assets/hill.jpg"></v-col> -->
    <div>
      <v-col class="welcome" large cols="12">
        <main-title titles="Welcome to My Portfolio !!"/>
      </v-col>
      <v-col cols="12"><a href="/portfolio"><v-icon x-large>mdi-chevron-right-circle</v-icon></a></v-col>
    </div>
  </v-main>
</template>

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


