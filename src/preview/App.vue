<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>TCE preview</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <edit-preview :elementData="elementData" />
          <display-preview :elementData="elementData" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DisplayPreview from './components/DisplayPreview.vue';
import EditPreview from './components/EditPreview.vue';

export default {
  data: function() {
    return {
      elementData: {},
    }
  },
  components: {
    'edit-preview': EditPreview,
    'display-preview': DisplayPreview,
  }
  // add methods and handlers for save and delete events from edit component
}
</script>

<style scoped>

</style>

