<template>
  <v-row class="infoBox">
    <v-col cols="12" v-bind="$attrs" v-on="$listeners" :class="ClassProps"
      ><image-solo :max_-h="MaxHeight" :max_-w="MaxWidth" :img-src="ImgSource"
    /></v-col>
    <v-col cols="12" class="pb-0"
      ><p v-html="details"></p>
      <br
    /></v-col>
    <v-col class="pt-0">
      <a href="https://www.facebook.com/JnintChan21" target="_blank"><v-icon size="50" color="#ffffff" class="pr-6">mdi-facebook</v-icon></a>
      <a href="https://github.com/Chanjnint21" target="_blank"><v-icon size="50" color="#ffffff" class="pr-6">mdi-github</v-icon></a>
      <a href="https://www.linkedin.com/in/chanjnint-lim-b899ab204/" target="_blank"><v-icon size="50" color="#ffffff" class="pr-6">mdi-linkedin</v-icon></a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    ImgSource: {
      type: String,
    },
    details: {
      type: String,
    },
    MaxHeight: Number,
    MaxWidth: Number,
    ClassProps: String,
  },
};
</script>

<style>
.infoBox {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .image{
    display: flex;
    justify-content: center;
    align-items: center;
} */
</style>
