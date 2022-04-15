<template>
  <div>
      <input v-model="value" name="test">
      <button @click="onSave" name="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "VuexComp",
    data() {
        return {
            value: ''
        }
    },
    methods: {
        ...mapActions(['addData']),
        onSave() {
            this.addData(this.value)
        }
    },
}
</script>

<style>

</style>