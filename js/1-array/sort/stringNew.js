let employee_Ascii = ['nèha', 'hardik', 'éaster', 'chaitanya', 'spain']
const employe = () => {
  const sorted = employee_Ascii.sort(function (str1, str2) {
    return str1.localeCompare(str2)
  })
  return sorted
}
console.log(employe(employee_Ascii))
