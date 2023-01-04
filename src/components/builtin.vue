<script>
const getInitialItems = () => [1, 2, 3, 4, 5];
let id = getInitialItems().length + 1;

export default {
   data() {
      return {
         show: true,
         items: getInitialItems(),
      };
   },
   methods: {
      insert() {
         const i = Math.round(Math.random() * this.items.length);
         this.items.splice(i, 0, id++);
      },
      reset() {
         this.items = getInitialItems();
      },
      remove(item) {
         const i = this.items.indexOf(item);
         if (i > -1) {
            this.items.splice(i, 1);
         }
      },
   },
};
</script>
<template>
   <div>
      <div id="built">
         <button @click="show = !show">토글</button>
         <Transition>
            <p v-if="show">안녕</p>
         </Transition>
      </div>
      <div>
         <button @click="insert">임의의 숫자 넣기</button>
         <button @click="reset">초기화</button>

         <TransitionGroup tag="ul" name="fade" class="container">
            <div v-for="item in items" class="item" :key="item">
               {{ item }}
               <button @click="remove(item)">X</button>
            </div>
         </TransitionGroup>
      </div>
   </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
   transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
   opacity: 0;
}
#built {
   margin-top: 20px;
}
.container {
   position: relative;
   padding: 0;
}
.item {
   width: 100%;
   height: 30px;
   box-sizing: border-box;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
   transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
   transform: scaleY(0.01) translate(30px, 0);
}
.fade-leave-active {
   position: absolute;
}
</style>
