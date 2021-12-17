<template>
  <div>Travel Time</div>
  <div>30min</div>
  <div>{{ formData.from }} + {{ formData.departureTime }}</div>
  <div>경로 나타내는 곳</div>
  <div>{{ formData.to }} + 도착시간</div>
</template>

<script>
export default {
  props: { formData: Object },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped></style>
