<template>
  <form @submit.prevent>
    <label for="from">출발지</label>
    <select
      name="from"
      :value="from"
      @change="$emit('update:from', $event.target.value)"
    >
      <option value="밀양캠퍼스">밀양캠퍼스</option>
      <option value="부산대역">부산대역</option>
      <option value="부산역">부산역</option>
      <option value="서면역">서면역</option>
    </select>

    <label for="to">도착지</label>
    <select
      name="to"
      :value="to"
      @change="$emit('update:to', $event.target.value)"
    >
      <option value="밀양캠퍼스">밀양캠퍼스</option>
      <option value="부산대역">부산대역</option>
      <option value="부산역">부산역</option>
      <option value="서면역">서면역</option>
    </select>

    <label for="departure-time">출발시간</label>
    <input
      type="datetime-local"
      name="departure-time"
      :value="departureTime"
      @input="$emit('update:departureTime', $event.target.value)"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
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
};
</script>

<style scoped></style>
