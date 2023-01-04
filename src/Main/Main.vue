<script>
import Changemsg from '../components/Changemsg.vue';
import conditional from '../components/conditionaltesttest.vue';
import Repeatcom from '../components/Repeatcom.vue';
import HandlerVue from '../components/Handler.vue';

export default {
   name: 'Main',
   components: {
      Changemsg,
      conditional,
      Repeatcom,
      HandlerVue,
   },
};
</script>

<template>
   <div>
      <router-link to="checkingPage">checkingPage</router-link><br />
      <router-link to="airplane">airplanePage</router-link><br />
      <router-link to="KeepAlive">KeepAlivePage</router-link>
      <div id="main">
         <Changemsg />
         <conditional />
         <HandlerVue />
      </div>
      <div>
         <Repeatcom />
      </div>
   </div>
</template>
<style>
#main {
   margin-top: 20px;
}
</style>
