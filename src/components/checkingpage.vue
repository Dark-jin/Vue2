<script>
import formtest from './formtest.vue';
import builtinVue from './builtin.vue';

export default {
   name: 'checkingpage',
   components: {
      formtest,
      builtinVue,
   },
   data() {
      return {
         msg: 'hello',
      };
   },
};
</script>
<template>
   <div>
      <h1>{{ msg }}</h1>
      <formtest />
      <builtinVue />
   </div>
</template>
