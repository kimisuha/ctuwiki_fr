<template>
  <div class="table">
    <div v-if="this.type == 'user'">
      <table class="table text-light tb">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">position</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item._id">
            <th scope="row">{{ item._id }}</th>

            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.position }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-around">
        <button class="btn btn-success" v-on:click="redirect('CreateUser')">
          add new
        </button>
        <button class="btn btn-warning text-light" @click="redirect('UpdateUser')">modify</button>
        <button class="btn btn-danger" @click="redirect('DeleteUser')" >delete</button>
      </div>
    </div>

    <div v-if="this.type == 'atten'">
      <table class="table text-light tb">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">receiver</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item._id">
            <th scope="row">{{ item._id }}</th>

            <td>{{ item.title }}</td>
            <td>{{ item.content }}</td>
            <td>{{ item.receiver }}</td>
            <td>{{ item.date }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-around">
        <button class="btn btn-success" v-on:click="redirect('CreateAtten')">
          add new
        </button>
      </div>
    </div>

    <div v-if="this.type == 'khoa'">
      <table class="table text-light tb">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">tenkhoa</th>
            <th scope="col">tentruongkhoa</th>
            <th scope="col">gioithieu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item._id">
            <th scope="row">{{ item._id }}</th>

            <td>{{ item.tenkhoa }}</td>
            <td>{{ item.tentruongkhoa }}</td>
            <td>{{ item.gioithieu }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-around">
        <button class="btn btn-success" v-on:click="redirect('CreateKhoa')">
          add new
        </button>
        <button class="btn btn-warning text-light" @click="redirect('UpdateKhoa')">modify</button>
        <button class="btn btn-danger" v-on:click="redirect('DeleteKhoa')">delete</button>
      </div>
    </div>

    <div v-if="this.type == 'nghanh'">
      <table class="table text-light tb">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">tennghanh</th>
            <th scope="col">gioithieu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in info" :key="item._id">
            <th scope="row">{{ item._id }}</th>

            <td>{{ item.tennghanh }}</td>
            <td>{{ item.gioithieu }}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-around">
        <button class="btn btn-success" v-on:click="redirect('CreateNghanh')">
          add new
        </button>
        <button class="btn btn-warning text-light" @click="redirect('UpdateNghanh')">modify</button>
        <button class="btn btn-danger" v-on:click="redirect('DeleteNghanh')">delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "table",
  props: { info: Object, type: String },
  methods: {
    redirect(url) {
      this.$router.push({ name: url });
    },
  },
};
</script>
<style lang="css">
.tb {
  padding: 1rem;
  margin: 1rem;
}
</style>