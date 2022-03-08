<template>
        <div class="row">
            <div class="col-4">
                <div class="border border-1" style="border:0.1px solid #000;height:500px">
                    <MenuBar />
                </div>
            </div>
            <div class="col-6">
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