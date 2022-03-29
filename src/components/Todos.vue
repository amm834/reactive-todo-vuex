<template>
  <main class="container mt-5">
   <AddTodo />
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
import AddTodo from "./AddTodo.vue";

export default {
  name: "Todos",
  components: {AddTodo},
  computed: mapGetters(['todos']),
  methods:mapActions(['getAllTodos']),
  mounted() {
    this.getAllTodos()
  }
}
</script>