<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title>TCE preview</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <edit-preview
            @save="saveElementData"
            @delete="deleteElementData"
            :element-data="elementData" />
          <display-preview :element-data="elementData" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DisplayPreview from './components/DisplayPreview.vue';
import EditPreview from './components/EditPreview.vue';

export default {
  data: function () {
    return {
      elementData: {}
    };
  },
  methods: {
    saveElementData(data) {
      this.elementData = data;
    },
    deleteElementData() {
      this.elementData = {};
    }
  },
  components: {
    'edit-preview': EditPreview,
    'display-preview': DisplayPreview
  }
};
</script>
