<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>TCE preview</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <edit-preview 
            :elementData="elementData"
            @save="saveElementData"
            @delete="deleteElementData" 
          />
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
  },
  methods: {
    saveElementData(data) {
      this.elementData = data;
    },
    deleteElementData() {
      this.elementData = {};
    }
  }
}
</script>

<style scoped>

</style>

