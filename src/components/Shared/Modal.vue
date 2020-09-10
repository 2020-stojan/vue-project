<template>
  <div v-bind:class="{'v-modal' : true, fadeout : fadeout}" v-if="prikazanModal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data: function () {
    return {
      //   fadeout: false,
    };
  },
  props: {
    prikazanModal: Boolean,
    fadeout: Boolean,
  },
};
</script>

<style scoped>
.v-modal {
  position: fixed;
  width: 50%;
  margin: 50px 25%;
  text-align: center;
  animation: modalAnimacija 0.5s ease-in;
  transition: all 0.5s;
  z-index: 10000;
}

@keyframes modalAnimacija {
  from {
    margin: 0px 25%;
    opacity: 0;
  }
  to {
    margin: 50px 25%;
    opacity: 1;
  }
}

.fadeout {
  margin: 0px 25%;
  opacity: 0;
}
</style>