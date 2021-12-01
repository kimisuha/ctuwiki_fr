<template>
  <div class="form" v-if="type === 'CreateUser'">
    <form :action="src" method="POST">
      <div class="form-group">
        <label for="name" class="form-label">name</label>
        <input type="text" id="name" name="name" class="form-control" />
      </div>

      <div class="form-group">
        <label for="age" class="form-label">age</label>
        <input type="text" id="age" name="age" class="form-control" />
      </div>

      <div class="form-group">
        <label for="position" class="form-label">position</label>
        <input type="text" id="position" name="position" class="form-control" />
      </div>

      <button type="submit" class="btn btn-success">submit</button>
    </form>
  </div>

  <div class="form" v-if="type === 'CreateKhoa'">
    <form :action="src" method="POST">
      <div class="form-group">
        <label for="tenkhoa" class="form-label">ten khoa</label>
        <input type="text" id="tenkhoa" name="tenkhoa" class="form-control" />
      </div>

      <div class="form-group">
        <label for="tentruongkhoa" class="form-label">ten truong khoa</label>
        <input
          type="text"
          id="tentruongkhoa"
          name="tentruongkhoa"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="gioithieu" class="form-label">gioi thieu</label>
        <textarea
          id="gioithieu"
          name="gioithieu"
          class="form-control"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-success" @click="redirect">
        submit
      </button>
    </form>
  </div>

  <div class="form" v-if="type === 'CreateNghanh'">
    <form :action="src" method="POST">
      <div class="form-group">
        <label for="tennghanh" class="form-label">ten nghanh</label>
        <input
          type="text"
          id="tennghanh"
          name="tennghanh"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="gioithieu" class="form-label">gioi thieu</label>
        <textarea
          id="gioithieu"
          name="gioithieu"
          class="form-control"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-success" @click="redirect">
        submit
      </button>
    </form>
  </div>

  <div class="form" v-if="type === 'CreateAtten'">
    <form :action="src" method="POST">
      <div class="form-group">
        <label for="title" class="form-label">title</label>
        <input type="text" id="title" name="title" class="form-control" />
      </div>

      <div class="form-group">
        <label for="receiver" class="form-label">receiver</label>
        <input type="text" id="receiver" name="receiver" class="form-control" />
      </div>

      <div class="form-group">
        <label for="date" class="form-label">date</label>
        <input type="date" id="date" name="date" class="form-control" />
      </div>

      <div class="form-group">
        <label for="content" class="form-label">content</label>
        <textarea id="content" name="content" class="form-control"></textarea>
      </div>
      <!-- {{src}} -->

      <button type="submit" class="btn btn-success" @click="redirect">
        submit
      </button>
    </form>
  </div>

  <div class="form" v-if="type === 'UpdateNghanh'">
    <div class="form-group">
      <label for="input" class="form-label"
        >nhap vao ma nghanh can thay doi</label
      >
      <input
        type="text"
        id="input"
        name="input"
        class="form-control"
        @input="getValue"
      />
    </div>

    <div class="form">
      <form :action="src + this.data._id" method="post">
        <div class="form-group">
          <label for="tennghanh" class="form-label">ten nghanh</label>
          <input
            type="text"
            id="tennghanh"
            name="tennghanh"
            class="form-control"
            :placeholder="this.data.tennghanh"
          />
        </div>

        <div class="form-group">
          <label for="gioithieu" class="form-label">gioi thieu</label>
          <textarea
            id="gioithieu"
            name="gioithieu"
            class="form-control"
            :placeholder="this.data.gioithieu"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-success" @click="redirect">
          submit
        </button>
      </form>
    </div>
  </div>

  <div class="form" v-if="type === 'UpdateKhoa'">
    <div class="form-group">
      <label for="input" class="form-label"
        >nhap vao ma khoa can thay doi</label
      >
      <input
        type="text"
        id="input"
        name="input"
        class="form-control"
        @input="getValue"
      />
    </div>

    <div class="form">
      <form :action="src + this.data._id" method="post">
        <div class="form-group">
          <label for="tenkhoa" class="form-label">ten khoa</label>
          <input
            type="text"
            id="tenkhoa"
            name="tenkhoa"
            class="form-control"
            :placeholder="this.data.tenkhoa"
          />
        </div>

        <div class="form-group">
          <label for="tentruongkhoa" class="form-label">ten truong khoa</label>
          <input
            type="text"
            id="tentruongkhoa"
            name="tentruongkhoa"
            class="form-control"
            :placeholder="this.data.tentruongkhoa"
          />
        </div>

        <div class="form-group">
          <label for="gioithieu" class="form-label">gioi thieu</label>
          <textarea
            id="gioithieu"
            name="gioithieu"
            class="form-control"
            :placeholder="this.data.gioithieu"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-success" @click="redirect">
          submit
        </button>
      </form>
    </div>
  </div>

  <div class="form" v-if="type === 'UpdateUser'">
    <div class="form-group">
      <label for="input" class="form-label"
        >nhap vao ma khoa can thay doi</label
      >
      <input
        type="text"
        id="input"
        name="input"
        class="form-control"
        @input="getValue"
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";

export default {
  name: "Form",
  props: { type: String, src: String, url: String },
  data() {
    return {
      data: Object,
    };
  },
  methods: {
    redirect() {
      /* console.log(res);
      this.$router.push({ name: "Admin" }); */
      /* setTimeout(function () {
        window.close();
      }, 500); */
    },
    getValue() {
      axios
        .get(this.url + $("#input").val())
        .then((response) => (this.data = response.data));
    },
  },
};
</script>
<style lang="css">
.form {
  text-align: left;
  margin: 1rem;
  padding: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}
</style>