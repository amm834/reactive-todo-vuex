<template>
  <main class="container mt-5">
    <AddTodo/>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="todo in todos" :key="todo.id">
        <div class="card bg-success text-light">
          <div class="card-body d-flex justify-content-between">
            <span>{{ todo.title }}</span>
            <span>
              <button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
            </span>
          </div>
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
  methods: mapActions(['getAllTodos', 'deleteTodo']),
  mounted() {
    this.getAllTodos()
  }
}
</script>