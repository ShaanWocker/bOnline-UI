<template>
  <div class="border border-1" style="border-bottom:1px solid #000;height:100px;width:100%">
    <nav class="navbar navbar-expand-lg  ">
      <div class="container-fluid">
        <a class="navbar-brand logo-image" href="#" >
          <img  src="https://assets-global.website-files.com/608a9a94f3d2f96ef8bbe85a/60eec3dc9dc518c0c21d42c9_bOnline%20logo%20DARK.svg" alt="bOnline">
        </a>
        <div class="collapse navbar-collapse me-2" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <fa icon="bell" />
            </li>
          </ul>

          <form class="d-flex ">
            <div class="vl ms-5  mt-3">
            </div>
            <div class="dropdown ">
              <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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
  .logo-image{
    width: 150px;
    height: 50px;
    overflow: hidden;
    margin-left: 20px
}

 .vl {
  border-left: 0.1px solid #000;
  height: 50px;
}
</style>