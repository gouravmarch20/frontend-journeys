//  no ref issue , spread ==> break into individual , and joined them in new array

const color = ['orange ', 'green ']
console.log(...color)
const newColor = [...color, 'blue ', 'red']
console.log(newColor)
