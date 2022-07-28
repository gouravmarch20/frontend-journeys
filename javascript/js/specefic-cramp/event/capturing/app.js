const grandParentSelector = document.querySelector('#grandparent')
const parentSelector = document.querySelector('#parent')
const childSelector = document.querySelector('#child')
grandParentSelector.addEventListener(
  'click',
  () => {
    console.log('grandParent selector')
  },
  true
)
parentSelector.addEventListener(
  'click',
  () => {
    console.log('parent selector')
  },
  true
)
childSelector.addEventListener(
  'click',
  () => {
    console.log('childSelector')
  },
  true
)
