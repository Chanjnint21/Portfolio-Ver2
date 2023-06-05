<template>
  <v-row class="infoBox">
    <v-col v-bind="$attrs" v-on="$listeners" :class="ClassProps"
      ><image-solo :max_-h="MaxHeight" :max_-w="MaxWidth" :img-src="ImgSource"
    /></v-col>
    <v-col
      ><p v-html="details"></p>
      <br
    /></v-col>
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
