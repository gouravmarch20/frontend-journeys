// rest operater on array destructring => order mater 
const fruit = ['apple', 'orange', 'pineapple', 'kiwi', 'papaya', 'watermellon']
const [fruitOne, , fruitThree, ...restFruit] = fruit
console.log(fruitThree)
console.log(restFruit)
