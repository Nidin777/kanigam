<template>
  <div class="hello">
    <div class="form-group">
                <label for="username">Hello! {{ username }}</label>
            </div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    username: String,
  }
}
</script>
