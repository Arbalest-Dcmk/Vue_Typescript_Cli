<template>
  <div>
   <Hello
   :myProp="propTitle"
   :myCount="count"
   @add-to-count="doAdd"
   />
  </div>
</template>

<script lang="ts">
import Hello from '@/components/Hello.vue'
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({
  components: {
    Hello
  }
})

export default class Tsvue extends Vue {
    count:number=0
    propTitle:string='childProp'

    doAdd (n:number):void{
      this.count += n
    }
}
</script>
<style lang="scss" scoped>
</style>
