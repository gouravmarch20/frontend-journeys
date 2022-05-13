// ! playsist remove in reducer
// *** state of redeucer mai
const playlists = [
  { id: 1, url: 'v1', img: 'i1' },
  { id: 2, url: 'v2', img: 'i2' },
  { id: 3, url: 'v3', img: 'i3' }
]
// user want to remove these id video
const removeVideo1 = 2
const removeVideo2 = 78
// ? found removed video --> then add it 
const stateReducerOne = playlists.map(playlist =>
  playlist.id === removeVideo1
    ? 'backend send added --------------- video as output '
    : playlist
)
//? not found removed video --> all same 
const stateReducerTwo = playlists.map(playlist =>
  playlist.id === removeVideo2
    ? 'backend send added video as output '
    : playlist
)

console.log(stateReducerOne)
console.log(stateReducerTwo)
