const users = [
  ['gourav', 'india', 7000],
  ['dipesh', 'malasia', 8900]
]
// TODO: CONVERT INTO ARRAY OF OBJECT

// ? array destruct in map 
// ? 1 : object key value same then key name mai auto asing value , 2 key & value both define , return coustom key 
const userObj = users.map(([firstName, location, salary]) => ({
  firstName,
  location: location,
  inHandSalary: salary - 39
}))
console.log(userObj)
