<template>
  <div class="panel-footer">
    <h3>
      <format-number v-bind:num="price" />
      {{valuta}}
    </h3>
    <button class="btn btn-danger" v-on:click="dodaj">
      <span class="glyphicon glyphicon-shopping-cart"></span> Dodaj u korpu
    </button>
  </div>
</template>

<script>
import FormatNumber from "../../Shared/FormatNumber";
import { korpa } from "../../Helpers/korpahelper";

export default {
  name: "PanelFooter",
  props: {
    price: Number,
    valuta: String,
  },
  components: {
    FormatNumber,
  },
  methods: {
    dodaj: function () {
      this.$emit("dodatoUKopru");
      korpa.$emit("dodato");
    },
  },
};
</script>

<style>
</style>