<template>
  <div class="container-fluid">
     <div class="container-wrapper">
       <div class="container-wrapper-header">
         <header>
            <HeaderNavBar
              v-on:show-menu="showMenu"
            ></HeaderNavBar>
         </header>
       </div>

       <div class="content-wrapper">
         <div class="contant">
           <div class="row">
             <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4">
               <LeftMenu v-bind:display="isActive"></LeftMenu>
             </div>

             <div class="col-xl-8 col-lg-7 col-md-6 col-sm-12 pl-0 offset-lg-1 offset-md-1 offset-sm-0">
               <Home>SSSSSSSSSSSSSS</Home>
             </div>
           </div>

         </div>
       </div>

       <div class="content-wrapper-footer">
         <footer>
           <Footer></Footer>
         </footer>
       </div>

     </div>
  </div>
</template>


<script>
  import "bootstrap/js/dist/util";
  import HeaderNavBar from "@/components/Header/HeaderNavBar";
  import LeftMenu from "@/components/Menu/LeftMenu";
  import Home from "@/views/Home.vue";
  import Footer from "@/components/Footer/Footer.vue";

  import { mapActions } from "vuex";

  export default {
    name: 'App',
    data() {
      return {
        isActive: false,
      //  display: [{isActive: this.isActive}]

      }
    },
    methods: {
      ...mapActions(["test"]),

      showMenu(value) {
        this.isActive = value;

      //  alert(this.isActive);
      }
    },
    async mounted() {

      this.test();

    },
    components: {
      HeaderNavBar,
      LeftMenu,
      Home,
      Footer
    }
  }
</script>



<style scoped>
 @import "css/app.css";



</style>
