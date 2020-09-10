<template>
  <div id="app">
    <!-- 
      ovde je ugradjena header komponetna,
      da bi bila vidljiva i ista na svakoj stranici
    -->
    <app-header />
    <!-- 
      router-view je komponeta, 
      koju dobijamo iz vueRouter paketa
      U zavisnosti od toga koja je trenutna ruta u URL-u
      bice prikazana odgovarajuca komponenta iz foldera Views na ovom mestu
      npr / - home
          /about - about
      pogledaj route/index.js

      ovoj komponenti saljemo niz objekata products
      koje smo preuzeli iz json fajla
    -->
    <router-view v-bind:products="products" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// MyJSON nije komponenta vec niz objekata koje uvozimo
// iz json/index.json fajla i predstavlja nase test podatke
import MyJSON from "./json/index.json";

export default {
  data: function () {
    return {
      products: MyJSON,
    };
  },
  components: {
    AppHeader,
  },
  created() {
    /* 
      U slucaju da prvi put korisnik pristupa sajtu
      on nema za ovaj sajt jos uvek postavljen localStorage
      zato mi ovde iniciramo prazan localStorage
    */

    if (
      window.localStorage.korpa == undefined ||
      window.localStorage.korpa == ""
    ) {
      window.localStorage.korpa = JSON.stringify([]);
    }
  },
};
</script>



<style>

/* 
  na App komponenti ostavljamo style da nije scoped
  kako bi sve komponente koristile date stilove
 */
body {
  margin: 0px;
}
a {
  color: inherit;
}
#app {
  padding-top: 50px;
}
</style>

