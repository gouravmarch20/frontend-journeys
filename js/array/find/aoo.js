const mailData = [
  {
    id: 1,
    mail: 'tanay@neog.camp'
  },
  {
    id: 2,
    mail: 'tanvi@neog.camp'
  },
  {
    id: 3,
    mail: 'akanksha@neog.camp'
  }
]
console.log(mailData.find(m => m.mail === 'akanksha@neog.camp'))
console.log(mailData.find(m => m.mail))
console.log(mailData.find(m => m.mail === 'a'))
