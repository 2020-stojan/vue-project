<template>
  <div class="home">
    <modal v-bind:prikazanModal="prikazanModal" v-bind:fadeout="fadeout">
      <div class="alert alert-success">
        Proizvod
        <b>{{zaDodavanje}}</b> je dodat u korpu
      </div>
    </modal>
    <Jumbotron />
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="product in products" v-bind:key="product.id">
          <ProductCard v-bind:data="product" v-on:dodato="prikaziModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Home/Jumbotron.vue";
import ProductCard from "@/components/Home/ProductCard/ProductCard.vue";
import Modal from "@/components/Shared/Modal.vue";

export default {
  name: "Home",
  // ovo se dobija prilikom poziva komponetne
  // i predstavlja niz nasih podataka
  props: {
    products: Array,
  },
  data: function () {
    return {
      prikazanModal: false,
      fadeout: false,
      zaDodavanje: "",
    };
  },
  components: {
    Jumbotron,
    ProductCard,
    Modal,
  },
  methods: {
    prikaziModal: function (name) {
      this.zaDodavanje = name;
      this.prikazanModal = true;
      window.setTimeout(() => {
        this.fadeout = true;
        console.log("aaaa");
      }, 1000);

      window.setTimeout(() => {
        this.prikazanModal = false;
        this.fadeout = false;
      }, 1500);
    },
  },
};
</script>


<style scoped>
</style>
