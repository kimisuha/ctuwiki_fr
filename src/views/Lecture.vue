<template>
  <div class="lecture">
    <h2>giang vien</h2>
    <div class="d-flex flex-wrap justify-content-around">
      <InfoCard v-for="item in info.user" :key="item._id" :info="{item}" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import InfoCard from '../components/InfoCard.vue';
export default {
  name: "Lecture",
  components: { InfoCard },
  data() {
    return{
      info: Object
    }
  },
  mounted() {
    axios
      .get("http://localhost:5000/")
      .then((response) => (this.info = response.data));
  },
  methods: {
    redirect(){
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style lang="css">
.lecture {
  border-top: 1px solid white;
  margin-top: 1rem;
  padding: 1rem;
}
</style>