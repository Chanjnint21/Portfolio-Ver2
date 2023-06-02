<template>
	<v-row class="infoBox">
		<v-col>
			<p v-html="details"></p>
		</v-col>
		<v-col v-bind="$attrs" v-on="$listeners" :class="ClassProps"><image-solo :max_-h="MaxHeight" :max_-w="MaxWidth"
				:img-src="ImgSource" /></v-col>
	<!-- <v-col cols="12" md="6" sm="6" xs="12"><img :src="require(`@/assets/Img/${ImgSource}`)"></v-col> -->
	</v-row>
</template>

<script>
export default {
	name: "InfoBoxRev",
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
