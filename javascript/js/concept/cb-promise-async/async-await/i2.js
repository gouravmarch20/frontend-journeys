const url1 = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://jsonplaceholder.typicode.com/posts'
const url3 = 'https://jsonplaceholder.typicode.com/albums'

const urls = [url1, url2, url3]

const fetchUsers = url => {
  const data = fetch(url)
  const result = data.json()
  console.log(result)
  return result
}
const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    )
    console.log(users)
    console.log(posts)
  } catch (error) {
    console.log(error)
  }
}
getData()
