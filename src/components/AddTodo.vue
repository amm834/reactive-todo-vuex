<template>
  <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder=" Your Task" v-model="newTodo.title">
      <button class="btn btn-outline-success" type="button" @click="addNewTodo(newTodo)">Add</button>
    </div>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AddTodo",
  methods: mapActions(['addNewTodo']),
  data() {
    return {
      newTodo: {
        title: '',
        completed: false,
        userId: 1,
      }
    }
  },
}
</script>