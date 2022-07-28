const url1 = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://jsonplaceholder.typicode.com/posts'
const url3 = 'https://jsonplaceholder.typicode.com/albums'

const urls = [url1, url2, url3]

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url)
        return response.json()
      })
    )

    console.log(users)
    console.log(posts)
    console.log(albums)
  } catch (error) {
    console.log(error)
  }
}
getData()
