// array like object with random key ordering -> convert into AOO -> with asending oreder
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); 
// array de3structreing take key valee --> to display array value
const obj = { n: 5, i: 7, c: 9 };

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); 
}
