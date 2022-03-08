<template>
  <div class="border border-1" style="border-bottom:0.1px solid #000;height:100px">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
         <a class="navbar-brand" href="#" >{{title}}</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <fa icon="bell" />
        </li>
      </ul>
      <form class="d-flex ">
        <div class="dropdown">
          <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <h5>Jane Windie</h5>
              <a href="mailto:webmaster@example.com">janewindei@bonline.co.za</a>
          </a>
        </div>
      </form>
    </div>
     
      </div>
    </nav>
   
    </div>
  
</template>

<script>



  export default {
    
    name: 'Header',
    props : {
      title: String,
    },
  }
  
</script>

<style scoped>

</style>