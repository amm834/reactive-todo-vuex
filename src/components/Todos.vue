<template>
  <main class="container mt-5">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Add Your Task">
      <button class="btn btn-outline-success" type="button">Button</button>
    </div>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="todo in todos" :key="todo.id">
        <div class="card bg-success text-light">
          <div class="card-body"> {{ todo.title }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(['todos']),
  methods:mapActions(['getAllTodos']),
  mounted() {
    this.getAllTodos()
  }
}
</script>