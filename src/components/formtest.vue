<script>
export default {
   data() {
      return { message: '', checkedNames: [], selected: '' };
   },
};
</script>
<template>
   <div>
      <span>여러 줄 메시지:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <textarea v-model="message" placeholder="여러 줄 입력가능"></textarea>
      <div>
         <div>체크된 이름 : {{ checkedNames }}</div>
         <input type="checkbox" id="demo-jack" value="잭" v-model="checkedNames" />
         <label for="demo-jack">잭</label>

         <input type="checkbox" id="demo-john" value="존" v-model="checkedNames" />
         <label for="demo-john">존</label>

         <input type="checkbox" id="demo-mike" value="마이크" v-model="checkedNames" />
         <label for="demo-mike">마이크</label>
      </div>
      <div>
         <div>Name : {{ selected }}</div>
         <select v-model="selected">
            <option disabled value="">다음 중 하나를 선택하세요</option>
            <option>잭</option>
            <option>존</option>
            <option>마이크</option>
         </select>
      </div>
   </div>
</template>
