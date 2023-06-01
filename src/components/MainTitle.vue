<template>
    <h1 v-bind="$attrs" v-on="$listeners" v-html="titles"></h1>
</template>

<script>
export default{
    name: 'MainTitle',
    props:{
        titles:{
            type: String
        },
    }
}
</script>