<template>
  <div class="attention">
    <h2>thong bao</h2>
    <div class="d-flex flex-wrap justify-content-around">
      <Card
        v-for="item in info.atten"
        :key="item._id"
        :info="{item}"
        v-on:click="redirect"
      />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
import axios from "axios";
export default {
  name: "Attention",
  components: { Card },
  data() {
    return {
      info: Object,
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/")
      .then((response) => (this.info = response.data));
  },
  methods: {
    redirect(){
      this.$router.push({ name: "attention" });
    }
  }
};
</script>
<style lang="css">
.attention {
  border-top: 1px solid white;
  margin-top: 1rem;
  padding: 1rem;
}
</style>