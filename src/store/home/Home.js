
export default {
  state: {

    const: []

  },
  actions: {

    // getInfo: function() {
    //
    //   const pornhub = require('pornnhub');
    //
    //   const url = 'https://www.pornhub.com/view_video.php?viewkey=ph56fc59c124c0c';
    //
    //   pornhub(url, 'views').then(res => {
    //    console.log(res);
    //    // => { data: '615,031' }
    //    });
    //
    //
    // },

    // dron() {
    //   console.log("test test test");
    // }

    //   info() {
    //   var data = fetch(
    //       "http://api.openweathermap.org/data/2.5/weather?q=Odessa&appid=cdadd613c8d4235e8a72fca5c38c7009"
    //   )
    //
    //   var video = data.json();
    //
    //   console.log( video );
    //
    // }

      async test() {

          let key = "cdadd613c8d4235e8a72fca5c38c7009";
          let cities = ["Kiev", "Odessa", "Lviv", "Kharkiv"];
          let data_city;
          let city;
          let arr_roma = [];

          for (var i = 0; i < cities.length; i++) {
              data_city = await fetch(
                  "http://api.openweathermap.org/data/2.5/weather?q=" + cities[i] + "&appid=" + key
              )

              city = await data_city.json();

              arr_roma.push(city);

              console.log( i );
          }

          console.log("from action88888777777");
          console.log( arr_roma );

      }

  },
  mutations: {


  },
  modules: {
  }
}
