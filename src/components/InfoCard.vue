<template>
  <div class="card bg-primary text-light if-card" v-for="item in info" :key="item._id" v-on:click="redirect">
    <div class="card-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_Dai_hoc_Can_Tho.svg"
        alt="logo"
        class="img-fluid"
      />
      <h3 class="card-title">{{ item.name }}</h3>
    </div>

    <div class="card-body">
      <p class="card-text">{{ item.age }}</p>
      <p class="card-text">{{ item.position }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: { info: Object },
  methods: {
    redirect(){
      window.location.href = "http://localhost:8080"
    }
  }
};
</script>
<style lang="css">
.if-card {
  width: 25%;
  text-transform: capitalize;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}

.if-card img {
  width: 5rem;
  height: 5rem;
  background-color: white;
  border: 1px solid white;
  border-radius: 50%;
  margin-bottom: 1rem;
}
</style>