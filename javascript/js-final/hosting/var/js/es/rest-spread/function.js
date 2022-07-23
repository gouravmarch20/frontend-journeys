const arr = [3, 4, 8]
function print ([...item]) {
  //**  rest operator
  console.log(item)
  console.log(item[0])
}
print([...arr]) // ** spread operater
