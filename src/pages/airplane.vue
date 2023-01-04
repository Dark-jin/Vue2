<script>
function stringTodate(str) {
   const [y, m, d] = str.split('-');
   return new Date(+y, m - 1, +d);
}
function dateToString(date) {
   return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
}
function pad(n, s = String(n)) {
   return s.length < 2 ? `0${s}` : s;
}

export default {
   data() {
      return {
         flightType: 'oneway flight',
         startDate: dateToString(new Date()),
         endDate: dateToString(new Date()),
      };
   },
   computed: {
      isReturn() {
         return this.flightType === 'return flight';
      },
      canBook() {
         return !this.isReturn || stringTodate(this.endDate) > stringTodate(this.startDate);
      },
   },
   methods: {
      book() {
         alert(
            this.isReturn
               ? `${this.startDate}에 출발하여 ${this.endDate}에 돌아오는 왕복 항공편을 예약했습니다.`
               : `${this.endDate}에 출발하는 편도 항공편을 예약하셨습니다`,
         );
      },
   },
};
</script>
<template>
   <div>
      <select v-model="flightType">
         <option value="oneway flight">편도</option>
         <option value="return flight">왕복</option>
      </select>
      <input type="date" v-model="startDate" />
      <input type="date" v-model="endDate" :disabled="!isReturn" />
      <button :disabled="!canBook" @click="book">예약</button>
      <p>{{ canBook ? '' : '오는 편 날짜는 가는 편 날짜 이후여야합니다.' }}</p>
   </div>
</template>

<style>
select,
input,
button {
   display: block;
   margin: 0.5em 0;
   font-size: 15px;
}

input[disabled] {
   color: #999;
}

p {
   color: red;
}
</style>
