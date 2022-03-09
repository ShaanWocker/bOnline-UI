<template>
    <div class="container text-left menu-bar">
        <div class="row p-3 ">
        <button type="button" class="btn btn-outline-custom btn-lg ">
           <span  class="m-4">
               <fa icon="home" class="icons" />
            </span>
            <span  class="text m-2">Home</span>
               
        </button>
        <button type="button" class="btn btn-outline-custom btn-lg ">
          <span  class="m-4 ">
            <fa icon="dollar" class="icons"  />
            </span>
                <span  class="text m-2">Billing</span>
            </button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.menu-bar {
    width: 100%;
    text-align: left;
    align-items: center;
    justify-content: center;
}
.btn-outline-custom {
    border: none !important;
    color: #394455;
    text-align: left;
    align-items: center;
    justify-content: center;
    
    
}

.icons{
    text-align: left;
    align-items: center;
    justify-content: center;
}


.btn-outline-custom:hover {
    background-color: #1F8CEB;
    color: #ffffff
}
.text{
    text-align: left;
    align-items: center;
    justify-content: center;
}
</style>