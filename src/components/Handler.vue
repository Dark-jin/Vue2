<script>
export default {
   methods: {
      say(message) {
         alert(message);
      },
      warn(message, event) {
         if (event) {
            event.preventDefault();
         }
         alert(message);
      },
   },
};
</script>
<template>
   <div>
      <button @click="say('안녕')">안녕 버튼</button>
      <button @click="say('바이')">바이 버튼</button>
      <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">제출하기</button>
   </div>
</template>
