<template>
        <div class="row">
            <div class="col-3 padding-0">
                <div class="border border-1" style="border:1px solid #000;height:100%;width:100%">
                    <MenuBar />
                </div>
            </div>
            <div class="col-9 padding-0">
                <Billing />
            </div>
        </div>
</template>


<script>
import MenuBar from './MenuBar.vue'
import Billing from './Billing.vue'

export default {
  name: 'Main',
  components: {
    MenuBar,
    Billing
  }
}
</script>

<style scoped>
  .padding-0{
    padding-right:0;
    padding-left:0;
}
</style>