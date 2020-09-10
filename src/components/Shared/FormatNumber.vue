<template>
  <span>{{formatPrice}}</span>
</template>

<script>
export default {
  props: {
    num: Number,
  },
  computed: {
    formatPrice() {
      var cenaS = this.num.toString();
      var cenaN = cenaS.split("").reverse();
      if (cenaN.length > 3) cenaN.splice(3, 0, ".");
      if (cenaN.length > 7) cenaN.splice(7, 0, ".");
      cenaS = cenaN.reverse().join("");
      return cenaS;
    },
  },
};
</script>
