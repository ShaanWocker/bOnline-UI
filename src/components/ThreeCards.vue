<template>
<div class="billing">
    <div class="container">
            <div class="row">
                <div class="col mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{$store.state.user1.business_name}}</h5>
                            <p class="card-text">Account ID: {{$store.state.user1.account_id}}</p>
                            <a href="#" class="btn btn-success">Active</a>
                        </div>
                    </div>
                </div>   
                <div class="col  mb-3">
                    <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">Mobis Valium</h5>
                            <p class="card-text">Account ID: 200159</p>
                            <a href="#" class="btn btn-success">Active</a>
                        </div>
                    </div>
                </div>   
                <div class="col  mb-3">
                    <div class="card">
                        
                        <div class="card-body">
                            <h5 class="card-title">Jereme Hunt 3</h5>
                            <p class="card-text">Account ID: 200159</p>
                            <a href="#" class="btn btn-success">Active</a>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
</div>
    
</template>

<script>
export default {
    name: 'ThreeCards',
    
}

</script>


<style scoped >
 .billing {
        background-color: #eeeeef;
        height: auto;
    }
</style>