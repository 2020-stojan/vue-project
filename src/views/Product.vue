<template>
  <div class="text-center">
    <h1 class="page-header text-center">{{product.name}}</h1>
    <img v-bind:src="product.image" alt />
    <h1 class="page-header text-center">{{product.price}}</h1>
    <div class="des" v-html="product.description"></div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    products: Array,
  },
  data: function () {
    return {
      product: {},
    };
  },
  methods: {
    findProduct: function () {
      for (let i = 0; i < this.products.length; i++) {
        if (this.$route.params.id == this.products[i].id) {
          this.product = this.products[i];
        }
      }
    },
  },
  created() {
    this.findProduct();
  },
};
</script>

<style scoped>
img {
  width: 30%;
}
.des {
  /* text-align: left; */
}
</style>