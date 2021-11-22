<template>
  <div
    class="ncard d-flex flex-wrap justify-content-around w-50"
    v-for="item in info"
    :key="item._id"
    v-on:click="redirect"
  >
    <div class="ncard-body text-black">
      <h3 class="card-title">{{ item.tennghanh }}</h3>
      <p class="card-text">{{ item.gioithieu }}</p>
    </div>
    <img
      src="https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_Dai_hoc_Can_Tho.svg"
      alt="image"
      class="img-fluid"
    />
  </div>
</template>
<script>
export default {
  name: "rcard",
  props: { info: Object },
  methods: {
    redirect(){
      window.location.href = "http://localhost:8080/"
    }
  }
};
</script>
<style lang="css">
.ncard {
  border: 1px solid white;
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: #F1D600;
  cursor: pointer;
}

.ncard img {
  width: 7rem;
  height: 7rem;
}

.ncard-body {
  text-transform: capitalize;
  border-right: 1px solid white;
  padding: 0.5rem;
}
</style>