
// avoid var varible , let & encapsulation
const countBtnClick = () => {
  let count = 0
  // clouse form 
  document
    .getElementById('btn-click')
    .addEventListener('click', () => console.log('button clicked ', ++count))
}
countBtnClick()