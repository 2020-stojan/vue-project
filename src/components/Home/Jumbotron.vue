<template>
  <div class="jumbotron">
    <div class="container text-center">
      <h2>
        Preko
        <format-number v-bind:num="broj" />&nbsp; zadovoljnih kupaca
      </h2>
      <p>Mission, Vission & Values</p>
    </div>
  </div>
</template>

<script>
import FormatNumber from "../Shared/FormatNumber";

export default {
  name: "Jumbotron",
  data: function () {
    return {
      broj: 1234567,
    };
  },
  components: {
    FormatNumber,
  },
};
</script>

<style scoped>
h2 {
  font-size: 3em;
}
</style>