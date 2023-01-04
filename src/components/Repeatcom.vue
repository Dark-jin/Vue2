<script>
export default {
   data() {
      return {
         myobject: {
            title: 'Etri',
            author: 'jinseo',
            pulbishedat: '2023-1-1',
         },
         sets: [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
         ],
      };
   },
   methods: {
      even(numbers) {
         return numbers.filter(number => number % 2 == 0);
      },
   },
};
</script>
<template>
   <div>
      <ul>
         <li v-for="value in myobject" :key="value.id">
            {{ value }}
         </li>
      </ul>
      <ul v-for="numbers in sets" :key="numbers">
         <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
      </ul>
      <span v-for="n in 10" :key="n.id">{{ n }}</span>
   </div>
</template>
