<template>
  <div class="header">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-light p-4">
          <a class="navbar-brand" href="#">
            <img src="@/assets/logoCRM.gif" width="30" height="30" class="d-inline-block" alt="">
              <span class="ml-3 text-logo">Ebalkin</span><span>ppppppp</span>
              <p>TEST TEST TEST</p>
              <button v-on:click="getInfoPorn"> Ckick get </button>
          </a>
          <div v-on:click="$emit('show-menu', show)" class="navbar-button text-center p-2">
            <i class="fas fa-align-justify"></i>

          </div>

        </nav>
        <input v-model="user.city.country"></input>
        <p>{{ user.city.country }}</p>

      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'HeaderNavBar',
  data() {
      return {
        show: true,
        data: null,
        user: {
          city: {
            country: ""
          }
        }
      }
  },

  methods: {
    getInfoPorn: function () {

      // const pornhub = require('pornnhub');

      // const url = 'https://www.pornhub.com/view_video.php?viewkey=ph56fc59c124c0c';
      //
      //  pornhub(url, 'views').then(res => {
      //     console.log(res);
      //
      //  })

    }
  },
  watch: {
    user: {
      handler(newValue) {
        console.log( newValue );
      },
      deep: true
    }
  }


}

</script>


<style scoped>
.row {
  background: rgb(213, 96, 1);
}
.text-logo {
  font-size: 21px;
  color: #fff;
}
.navbar-button i {
  font-size: 25px;
}
.navbar-button {
  width: 50px;
  display: none;
  border-radius: 4px;

}
@media (max-width: 768px) {
  .navbar-button {
    display: block;
  }
}



</style>
