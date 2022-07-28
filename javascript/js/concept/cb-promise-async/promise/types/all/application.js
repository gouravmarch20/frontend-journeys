const urlOne = 's'
const urlTwo = ''
const urlThree = ''
const urls = [urlOne, urlTwo, urlThree]
Promise.all(
  urls.map(url => {
    return fetch(url)
      .then(res => res.json())
      .then(res => res)
      .catch(err => err)
  })
)
