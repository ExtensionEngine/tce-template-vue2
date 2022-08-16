<template>
  <v-col cols="6">
    <v-row>
      <v-col>
        <h2 class="mb-5">Edit preview</h2>
        <edit 
          v-bind="editProps"
          @save="onSave"
          @delete="onDelete"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Top toolbar</h3>
        <top-toolbar />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>Top toolbar</h3>
        <side-toolbar />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import Edit from '../../content-element/edit/index.vue';
import SideToolbar from '../../content-element/edit/SideToolbar.vue';
import TopToolbar from '../../content-element/edit/TopToolbar.vue';

export default {
  props: {
    elementData: {
      type: Object,
      required: true
    },
  },
  components: {
    'edit': Edit,
    'top-toolbar': TopToolbar,
    'side-toolbar': SideToolbar,
  },
  computed: {
    editProps: function() {
      return {...this.elementData}
    },
  },
  methods: {
    onSave(data) {
      this.$emit('save', data);
    },
    onDelete() {
      this.$emit('delete');
    }
  }
}
</script>

<style scoped>

</style>
