<template>
  <div>MirBus</div>
  <travel-form v-model:formData="formData" />
  <travel :formData="formData" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TravelForm from './components/TravelForm.vue';
import Travel from './components/Travel.vue';

export default defineComponent({
  name: 'App',
  components: {
    TravelForm,
    Travel,
  },
  setup() {
    const formData = reactive({
      from: '',
      to: '',
      departureTime: '',
    });
    return {
      formData,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
