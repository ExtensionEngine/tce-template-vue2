<template>
  <v-col cols="6">
    <h2 class="mb-5">Display preview</h2>
    <display v-bind="displayProps" />
  </v-col>
</template>

<script>
import Display from '../../content-element/display/index.vue';
export default {
  props: {
    elementData: {
      type: Object,
      required: true
    },
  },
  components: {
    'display': Display
  },
  computed: {
    displayProps: function() {
      return {...this.elementData}
    },
  }
}
</script>

<style scoped>

</style>
