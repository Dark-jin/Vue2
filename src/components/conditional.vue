<script>
export default {
   data() {
      return {
         awesome: true,
      };
   },
};
</script>
<template>
   <div>
      <button @click="awesome = !awesome">바꾸기</button>
      <h1 v-if="awesome">Vue Good!</h1>
      <h1 v-else>React Good!</h1>
   </div>
</template>
