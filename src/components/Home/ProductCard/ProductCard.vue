<template>
  <div class="panel panel-primary">
    <panel-heading v-bind:name="data.name" v-bind:tip="data.tip" v-bind:id="data.id" />
    <div class="panel-body">
      <img v-bind:src="data.image" alt="Image" />
    </div>
    <panel-footer v-bind:price="data.price" valuta="rsd" v-on:dodatoUKopru="dodaj" />
  </div>
</template>


<script>
import PanelHeading from "./PanelHeading.vue";
import PanelFooter from "./PanelFooter.vue";

export default {
  name: "ProductCard",
  components: {
    PanelHeading,
    PanelFooter,
  },
  props: {
    data: Object,
  },
  methods: {
    dodaj: function () {
      var korpa = JSON.parse(window.localStorage.korpa);
      korpa.push(this.data);
      window.localStorage.korpa = JSON.stringify(korpa);
      this.$emit("dodato", this.data.name);
    },
  },
};
</script>

<style scoped>
.panel-body {
  min-height: 300px;
  text-align: center;
}
img {
  width: 70%;
}
</style>