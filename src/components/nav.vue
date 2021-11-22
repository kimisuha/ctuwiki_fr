<template>
  <div class="nav bg-dark text-light m-auto justify-content-center">
    <div class="choise">
      <router-link to="/">trang chu</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/thongbao">thong bao</router-link>
      <router-link to="/giangvien">giang vien</router-link>
      <router-link to="/donvi">don vi</router-link>
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
  color: whitesmoke;
  text-decoration: none;
}

.choise a.router-link-exact-active{
  color: #42b983;
}

.view{
  width: 100%;
}
</style>