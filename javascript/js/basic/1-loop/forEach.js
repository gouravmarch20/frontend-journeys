// delete  give item / key
const queryCopy = { filter: 'book', keyword: 'classmate', page: 4 }
const removeFields = ['keyword', 'page', 'limit']
removeFields.forEach(key => delete queryCopy[key])
console.log(queryCopy)
