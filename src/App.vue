<template>
  <div class="container mt-3">
    <button class="btn btn-primary">Button</button>
    <p>
      {{$store.state.Todos.name}}
    </p>
  </div>
</template>


<script>
export default {
mounted() {
  console.log(this.$store.state.Todos.name)
}
}
</script>
