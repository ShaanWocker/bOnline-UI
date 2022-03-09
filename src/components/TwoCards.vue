<template>
    <div class="container two-cards-bg">
             <div class="row mt-3 mb-3">
                 <div class="col mt-3 mb-3 ml-4 mr-3">
                     <div class="card" style="width: 100%;">
                        <div class="card-header" >
                            <h5>Payment Details </h5>
                             <p class="card-text">View details of your next invoice and payment method</p>
                        </div>
                        <div class="card-body row ">
                            <p class="card-title ">Next Invoice: 10 Feb 2022</p>
                            <div class="card " style="width: 18rem;">
                            <div class="card-body">
                                <p class="card-title">Current balance</p>
                                <h1 class="card-subtitle mb-2 text-muted">R59</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                            <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col mt-3 mb-3 ml-3">
                    <div class="card" style="width: 80%;">
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
.two-cards-bg{
    background-color: #eeeeef;
}
</style>