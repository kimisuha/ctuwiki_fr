<template>
  <div
    class="rcard d-flex flex-wrap justify-content-around w-50"
    v-for="item in info"
    :key="item._id"
    v-on:click="redirect"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_Dai_hoc_Can_Tho.svg"
      alt="image"
      class="img-fluid"
    />

    <div class="rcard-body">
      <h3 class="card-title">{{ item.tenkhoa }}</h3>
      <p class="card-text">{{ item.tentruongkhoa }}</p>
      <p class="card-text">{{ item.gioithieu }}</p>
    </div>
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
.rcard {
  border: 1px solid white;
  border-radius: 0.5rem;
  margin: 1rem;
  background-color: #42b983;
  cursor: pointer;
}

.rcard img {
  width: 7rem;
  height: 7rem;
}

.rcard-body {
  text-transform: capitalize;
  border-left: 1px solid white;
  padding: 0.5rem;
}
</style>