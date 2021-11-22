<template>
  <div class="card bg-primary text-light at-card" v-for="item in info" :key="item._id" v-on:click="redirect">
    <div class="card-header">
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/6/6c/Logo_Dai_hoc_Can_Tho.svg"
        alt="logo"
        class="img-fluid"
      />
      <h3 class="card-title"> {{ item.title }} </h3>
    </div>

    <div class="card-body">      
      <p class="card-text">{{ item.receiver }}</p>
      <p class="card-text">{{ item.date }}</p>
      <p class="card-text">{{ item.content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: { info: Object },
  methods: {
    redirect(){
      window.location.href = "http://localhost:8080/";
    }
  }
};
</script>
<style lang="css">
.at-card {
  width: 25%;
  text-transform: capitalize;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}

.at-card img {
  width: 5rem;
  height: 5rem;
}
</style>