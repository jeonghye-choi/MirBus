<template>
  <form @submit.prevent="setFormData">
    <label for="from">출발지</label>
    <select name="from" v-model="propsFormData.from">
      <option value="밀양캠퍼스">밀양캠퍼스</option>
      <option value="부산대역">부산대역</option>
      <option value="부산역">부산역</option>
      <option value="서면역">서면역</option>
    </select>

    <label for="to">도착지</label>
    <select name="to" v-model="propsFormData.to">
      <option value="밀양캠퍼스">밀양캠퍼스</option>
      <option value="부산대역">부산대역</option>
      <option value="부산역">부산역</option>
      <option value="서면역">서면역</option>
    </select>

    <label for="departure-time">출발시간</label>
    <input
      type="datetime-local"
      name="departure-time"
      v-model="propsFormData.departureTime"
    />
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  props: {
    formData: {
      from: {
        type: String,
        default: '',
      },
      to: {
        type: String,
        default: '',
      },
      departureTime: {
        type: String,
        default: '',
      },
    },
  },
  data: function () {
    return {
      propsFormData: this.formData,
    };
  },
  methods: {
    setFormData: function () {
      console.log(this.propsFormData);
    },
  },
};
</script>

<style scoped></style>
