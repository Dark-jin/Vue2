<script>
export default {
   data() {
      return {
         open: false,
      };
   },
};
</script>

<template>
   <div>
      <button @click="open = true">Modal open</button>

      <Teleport to="body">
         <div v-if="open" class="modal">
            <p>모달창입니다!</p>
            <button @click="open = false">닫기</button>
         </div>
      </Teleport>
   </div>
</template>

<style>
.modal {
   position: fixed;
   z-index: 999;
   top: 20%;
   left: 50%;
   width: 300px;
   margin-left: -150px;
   background-color: azure;
   border-radius: 8px;
   box-shadow: 0 4px 16px #00000026;
   padding: 30px;
}
</style>
