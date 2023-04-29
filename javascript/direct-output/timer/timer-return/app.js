let count = 0;
const timerId = setInterval(() => {
  console.log("hi", count);
  count++;
}, 100);

console.log(timerId);
if (count === 5) {
  console.log(timerId);

  clearInterval(timerId);
}
