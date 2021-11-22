<template>
  <div class="unit">
    <h2>don vi</h2>
    <div class="d-flex flex-wrap justify-content-around">
      <RowCard v-for="item in info.khoa" :key="item._id" :info="{ item }" />
      <NCard v-for="iten in info.nghanh" :key="iten._id" :info="{ iten }" />
    </div>
  </div>
</template>
<script>
import NCard from "../components/NCard.vue";
import RowCard from "../components/RowCard.vue";
import axios from 'axios'
export default {
  name: "Unit",
  components: { RowCard, NCard },
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
};
</script>
<style lang="css">
.unit {
  border-top: 1px solid white;
  margin-top: 1rem;
  padding: 1rem;
}
</style>