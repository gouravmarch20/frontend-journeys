// ! first
const grandParentSelector = document.querySelector('#grandparent')
const parentSelector = document.querySelector('#parent')
const childSelector = document.querySelector('#child')

grandParentSelector.addEventListener(
  'click',
  e => {
    console.log('grandParent selector')
  },
  false
)
parentSelector.addEventListener(
  'click',
  e => {
    console.log('parent selector'), e.stopPropagation()
  },
  false
)
childSelector.addEventListener(
  'click',
  () => {
    console.log('childSelector')
  },
  false
)
