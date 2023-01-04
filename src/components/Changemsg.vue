<template>
   <div id="app-1">
      <button v-on:click="addstar">스타 추가</button>
      <h3>{{ message }}</h3>
   </div>
</template>
<script>
export default {
   name: 'test1',
   data: () => ({
      message: 'Star 추가',
   }),
   methods: {
      addstar() {
         this.message = `${'*'.repeat(2)} ${this.message} ${'*'.repeat(2)}`;
      },
   },
};
</script>
