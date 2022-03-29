<template>
  <main class="container mt-5">
    <AddTodo/>
    <LimitTodo/>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="todo in todos" :key="todo.id"
      >
        <div class="card bg-primary text-light"
             @dblclick="toggleTodo(todo)"
             :class="todo.completed ? 'bg-success' : ''"
        >
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
import LimitTodo from "./LimitTodo.vue";

export default {
  name: "Todos",
  components: {LimitTodo, AddTodo},
  computed: mapGetters(['todos']),
  methods: {
    ...mapActions(['getAllTodos', 'deleteTodo', 'updateTodo']),
    toggleTodo(todo) {
      todo.completed = !todo.completed
      this.updateTodo(todo)
    }
  },
  mounted() {
    this.getAllTodos()
  }
}
</script>