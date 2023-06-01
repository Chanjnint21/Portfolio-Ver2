<template>
  <v-img v-bind="$attrs" v-on="$listeners" :max-height="Max_W" :max-width="Max_H" :src="require(`@/assets/Img/${imgSrc}`)" ></v-img>
</template>

<script>
export default{
  name: 'ImageSolo',
  props:{
    Max_W: Number,
    Max_H: Number,
    imgSrc: String
  }
}
</script>