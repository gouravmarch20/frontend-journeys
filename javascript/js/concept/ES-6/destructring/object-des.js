let obj = { nameO: 'gourav' }

const { nameO } = obj
console.log(nameO)
//  giving coustom name to key
obj = {
  nameO: 'gourav'
}
const { nameO: nickname } = obj
console.log(nickname)
//  nested object acessing & coustom name giving 
obj = {
  nameO: 'gourav',
  city: {
    location: 'delhi',
    more: {
      country: 'india'
    }
  }
}

const {
  city: {
    location,
    more: { country: countryName }
  }
} = obj

console.log(location)
console.log(countryName)
