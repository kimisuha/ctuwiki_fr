<template>
  <div class="nav bg-dark text-light m-auto justify-content-center">
    <div class="choise">
      <router-link to="/" class="text-light ">Trang Chu</router-link>
      <router-link to="/about" class="text-light ">About</router-link>
      <router-link to="/thongbao" class="text-light ">Thong Bao</router-link>
      <router-link to="/giangvien" class="text-light ">Giang Vien</router-link>
      <router-link to="/donvi" class="text-light">Don Vi</router-link>
      <router-link to="/admin" class="text-light">Admin</router-link>
    </div>

    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "nav",
};
</script>
<style lang="css">
.nav {
  width: 75%;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 1rem;
}

.choise a {
  text-transform: capitalize;
  font-size: larger;
  font-family: System-ui;
  margin-left: 5rem;
  text-decoration: none;
}

a.router-link-active {
  color: white;
}

.choise a.router-link-exact-active{
  color: #42b983;
}

.view{
  width: 100%;
}
</style>