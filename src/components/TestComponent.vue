<template>
  <div>
      The message is: {{ message }}
  </div>
</template>

<script>
export default {
    name: "TestComponent",
    props: {
        message: String
    }
}
</script>

<style>

</style>