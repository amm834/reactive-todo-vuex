<template>
  <div class="mb-3">
    <select class="input-group-lg" v-model="limit" @change="limitTodos(limit)">
      <option value="5">5</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LimitTodo",
  methods: mapActions(['limitTodos']),
  data() {
    return {
      limit: null,
    }
  }
}
</script>

<style scoped>

</style>