<template>
 <div class="menu" v-bind:class="{show: display}">
   <div class="menu-wrapper">
     <div slot="sider">
       <fish-menu mode="inline">
         <fish-option index="0" content="Content"></fish-option>
         <fish-submenu index="1" mode="inline">
           <template slot="title">User</template>
           <fish-option index="1-0" content="Jack"></fish-option>
           <fish-option index="1-1" content="Lucy"></fish-option>
           <fish-option index="1-2" content="Active"></fish-option>
         </fish-submenu>
         <fish-option index="2" content="Tongji"></fish-option>
         <fish-submenu index="3" mode="inline">
           <template slot="title">submenu</template>
           <fish-option index="3-0" content="Jack"></fish-option>
           <fish-option index="3-1" content="Lucy"></fish-option>
           <fish-option index="3-2" content="Active"></fish-option>
           <fish-submenu index="3-3" mode="inline">
             <template slot="title">submenu-3</template>
             <fish-option index="3-3-0" content="Jack"></fish-option>
             <fish-option index="3-3-1" content="Lucy"></fish-option>
             <fish-option index="3-3-2" content="Active"></fish-option>
           </fish-submenu>
         </fish-submenu>
       </fish-menu>
     </div>
   </div>

  {{ display }}

 </div>

</template>


<script>
export default {
  name: 'LeftMenu',
  data () {
    return {

    }
  },
  props: ['display']

}

</script>


<style scoped>

@media (max-width: 768px) {
  .menu {
    display: none;
  }

}

.show {
  display: block;
}




</style>
