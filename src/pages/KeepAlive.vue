<script>
import A from '../components/A.vue';
import B from '../components/B.vue';
export default {
   components: { A, B },
   data() {
      return {
         current: 'A',
      };
   },
};
</script>
<template>
   <div>
      <label><input type="radio" v-model="current" value="A" />A</label>
      <label><input type="radio" v-model="current" value="B" />B</label>
      <KeepAlive>
         <component :is="current"></component>
      </KeepAlive>
   </div>
</template>
