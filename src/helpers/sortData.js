export const sortData = (data, option) => {
   if(option === 'ascending') {
      return data.sort((a, b) => {
         if(a.price < b.price) return -1
         if(a.price > b.price) return 1
         return 0;
      })
   } else if(option === 'descending') {
      return data.sort((a, b) => {
         if(a.price > b.price) return -1
         if(a.price < b.price) return 1
         return 0;
      })
   }
}