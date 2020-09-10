<template>
  <div class="panel-heading" v-bind:style="'background-color : ' + boja">
    <h5>{{tip}}</h5>
    <router-link v-bind:to="'/product/'+id">
      <h4>{{name}}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PanelHeading",
  props: {
    tip: String,
    id: Number,
    name: String,
  },
  data: function () {
    return {
      boja: "red",
    };
  },
  methods: {
    odaberiBoju: function () {
      switch (this.tip) {
        case "Graficka kartica":
          this.boja = "#42A5F5";
          break;
        case "Maticna Ploca":
          this.boja = "#7E57C2";
          break;
        case "Procesori":
          this.boja = "#26A69A";
          break;
        default:
          this.boja = "blue";
          break;
      }
    },
  },
  created() {
    this.odaberiBoju();
  },
};
</script>

<style scoped>
a:hover {
  color: greenyellow;
  text-decoration: none;
}
</style>