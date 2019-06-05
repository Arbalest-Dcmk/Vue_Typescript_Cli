<template>
  <div>
   <h3>{{title}}</h3>
   <h3>{{myComputed}}</h3>
   <h3>{{myCount}}</h3>
   <button @click="doClick()">methods</button>
   <button @click="addToCount(1)">add</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator'
import { setImmediate } from 'timers'

@Component
export default class Hello extends Vue {
    // data
    title:string='this is tsvue page'

    // prop
    @Prop(String) readonly myProp!:string
    @Prop(Number) readonly myCount!:number

    // computed
    get myComputed () {
      return 'this is computed' + this.myProp
    }

    // watch
    @Watch('myCount', {
      immediate: true,
      deep: true
    })
    onCountChnaged (newVal:number, oldVal:number) {
      console.log(oldVal + ' -> ' + newVal)
    }

    // emit
    @Emit()
    addToCount (n:number) {
      return n
    }
    // methods
    doClick ():void{
      console.log('click')
    }

    // mounted
    mounted () {
      console.log('mounted!!!')
    }
}
</script>
<style lang="scss" scoped>
</style>
