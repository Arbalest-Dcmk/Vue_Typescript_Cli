<template>
<div>
    <h3>{{title}}</h3>
    <router-link to="/ts">go ts page</router-link>
</div>
</template>
<script lang="ts" >
import { Vue, Component } from 'vue-property-decorator'

@Component

export default class Home extends Vue {
    title:string='typescript vue'
}

</script>

<style lang="scss" scoped>
.title{
    color:red;
}
</style>
