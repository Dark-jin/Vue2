<script>
export default {
   data() {
      return {
         msg: '',
      };
   },
};
</script>

<template>
   <div>
      <p>현재 컴포넌트: B</p>
      <span>메세지: {{ msg }}</span>
      <input v-model="msg" />
   </div>
</template>
