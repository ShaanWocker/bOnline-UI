<template>
    <div class="container two-cards-bg">
             <div class="row mt-0">
                 <div class="col mt-3 mb-3 ml-4 mr-3">
                     <div class="card " style="width: 130%;">
                        <div class="card-header" >
                            <h5>Payment Details </h5>
                             <p class="card-text">View details of your next invoice and payment method</p>
                        </div>
                        <div class="card-body row ">
                            <p class="card-title ">Next Invoice: {{$store.state.user1.next_invoice_date}}</p>
                            <div class="card " style="width: 18rem;">
                            <div class="card-body">
                                <p class="card-title">Current balance</p>
                                <h1 class="card-subtitle mb-2 text-muted">R{{$store.state.user1.balance}}</h1>
                                 <p class="card-subtitle mb-2 text-muted"><fa icon="lock" class="lock-icon" />This is a secure 256-bit SSL encrypted payment. You're safe.</p>
                            <a href="#" class="btn btn-primary">Pay Now</a>
                            </div>
                            </div>
                            <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <p class="card-title">Payment method Annual</p>
                                <p class="card-subtitle mb-2 text-muted">Guide: To manage your more easily, we recomend switching to Direct Debit.</p>
                                
                            <a href="#" class="btn btn-primary">Switch to Direct Debit</a>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mt-3 mb-3 ml-3">
                    <div class="card" style="width: 350px; align-items: center;float: right;">
                        <div class="card-header">
                            <h5 >My Products</h5>
                            <p class="card-text">All your products at a glance</p>
                        </div>
                    <div class="card-body">
                            <p><fa icon="phone" class="icon" />VoIP - 902903445</p>
                            <hr>
                            <p> <fa icon="star" class="icon" />Fibre - SW29BE</p>
                            <hr>
                            <p><fa icon="tv" class="icon"/>Website - www.website.com</p>
                            <hr> 
                    </div>
                    </div>
                </div>
           </div> 
         </div>
</template>

<script>
export default {
    name: 'TwoCards'
}
</script>

<style scoped>
.card-header {
    background-color: #ffffff
}
.icon{
    margin-right: 25px;
    margin-left: 20px;
}
.lock-icon{
    margin-right: 10px;
    margin-left: 5px;
}
.two-cards-bg{
    background-color: #eeeeef;
}
</style>