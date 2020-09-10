<template>
  <div>
    <modal v-bind:prikazanModal="prikazanModal" v-bind:fadeout="fadeout">
      <div class="alert alert-danger">
        Proizvod
        <b>{{zaBrisanje}}</b> je izbrisan iz korpe
      </div>
    </modal>

    <div class="container">
      <h1 class="page-header">Proizvodi u korpi:</h1>
      <div v-if="prikazTabele">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>br.</th>
              <th>Proizvod</th>
              <th>Naziv proizvoda</th>
              <th>Cena proizvoda</th>
              <th></th>
            </tr>
          </thead>
          <!-- <tbody> -->
          <tbody>
            <tr v-for="(product, index) in products" v-bind:key="index">
              <td>{{index+1}}.</td>
              <td>
                <img v-bind:src="product.image" />
              </td>
              <td>{{product.name}}</td>
              <td>
                <format-number v-bind:num="product.price" />&nbsp; din.
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="brisanje(index, product.name)"
                >
                  <span class="glyphicon glyphicon-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
          <!-- </tbody> -->
        </table>
        <h2 class="text-right">
          Ukupna vrednost porudzbine:
          <format-number v-bind:num="zbirnaCena" />&nbsp;din.
        </h2>
      </div>

      <div class="jumbotron" v-else>
        <h3>Trenutno nema dodatih proizvoda u korpi</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { korpa } from "../components/Helpers/korpahelper";
import FormatNumber from "../components/Shared/FormatNumber";
import Modal from "@/components/Shared/Modal.vue";

export default {
  name: "Cart",
  components: {
    FormatNumber,
    Modal,
  },
  data() {
    return {
      products: [],
      prikazTabele: false,
      prikazanModal: false,
      fadeout: false,
      zaBrisanje: "aaa",
    };
  },
  methods: {
    brisanje: function (index, name) {
      this.zaBrisanje = name;
      var _korpa = this.products;
      _korpa.splice(index, 1);
      window.localStorage.korpa = JSON.stringify(_korpa);
      this.products = _korpa;
      if (this.products.length > 0) {
        this.prikazTabele = true;
      } else {
        this.prikazTabele = false;
      }
      korpa.$emit("dodato");
      this.prikaziModal();
    },
    prikaziModal: function () {
      this.fadeout = false;
      this.prikazanModal = true;
      clearTimeout(t1);
      clearTimeout(t2);
      var t1 = window.setTimeout(() => {
        this.fadeout = true;
        console.log("aaaa");
      }, 1000);

      var t2 = window.setTimeout(() => {
        this.prikazanModal = false;
        this.fadeout = false;
      }, 1500);
    },
  },
  computed: {
    zbirnaCena: function () {
      var zbir = 0;
      for (let i = 0; i < this.products.length; i++) {
        zbir += this.products[i].price;
      }
      return zbir;
    },
  },
  created() {
    this.products = JSON.parse(window.localStorage.korpa);
    if (this.products.length > 0) {
      this.prikazTabele = true;
    }
  },
};
</script>

<style scoped>
img {
  width: 80px;
}
.bold {
  font-weight: bold;
}
</style>