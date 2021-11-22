<template>
  <div class="home">
    <div class="atten">
      <h2>thong bao</h2>
      <div class="d-flex flex-wrap justify-content-around">
        <Card  v-for="item in info.atten" :key="item._id" :info="{item}"/>
      </div>      
    </div>
    
    <div class="unit">
      <h2>khoa</h2>
      <div class="d-flex flex-wrap justify-content-around" v-for="item in info.khoa" :key="item._id">
        <RowCard :info="{item}"/>
      </div>
    </div>

    <div class="unit">
      <h2>nghanh</h2>
      <div class="d-flex flex-wrap justify-content-around" v-for="item in info.nghanh" :key="item._id">
        <NCard :info="{item}"/>
      </div>
    </div>

    <div class="lecture">
      <h2>giang vien</h2>
      <div class="d-flex flex-wrap justify-content-around">
        <InfoCard v-for="item in info.user" :key="item._id" :info="{ item }" />
      </div>
    </div>
    
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import RowCard from '../components/RowCard.vue'
import InfoCard from '../components/InfoCard.vue'
import axios from 'axios'
import NCard from '../components/NCard.vue';
// @ is an alias to /src
export default {
  name: "Home",
  components: {Card, RowCard, InfoCard, NCard},
  data() {
    return {
      info: Object
    }
  },
  mounted() {
    axios
      .get("http://localhost:5000/")
      .then((response) => (this.info = response.data));
  },
}
</script>
<style lang="css">
  .home{
    margin-top: 1rem;
    border-top: 1px solid white;
    padding: 1rem;
  }

  h2{
    text-transform: capitalize;
    text-align: left;
    margin: 1rem;
  }
</style>
