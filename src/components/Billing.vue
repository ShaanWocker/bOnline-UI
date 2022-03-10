<template>
        <BillingHeader />
        <ThreeCards />
        <TwoCards />
        <Table />
       
</template>

<script>
import BillingHeader from './BillingHeader.vue'
import ThreeCards from './ThreeCards.vue'
import TwoCards from './TwoCards.vue'
import Table from './Table'

export default {
    name : 'Billing',
    components: {
        BillingHeader,
        ThreeCards,
        TwoCards,
        Table
    }
}
</script>

<style scoped>
   
</style>