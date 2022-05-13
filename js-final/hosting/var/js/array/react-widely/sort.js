const arr = [
  { name: 'xeron', price: 12, category: 'advanced' },
  { name: 'goku', price: 12, category: 'advanced' },
  { name: 'vegeta', price: 12, category: 'advanced' },
  { name: 'dixon', price: 12, category: 'advanced' },
  { name: 'railtel', price: 12, category: 'advanced' }
]

//

const sortAlphabetOrder = arr.sort((a, b) => a.name.localeCompare(b.name))

console.log(sortAlphabetOrder)
